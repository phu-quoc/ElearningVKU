import axios from "axios";
import { BASE_URL, getToken } from "./Common";
import {
  ToastAndroid,
} from 'react-native'

export const createDocument = async (topicID, title, description, url, files) => {
  const token = await getToken();
  const data = new FormData();
  data.append('url', url);
  data.append('topicID', topicID);
  data.append('title', title);
  data.append('description', description);
  try {
    files.forEach(item => {
      const file = {
        uri: item.uri,
        name: item.name,
        type: item.type,
      }
      data.append('files[]', file)
    })
  } catch (error) {
    console.log("error: ", error.message)
  }
  axios.post(`${BASE_URL}resource`, data, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    ToastAndroid.showWithGravity("Tạo tài liệu thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }).catch(error => {
    console.log("error: ", error.message)
  })
}
