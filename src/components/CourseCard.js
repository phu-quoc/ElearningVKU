import React from 'react';
// import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import {Dimensions} from 'react-native';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import icon from "../assets/icons/icon.png";
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
// const CourseCard = ({ course, onPress }) => {
//     return (
//         <TouchableOpacity
//             style={styles.button}
//             onPress={onPress}
//         >
//             <View style={styles.titleContainer}>
//                 <FontAwesome5Icon name='book' size={30} />
//                 <Text style={styles.text}> {`${course.key}. ${course.name}`} </Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     button: {
//         width: Dimensions.get('window').width * .9,
//         height: 150,
//         backgroundColor: "#fff",
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//         marginBottom: 10
//     },
//     image: {
//         width: 30,
//         height: 30
//     },
//     text: {
//         fontSize: 18,
//     },
//     titleContainer: {
//         flexDirection: 'row',
//         padding: 15,
//         justifyContent: 'center'
//     }
// })

export default CourseCard;
