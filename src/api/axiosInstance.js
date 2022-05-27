import axios from 'axios';

export const BASE_URL = 'https://elearningvku-server.herokuapp.com/api';
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    enctype: 'multipart/form-data',
  },
});
