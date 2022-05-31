import {ToastAndroid} from 'react-native';
import {GET_UNSUBMIT_ASSIGNMENTS} from '../actions/unSubmitAssignmentActions'
const initialState = {
  unSubmitAssignments: [],
};

export const unSubmitAssignmentReducer = (state= initialState, action) =>{
  switch (action.type) {
    case GET_UNSUBMIT_ASSIGNMENTS:
      return {
        ...state,
        unSubmitAssignments: action.payload
      }
    default:
      return state;
  }
}