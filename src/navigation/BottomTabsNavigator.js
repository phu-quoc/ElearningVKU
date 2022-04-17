import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  NATIVE_STACK_NAVIGATOR_NAME,
  NOTIFICATIONS_SCREEN_NAME,
  SETTINGS_SCREEN_NAME,
} from '../constants/routeNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import NativeStackNavigator from './NativeStackNavigator';
import { NotificationButton } from '../components';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator({navigation}) {
  return (
    <Tab.Navigator initialRouteName={NATIVE_STACK_NAVIGATOR_NAME}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let rn = route.name;

        if (rn === NATIVE_STACK_NAVIGATOR_NAME) {
          iconName = focused ? "home" : "home-outline";
        } else if (rn === SETTINGS_SCREEN_NAME) {
          iconName = focused ? "settings" : "settings-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerRight: () => <NotificationButton onPress={() => navigation.navigate(NOTIFICATIONS_SCREEN_NAME)} />
    })}
    >
      <Tab.Screen
        name={NATIVE_STACK_NAVIGATOR_NAME}
        component={NativeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name={SETTINGS_SCREEN_NAME} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
