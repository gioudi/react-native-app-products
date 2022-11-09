import axios from 'axios';

const baseURL = 'https://localhost:8080/api';

const cafeApi = axios.create({baseURL});

export default cafeApi;
