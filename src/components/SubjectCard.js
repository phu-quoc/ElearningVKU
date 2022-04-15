import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import icon from "../assets/icons/icon.png";

const SubjectCard = ({subject}) => {
    return (
        <TouchableOpacity
            style={styles.button}>
                <Image source={icon} style={styles.image}/>
                <Text>{`${subject.key}. ${subject.name}`}</Text> 
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

export default SubjectCard;