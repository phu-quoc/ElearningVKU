import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {WINDOW_WIDTH} from '../constants/headerDimensions';
import {white} from '../constants/colors';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo_mobile_elearning.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 7,
    padding: 3,
    backgroundColor: white,
    shadowColor: '#000',
    elevation: 3,
    marginBottom: 1,
  },
  image: {
    flex: 1,
    width: '70%',
    height: (WINDOW_WIDTH * 400) / 772,
    resizeMode: 'contain',
  },
});
