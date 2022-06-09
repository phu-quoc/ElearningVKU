import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './reducers/coursesReducer';
import authReducer from './reducers/authReducer';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import topicsReducer from './reducers/topicsReducer';
import { unSubmitAssignmentReducer } from './reducers/unSubmitAssignmentReducer';
// import unSubmitAssignmentReducer from './reducers/unSubmitAssignmentReducer';

const reducers = combineReducers({courses: coursesReducer, auth: authReducer, topics: topicsReducer, unSubmitAssignments: unSubmitAssignmentReducer});
const store = configureStore({reducer:reducers}, applyMiddleware(thunk));
export default store;
