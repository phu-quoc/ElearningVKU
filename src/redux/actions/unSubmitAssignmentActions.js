import axios from 'axios';
import { axiosInstance, BASE_URL } from '../../api/axiosInstance';

export const GET_UNSUBMIT_ASSIGNMENTS = "GET_UNSUBMIT_ASSIGNMENTS"

export const getUnSubmitAssignments = (token) => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}/get-un-submit-assignments-of-user`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const unSubmitAssignments = await response.data;
    console.log(unSubmitAssignments);
    dispatch({
      type:GET_UNSUBMIT_ASSIGNMENTS,
      payload: unSubmitAssignments,
    })
  } catch (error) {
    console.error("un submit assignments error: ",error.message)
  }
}