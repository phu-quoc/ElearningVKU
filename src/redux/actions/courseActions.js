import axios from 'axios';
import {axiosInstance, BASE_URL} from '../../api/axiosInstance';

export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE_DETAILS = 'GET_COURSE_DETAILS';
export const ADD_COURSES = 'ADD_COURSES';
export const GET_COURSE_OF_USER = 'GET_COURSE_OF_USER';

export const getCourseOfUser = (token) => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/get-course-of-user`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const courses = [];
    for (const key in response.data) {
      courses.push(response.data[key]);
    }

    dispatch({
      type: GET_COURSE_OF_USER,
      payload: courses,
    });
  } catch (error) {
    console.log(error);
  }
};
