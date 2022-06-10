import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {white} from '../constants/colors';
import {WINDOW_WIDTH} from '../constants/headerDimensions';

const CourseCard = ({id, course, style, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <ImageBackground
        source={require('../assets/images/bg-course3.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.information}>
          <Image
            source={require('../assets/images/logovku-white.png')}
            style={styles.image}
          />
          <Text style={styles.text}>{`${course.name}`}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: WINDOW_WIDTH * 0.95,
    height: 150,
    backgroundColor: white,
    marginTop: 10,
    // paddingBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: '45%',
    height: '35%',
    resizeMode: 'contain',
  },
  information: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: white,
  },
});

export default CourseCard;
