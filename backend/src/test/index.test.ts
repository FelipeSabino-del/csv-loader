import "@testing-library/jest-dom";
import request from 'supertest';
import http from 'http';
import app from '../index-test';
import fs from 'fs';
import path from 'path';

describe('POST /api/files && GET /api/users', () => {
 it('should upload a csv file', async () => {
   const filePath = path.resolve(__dirname, '../../../test.csv');
   const fileStream = fs.createReadStream(filePath);

   const response = await request(app)
     .post('/api/files')
     .attach('file', fileStream);

   expect(response.status).toBe(200);
   expect(response.body).toHaveProperty('message', 'The file was uploaded successfully.');
   app.removeAllListeners();
 });

 it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
    app.removeAllListeners();
  });

  afterAll((done) => {
    const server = http.createServer(app);
    server.close(() => {
      done();
    });
  });

  app.removeAllListeners();
});