import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import NotificationNativeStackNavigator from './NotificationsNativeStackNavigator';

function AppNavigation() {
  return (
    <NavigationContainer>
      <NotificationNativeStackNavigator />
    </NavigationContainer>
  );
}
export default AppNavigation;
