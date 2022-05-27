import axios from "axios";
import { BASE_URL,BASE_URL_HEROKU, getToken } from "./Common";
import {
  ToastAndroid,
} from 'react-native'


export const createAssignment = async (topicID, title, description, deadline, files) => {
  const token = await getToken();
  const data = new FormData();
  data.append('deadline', JSON.stringify(deadline));
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

  axios.post(`${BASE_URL_HEROKU}assignment`, data, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    ToastAndroid.showWithGravity("Tạo bài tập thành công!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }).catch(error => {
    console.log("error: ", error.message)
  })
}

export const getAssignment = (id, setAssignment) => {
  axios.get(`${BASE_URL_HEROKU}assignment/${id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => {
    console.log(response.data)
    setAssignment(response.data)
  }).catch(error => {
    console.error(error.message);
  })
}

export const turnIn = async (assignmentID, files) => {
  console.log(assignmentID)
  const token = await getToken();
  const data = new FormData();
  data.append('assignmentID', assignmentID)
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
  axios.post(`${BASE_URL}assignment-submission`, data, {
    "headers": {
      'Accept': 'application/json',
      'Content-Type': `multipart/form-data`,
      'Authorization': `Bearer ${token}`,
    }
  }
  ).then(response => {
    ToastAndroid.showWithGravity("Đã nộp bài tập!", ToastAndroid.SHORT, ToastAndroid.CENTER);
  }).catch(error => {
    console.log("error: ", error.message)
  })
}


export const getSubmission = async (assignment_id, setSubmisson) => {
  // get assignment submission
  const token = await getToken();
  axios.get(`${BASE_URL}assignment-submission/null?assignment_id=${assignment_id}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }).then(response => {
    setSubmisson(response.data)
  }).catch(error => {
    console.error("error: ", error.message)
  })
}