import React, { useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WINDOW_WIDTH} from '../constants/headerDimensions';
import {Image, StyleSheet} from 'react-native';

//Screens
import TopTabsNavigator from '../navigation/TopTabsNavigator';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import {
  COURSE_DETAILS_SCREEN_NAME,
  NOTIFICATIONS_SCREEN_NAME,
  TOP_TABS_NAVIGATOR_NAME,
  ASSIGNMENT_DETAIL_SCREEN_NAME,
} from '../constants/routeNames';
import {NotificationButton} from '../components';
import AssignmentDetailScreen from '../screens/AssignmentDetailScreen';

const Stack = createNativeStackNavigator();

function NativeStackNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName={TOP_TABS_NAVIGATOR_NAME}
      screenOptions={{
        // headerLeft: () => (
        //   <Image
        //     source={require('../assets/images/logo_mobile_elearning.png')}
        //     style={styles.image}
        //   />
        // ),
        // title: '',
      }}>
      <Stack.Screen
        name={TOP_TABS_NAVIGATOR_NAME}
        component={TopTabsNavigator}
        options={{headerShown: false}}  
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

const styles = StyleSheet.create({
  image: {
    width: WINDOW_WIDTH * 0.75,
    height: (WINDOW_WIDTH * 400) / 772,
    resizeMode: 'contain',
    minWidth: 200,
  },
});

export default NativeStackNavigator;
