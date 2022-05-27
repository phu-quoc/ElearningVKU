import axios from 'axios';
import {axiosInstance} from '../../api/axiosInstance';

export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE_DETAILS = 'GET_COURSE_DETAILS';
export const ADD_COURSES = 'ADD_COURSES';

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

