import axios from 'axios';
import {BASE_URL} from './axiosInstance';

export const sendNotification = async (token, resource_type, title, course_name) => {
  const response = await axios.post(
    `${BASE_URL}/send-notification`,
    {
      resource_type: resource_type,
      title: title,
      course_name: course_name
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
