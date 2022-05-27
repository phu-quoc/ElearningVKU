import axios from 'axios';
import { axiosInstance, BASE_URL } from '../../api/axiosInstance';
import { BASE_URL_HEROKU } from '../../api/Common';


export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE_DETAILS = 'GET_COURSE_DETAILS';
export const ADD_COURSES = 'ADD_COURSES';
export const GET_COURSES_OF_USER = 'GET_COURSES_OF_USER'
export const CREATE_COURSE = 'CREATE_COURSE'

export const getCourses = () => async dispatch => {
  try {
    const response = await axiosInstance('/course');
    const courses = [];
    for (const key in response.data) {
      courses.push(response.data[key]);
    }

    dispatch({
      type: GET_COURSES,
      payload: courses,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getCourseOfUser = (token) => async dispatch => {
  try {
    let courses = [];
    const response = await axios.get(`${BASE_URL}/get-course-of-user`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    courses = await response.data;

    dispatch({
      type: GET_COURSES_OF_USER,
      payload: courses,
    })

  } catch (error) {
    console.error(error)
  }
}

export const createCourse = (token, categoryID, courseName) => async dispatch => {
  try {
    const response = await axios.post(`${BASE_URL}/course`, {
      categoryID: categoryID,
      courseName: courseName
    }, {
      "headers": {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })

    const course = await response.data;
    dispatch({
      type: CREATE_COURSE,
      payload: course
    })

  } catch (error) {
    console.error(error)
  }
}