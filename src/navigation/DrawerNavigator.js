import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import { BOTTOM_TABS_NAVIGATOR_NAME, COURSE_DETAILS_SCREEN_NAME } from '../constants/routeNames';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import DrawerContent from '../screens/DrawerContent'
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName={BOTTOM_TABS_NAVIGATOR_NAME}
            screenOptions={{ drawerPosition: 'right' }}
        >
            <Drawer.Screen name={BOTTOM_TABS_NAVIGATOR_NAME} component={BottomTabsNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name={COURSE_DETAILS_SCREEN_NAME} component={CourseDetailsScreen} options={{ headerLeft: false }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;