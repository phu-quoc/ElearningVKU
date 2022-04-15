import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
//Screens
import SettingsScreen from '../screens/SettingsScreen';

//TopTabs
import TopTabNavigation from './TopTabsNavigation';
import {Image, StyleSheet} from 'react-native';

const settingsName = 'Settings';
const topTabsNavigationName = 'TopTabsNavigation';

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;

const headerImageWidth = windowWidth*.8;
const headerImageHeight = (headerImageWidth * 107) / 600;

const screenOptions = {
  headerLeft: () => (
    <Image
    style={styles.headerImage}
    source={require('../assets/images/logo_mobile_elearning.png')} />
  ),
  title: '',
};

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={topTabsNavigationName}
          component={TopTabNavigation}
          options={screenOptions}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={screenOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: headerImageWidth,
    height: headerImageHeight,
  },
});
export default AppNavigation;
