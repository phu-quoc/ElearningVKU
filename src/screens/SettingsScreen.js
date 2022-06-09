import React from 'react';
import {Text, View} from 'react-native';
import {HomeHeader} from '../components/HomeHeader';

function SettingsScreen({navigation}) {
  return (
    <>
      <HomeHeader />
      <View>
        <Text>SettingsScreen</Text>
      </View>
    </>
  );
}

export default SettingsScreen;
