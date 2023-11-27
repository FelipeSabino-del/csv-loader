import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import papaparse from 'papaparse';

const app = express();
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage });

interface UserData {
  [key: string]: any;
}

let csvData: UserData[] = [];

app.use(cors());

app.post('/api/files', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const csvString = req.file.buffer.toString('utf8');

  try {
    const results = papaparse.parse(csvString, { header: true, dynamicTyping: true });
    csvData = results.data as UserData[];

    res.status(200).json({ message: 'The file was uploaded successfully.' });
  } catch (error) {
    console.error('CSV parsing error:', error);
    res.status(500).json({ message: 'An error occurred while processing the CSV file.' });
  }
});

app.get('/api/users', (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.q as string;

    if (!searchTerm) {
      res.status(200).json({ data: csvData });
      return;
    }

    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const searchResults = csvData.filter((user) =>
      Object.values(user).some((value) =>
        String(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(normalizedSearchTerm)
      )
    );

    res.status(200).json({ data: searchResults });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'An error occurred while fetching user data.' });
  }
});

export default app;
