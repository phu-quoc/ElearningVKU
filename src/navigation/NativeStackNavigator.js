import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

//Screens
import TopTabsNavigator from '../navigation/TopTabsNavigator';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import {
  COURSE_DETAILS_SCREEN_NAME,
  NOTIFICATIONS_SCREEN_NAME,
  TOP_TABS_NAVIGATOR_NAME,
  ASSIGNMENT_DETAIL_SCREEN_NAME

} from '../constants/routeNames';
import { NotificationButton } from '../components';
import AssignmentDetailScreen from '../screens/AssignmentDetailScreen';

const Stack = createNativeStackNavigator();

function NativeStackNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName={TOP_TABS_NAVIGATOR_NAME}
    screenOptions={{headerRight: () => <NotificationButton onPress={() => navigation.navigate(NOTIFICATIONS_SCREEN_NAME)} />}}>
      <Stack.Screen
        name={TOP_TABS_NAVIGATOR_NAME}
        component={TopTabsNavigator}
      />
      <Stack.Screen
        name={COURSE_DETAILS_SCREEN_NAME}
        component={CourseDetailsScreen}
      />
      {/* <Stack.Screen
        name={ASSIGNMENT_DETAIL_SCREEN_NAME}
        component={AssignmentDetailScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default NativeStackNavigator;
