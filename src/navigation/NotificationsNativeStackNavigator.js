import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BOTTOM_TABS_NAVIGATOR_NAME,
  NOTIFICATIONS_SCREEN_NAME,
} from '../constants/routeNames';
import NotificationsScreen from '../screens/NotificationsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const NotificationsStack = createNativeStackNavigator();

function NotificationNativeStackNavigator() {
  return (
    <NotificationsStack.Navigator
      screenOptions={({navigation}) => ({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate(NOTIFICATIONS_SCREEN_NAME)}>
            <Image source={require('../assets/icons/favicon.png')} />
          </TouchableOpacity>
        ),
      })}>
      <NotificationsStack.Screen
        name={BOTTOM_TABS_NAVIGATOR_NAME}
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <NotificationsStack.Screen
        name={NOTIFICATIONS_SCREEN_NAME}
        component={NotificationsScreen}
        options={{headerRight: null}}
      />
    </NotificationsStack.Navigator>
  );
}

export default NotificationNativeStackNavigator;
