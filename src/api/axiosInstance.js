import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://elearningvku-server.herokuapp.com/api/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'enctype': 'multipart/form-data'
    }
})