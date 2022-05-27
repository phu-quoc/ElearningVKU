import { ADD_COURSES, GET_COURSES, GET_COURSES_OF_USER } from '../actions/courseActions';

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
    case GET_COURSES_OF_USER:
      console.log(action.payload)
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
