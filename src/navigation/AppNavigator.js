import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NotificationNativeStackNavigator from './NotificationsNativeStackNavigator';
import LoginScreen from '../screens/LoginScreen';

function AppNavigation() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? <NotificationNativeStackNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
}
export default AppNavigation;
