import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {pink} from '../constants/colors';

const CourseCard = ({course, style, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.button, ...style}} onPress={onPress}>
      <FontAwesome5Icon name="book" size={30} />
      <Text>{`${course.id}. ${course.name}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width * 0.9,
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default CourseCard;
