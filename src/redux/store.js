import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './reducers/coursesReducer';
import authReducer from './reducers/authReducer';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({courses: coursesReducer, auth: authReducer});
const store = configureStore({reducer:reducers}, applyMiddleware(thunk));
export default store;
