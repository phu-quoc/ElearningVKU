import axios from "axios";
import { BASE_URL,BASE_URL_HEROKU, getToken } from "./Common";
import {
  ToastAndroid,
} from 'react-native'

export const addTopic = async (name, course_id,topics, setTopics) => {
  const token = await getToken();
  axios.post(`${BASE_URL_HEROKU}topic`, {
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
    ToastAndroid.showWithGravity("Tạo chủ đề thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    setTopics([...topics, response.data])
  }).catch(error => {
    console.error(error.code)

  })
}

export const getTopicByCourse =async (courseID, setTopics)=>{
  const token = await getToken();
  console.log("token: ",token)
  axios.get(`${BASE_URL_HEROKU}get-topics-by-course?courseId=${courseID}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(response => {
    console.log(response.data)
    // 
    setTopics(response.data)
  }).catch(error => {
    console.error(error.message);
  })
}