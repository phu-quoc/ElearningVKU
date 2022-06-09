import axios from 'axios';
import {BASE_URL} from './axiosInstance';

export const sendNotification = async (token) => {
  const response = await axios.post(
    `${BASE_URL}/send-notification`,
    {
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  console.log(response);
};
