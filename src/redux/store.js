import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './reducers/coursesReducer';
import authReducer from './reducers/authReducer';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import topicsReducer from './reducers/topicsReducer';

const reducers = combineReducers({courses: coursesReducer, auth: authReducer, topics: topicsReducer});
const store = configureStore({reducer:reducers}, applyMiddleware(thunk));
export default store;
