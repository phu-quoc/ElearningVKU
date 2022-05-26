import {ADD_COURSES, GET_COURSES, GET_COURSE_DETAILS} from '../actions/courseActions';

const initialState = {
  courses: [],
  courseDetails: [],
};
const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case GET_COURSE_DETAILS:
      const courseDetails = state.courseDetails
      return {
        ...state,
        courseDetails: courseDetails.concat(action.payload),
      };
    default:
      return state;
  }
};

export default coursesReducer;
