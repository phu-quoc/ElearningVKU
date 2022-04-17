import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import icon from "../assets/icons/icon.png";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CourseCard = ({course, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
                <FontAwesome5Icon name='angle-double-right' size={30} />
                <Text>{`${course.key}. ${course.name}`}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width*.9,
        height:150,
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    image: {
        width: 30,
        height: 30
    }
})

export default CourseCard;