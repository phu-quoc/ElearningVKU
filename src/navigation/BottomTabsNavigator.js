import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  NATIVE_STACK_NAVIGATOR_NAME,
  NOTIFICATIONS_SCREEN_NAME,
  SETTINGS_SCREEN_NAME,
} from '../constants/routeNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import NativeStackNavigator from './NativeStackNavigator';
import {NotificationButton} from '../components';
import {WINDOW_WIDTH} from '../constants/headerDimensions';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={NATIVE_STACK_NAVIGATOR_NAME}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === NATIVE_STACK_NAVIGATOR_NAME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === SETTINGS_SCREEN_NAME) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerLeft: () => (
          <Image
            source={require('../assets/images/logo_mobile_elearning.png')}
            style={styles.image}
          />
        ),
        headerTitle: '',
        headerShown: false,
        headerRight: () => (
          <NotificationButton
            onPress={() => navigation.navigate(NOTIFICATIONS_SCREEN_NAME)}
          />
        ),
      })}>
      <Tab.Screen
        name={NATIVE_STACK_NAVIGATOR_NAME}
        component={NativeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name={SETTINGS_SCREEN_NAME} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: WINDOW_WIDTH * 0.75,
    height: (WINDOW_WIDTH * 400) / 772,
    resizeMode: 'contain',
    minWidth: 200,
  },
});

export default BottomTabsNavigator;
