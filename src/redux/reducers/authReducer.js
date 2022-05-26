import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTO_LOGIN, GET_USER, LOGIN, LOGOUT} from '../actions/authActions';

const initialState = {
  user: '',
  bearerToken: '',
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      AsyncStorage.setItem('@Token', action.payload);
      return {
        ...state,
        bearerToken: action.payload,
        isAuth: true,
      };
    case AUTO_LOGIN:
      return {
        ...state,
        bearerToken: action.payload,
        isAuth: true,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      AsyncStorage.removeItem('@Token');
      return {
        ...state,
        user: '',
        bearerToken: '',
        isAuth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
