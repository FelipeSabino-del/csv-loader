import { useState, useEffect } from 'react';
import { Flex, Input, VStack, Box, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import CsvCard from '../components/CsvCard';
import api from '../services/api';
import { Link } from 'react-router-dom';

const SearchScreen = () => {
  const [csvData, setCsvData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
      api.get('/api/users?q=' + searchTerm).then((response) => setCsvData(response.data.data));
  }, [searchTerm]);

  return (
    <Flex direction="column" align="center" p={4} top={0} left={0} right={0} minH="100vh">
      <Flex justify="space-between" align="center" w="100%" mb={4}>
        <Box mr="1%">
          <Link to="/">
            <Button leftIcon={<ArrowBackIcon />} colorScheme="green" variant="outline">
              Back to Upload
            </Button>
          </Link>
        </Box>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Flex>
      <VStack spacing={4} align="stretch" w="100%" mt={20}>
        {csvData.length > 0 && csvData.map((rowData, index) => (
          <CsvCard key={index} data={rowData} />
        ))}
      </VStack>
    </Flex>
  );
};

export default SearchScreen;
