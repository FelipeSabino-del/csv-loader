import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

const handleError = (error: any) => {
    console.error('Request error:', error);
    throw error;
};
  
api.interceptors.response.use((response) => response, handleError); 

export default api;
