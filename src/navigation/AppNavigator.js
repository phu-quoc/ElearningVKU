import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NotificationNativeStackNavigator from './NotificationsNativeStackNavigator';
import LoginScreen from '../screens/LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {autoLogin} from '../redux/actions/authActions';
import PushNotification from 'react-native-push-notification';

function AppNavigation() {
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem('@Token');
      if (token !== null) {
        dispatch(autoLogin(token));
      }
    }
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {!isAuth && <LoginScreen />}
      {isAuth && <NotificationNativeStackNavigator />}
    </NavigationContainer>
  );
}
export default AppNavigation;
