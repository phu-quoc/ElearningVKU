import {ADD_COURSES, GET_COURSES} from '../actions/courseActions';

const initialState = {
  courses: [],
};
const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
