import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://648ae22b17f1536d65e9e5ee.mockapi.io',
});

export default instance;
