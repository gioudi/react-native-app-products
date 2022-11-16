import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'https://localhost:8080/api';

const cafeApi = axios.create({baseURL});

cafeApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
});

export default cafeApi;
