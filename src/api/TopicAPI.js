import axios from "axios";
import { BASE_URL, getToken } from "./Common";
import {
  ToastAndroid,
} from 'react-native'

export const addTopic = async (name, course_id) => {
  const token = await getToken();
  axios.post(`${BASE_URL}topic`, {
    name: name,
    course_id: course_id
  }, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    ToastAndroid.showWithGravity("Tạo lớp học thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }).catch(error => {
    console.error(error.code)

  })
}