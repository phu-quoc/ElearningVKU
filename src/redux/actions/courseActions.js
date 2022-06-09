import axios from 'axios';
import {axiosInstance, BASE_URL} from '../../api/axiosInstance';
import {BASE_URL_HEROKU} from '../../api/Common';


export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE_DETAILS = 'GET_COURSE_DETAILS';
export const ADD_COURSES = 'ADD_COURSES';
export const GET_COURSES_OF_USER = 'GET_COURSES_OF_USER';

export const getCourseOfUser = token => async dispatch => {
  try {
    let courses = [];
    const response = await axios.get(`${BASE_URL}/get-course-of-user`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    courses = await response.data;

    dispatch({
      type: GET_COURSES_OF_USER,
      payload: courses,
    });
  } catch (error) {
    console.error(error);
  }
};
