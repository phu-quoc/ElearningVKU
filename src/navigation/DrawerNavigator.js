import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  BOTTOM_TABS_NAVIGATOR_NAME,
  COURSE_DETAILS_SCREEN_NAME,
} from '../constants/routeNames';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={BOTTOM_TABS_NAVIGATOR_NAME}
      screenOptions={{}}>
      <Drawer.Screen
        name={BOTTOM_TABS_NAVIGATOR_NAME}
        component={BottomTabsNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
