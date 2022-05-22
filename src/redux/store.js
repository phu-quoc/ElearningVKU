import {configureStore} from '@reduxjs/toolkit';
import coursesReducer from './reducers/reducer';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({courses: coursesReducer});
const store = configureStore({reducer:reducers}, applyMiddleware(thunk));
export default store;
