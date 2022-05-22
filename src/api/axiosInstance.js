import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://elearningvku-server.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})