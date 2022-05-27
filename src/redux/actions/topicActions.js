import axios from 'axios';
import {axiosInstance, BASE_URL} from '../../api/axiosInstance';

export const ADD_TOPIC = 'ADD_TOPIC';
export const GET_TOPICS = 'GET_TOPICS';

export const addTopic =
  (name, courseId, token) =>
  async dispatch => {
    try {
      const response = await axios.post(
        `${BASE_URL}/topic`,
        {
          name: name,
          course_id: courseId,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const topic = response.data;
      dispatch({
        type: ADD_TOPIC,
        payload: topic,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getTopicsByCourse =
  (id, token) =>
  async dispatch => {
    try {
      const response = await axios.get(
        `${BASE_URL}/get-topics-by-course`,
        {
          params: {courseId: id},
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const topics = await response.data;
      dispatch({
        type: GET_TOPICS,
        payload: topics,
      });
   
    } catch (error) {
      console.log(error);
    }
  };
