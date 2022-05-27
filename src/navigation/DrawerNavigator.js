import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {
    BOTTOM_TABS_NAVIGATOR_NAME,
    COURSE_DETAILS_SCREEN_NAME,
    CREATE_COURSE_SCREEN_NAME,
    PROFILE_SCREEN_NAME,
    CREATE_ASSIGNMENT_SCREEN_NAME,
    CREATE_DOCUMENT_SCREEN_NAME, 
    ASSIGNMENT_DETAIL_SCREEN_NAME
} from '../constants/routeNames';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import BottomTabsNavigator from './BottomTabsNavigator';
import DrawerContent from '../screens/DrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
import CreateCourseScreen from '../screens/CreateCourseScreen';
import CreateAssignmentScreen from '../screens/CreateAssignmentScreen';
import CreateDocumentScreen from '../screens/CreateDocumentScreen';
import AssignmentDetailScreen from '../screens/AssignmentDetailScreen';

const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName={BOTTOM_TABS_NAVIGATOR_NAME}
//       screenOptions={{}}>
//       <Drawer.Screen
//         name={BOTTOM_TABS_NAVIGATOR_NAME}
//         component={BottomTabsNavigator}
//         options={{ headerShown: false }}
//       />
//     </Drawer.Navigator>
//   );
function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName={BOTTOM_TABS_NAVIGATOR_NAME}
            screenOptions={{ drawerPosition: 'right' }}
        >
            <Drawer.Screen name={BOTTOM_TABS_NAVIGATOR_NAME} component={BottomTabsNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name={COURSE_DETAILS_SCREEN_NAME} component={CourseDetailsScreen} options={{ headerLeft: false }} />
            <Drawer.Screen name={PROFILE_SCREEN_NAME} component={ProfileScreen} options={{ headerShown: false }} />
            <Drawer.Screen name={CREATE_COURSE_SCREEN_NAME} component={CreateCourseScreen} options={{ headerShown: false }} />
            <Drawer.Screen name={CREATE_ASSIGNMENT_SCREEN_NAME} component={CreateAssignmentScreen} options={{ headerShown: false }} />
            <Drawer.Screen name={CREATE_DOCUMENT_SCREEN_NAME} component={CreateDocumentScreen} options={{ headerShown: false }} />
            <Drawer.Screen name={ASSIGNMENT_DETAIL_SCREEN_NAME} component={AssignmentDetailScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
