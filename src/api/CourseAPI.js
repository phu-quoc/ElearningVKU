import axios from "axios";
import { BASE_URL, getToken } from "./Common";
import {
  ToastAndroid,
} from 'react-native'

export const getAllCategories = (setCategories) => {
  axios.get(`${BASE_URL}category`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response.data)
    setCategories(response.data)
  }).catch(error => {
    console.error(error.message);
  })
}
export const createCourse = async (categoryID, courseName) => {
  const token = await getToken();
  axios.post(`${BASE_URL}course`, {
    categoryID: categoryID,
    courseName: courseName
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