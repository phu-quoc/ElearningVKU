import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import AssignmentsScreen from '../screens/AssignmentsScreen';

const homeName = "Home";
const assignmentsName = "Assignments";

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={assignmentsName} component={AssignmentsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigation;
