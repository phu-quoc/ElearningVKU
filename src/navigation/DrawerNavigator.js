import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { COURSE_DETAILS_SCREEN_NAME, NOTIFICATIONS_NATIVE_STACK_NAME } from '../constants/routeNames';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import NotificationNativeStackNavigator from './NotificationsNativeStackNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
        initialRouteName={NOTIFICATIONS_NATIVE_STACK_NAME}
        screenOptions={{drawerPosition: 'right'}}
        >
            <Drawer.Screen name={NOTIFICATIONS_NATIVE_STACK_NAME} component={NotificationNativeStackNavigator} options={{headerShown: false}}/>
            <Drawer.Screen name={COURSE_DETAILS_SCREEN_NAME} component={CourseDetailsScreen} options={{headerLeft: false}}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;