import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUser} from '../../api/Common';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTO_LOGIN = 'AUTO_LOGIN';
export const GET_USER = 'GET_USER';

export const login = () => async dispatch => {
  try {
    await GoogleSignin.hasPlayServices();
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const userAuth = await auth().signInWithCredential(googleCredential);
    // console.log(idToken);
    const response = await axios.post(
      'https://elearningvku-server.herokuapp.com/api/login',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          enctype: 'multipart/form-data',
        },
        data: {
          idToken: idToken,
        },
      },
    );
    const responseData = await response.data;
    const bearerToken = await responseData.token;
    // userAuth
    //   .then(data => {
    // console.log('Google response:', data);
    // additionalUserInfo = data.additionalUserInfo;
    // console.log('Hello vietnam: '+JSON.stringify(additionalUserInfo));
    // setUser({
    //   name: data.additionalUserInfo.profile.name,
    //   email: data.additionalUserInfo.profile.email,
    // })
    // console.log(idToken);
    // loginHandler(idToken, user, setUser);
    // console.log('Drawer content:', user);
    // setIsLoggined(true);
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //   });
    dispatch({
      type: LOGIN,
      payload: bearerToken,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUser = token => async dispatch => {
    try {
        const response = await axios.get(
            'https://elearningvku-server.herokuapp.com/api/user',
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              }
            },
          );
          const user = await response.data;
          dispatch({
              type: GET_USER,
              payload: user
          });
    } catch (error) {
    console.error(error.message);
    }
};

export const autoLogin = token => dispatch => {
  dispatch({
    type: AUTO_LOGIN,
    payload: token,
  });
};

export const logout = token => async dispatch => {
  try {
    await axios.get(`https://elearningvku-server.herokuapp.com/api/logout`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    await GoogleSignin.signOut();
    dispatch({
        type: LOGOUT,
        payload: ''
    });
  } catch (error) {
    console.error(error.message);
  }
};
