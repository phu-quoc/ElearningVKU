import axios from 'axios';
import {getToken} from './Common';
import {ToastAndroid} from 'react-native';
import {BASE_URL} from './axiosInstance';
import { sendNotification } from './NotificationAPI';

export const createDocument = async (
  topicID,
  title,
  description,
  url,
  files,
  courseName,
  courseId
) => {
  const token = await getToken();
  const data = new FormData();
  data.append('url', url);
  data.append('topicID', topicID);
  data.append('title', title);
  data.append('description', description);
  try {
    if (files.length > 0) {
      files.forEach(item => {
        const file = {
          uri: item.uri,
          name: item.name,
          type: item.type,
        };
        data.append('files[]', file);
      });
    }
  } catch (error) {
    console.log('error: ', error.message);
  }
  axios
    .post(`${BASE_URL}/resource`, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      ToastAndroid.showWithGravity(
        response.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      sendNotification(token, 1, title, courseName, courseId);
    })
    .catch(error => {
      console.log(error.message);
      ToastAndroid.showWithGravity(
        'Tạo tài liệu thất bại',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    });
};

export const createLink = async (topicID, title, url, courseName, courseId) => {
  const token = await getToken();
  axios.post(`${BASE_URL}/url`, {
    topicID: topicID,
    title: title,
    url: url,
  }, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    ToastAndroid.showWithGravity("Lưu thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    sendNotification(token, 2, title, courseName, courseId);
  }).catch(error => {
    console.log("error: ", error.message)
  })
}
