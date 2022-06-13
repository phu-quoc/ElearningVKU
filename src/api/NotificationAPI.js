import axios from 'axios';
import {BASE_URL} from './axiosInstance';

export const sendNotification = async (token, resource_type, title, course_name, course_id) => {
  const response = await axios.post(
    `${BASE_URL}/send-notification`,
    {
      resource_type: resource_type,
      title: title,
      course_name: course_name,
      course_id: course_id
    },
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  console.log("Notification response: ",response);
};
