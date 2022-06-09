import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  DRAWER_NAVIGATOR_NAME,
  NOTIFICATIONS_SCREEN_NAME,
} from '../constants/routeNames';
import NotificationsScreen from '../screens/NotificationsScreen';
import DrawerNavigator from './DrawerNavigator';

const NotificationsStack = createNativeStackNavigator();

const NotificationNativeStackNavigator = () => {
  return (
    <>
      
      <NotificationsStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <NotificationsStack.Screen
          name={DRAWER_NAVIGATOR_NAME}
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <NotificationsStack.Screen
          name={NOTIFICATIONS_SCREEN_NAME}
          component={NotificationsScreen}
          options={{headerRight: null}}
        />
      </NotificationsStack.Navigator>
    </>
  );
};

export default NotificationNativeStackNavigator;
