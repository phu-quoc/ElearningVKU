import axios from 'axios';

export const BASE_URL = 'https://elearningvku-server.herokuapp.com/api';
// export const BASE_URL = 'https://ac53-2402-9d80-409-1ee1-cdae-81b9-758f-a827.ap.ngrok.io/api';
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    enctype: 'multipart/form-data',
  },
});
