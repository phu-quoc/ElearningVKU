import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {white} from '../constants/colors';
import {WINDOW_WIDTH} from '../constants/headerDimensions';

const CourseCard = ({id, course, style, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <Image
        source={require('../assets/images/banner-course.png')}
        style={styles.image}
      />
      <View style={styles.course}>
      <FontAwesome5Icon name="book" size={30} style={styles.icon}/>
        <Text style={styles.text}>
          
          {`${course.name}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: WINDOW_WIDTH * 0.95,
    height: 150,
    backgroundColor: white,
    marginBottom: 10,
    padding: 10,
  },
  course: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 30,
  },
  image: {
    flex: 1,
    width: '100%',
    height: 20,
  },
  text: {
    fontWeight: 'bold'
  }
});

export default CourseCard;
