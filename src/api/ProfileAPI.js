import axios from "axios";
import {
  ToastAndroid,
} from 'react-native'
import { getToken } from "./Common";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "./axiosInstance";


export const getAllDepartments = (setDepartment) => {
  axios.get(`${BASE_URL}/department`, {
    headers: { 'Content-Type': 'application/json' }
  }).then(response => {
    setDepartment(response.data);
  }).catch(err => {
    console.error(err);
  })
}

export const updateProfile = async (phone) => {
  const token = await getToken();
  console.log('token', token);

  axios.put(`${BASE_URL}/user/null`, {
    data: {
      phone: phone
    }
  }, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    AsyncStorage.setItem("USER", JSON.stringify(response));
    console.log("update", response.data)
    ToastAndroid.showWithGravity("Cập nhật thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }).catch(error => {
    console.error(error)
  })
}
