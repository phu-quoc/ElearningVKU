import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native';


function ProfileItem(props) {
  return (
    <View style={styles.profileItem}>
      <Text style={{ ...styles.text, fontWeight: "bold",  }}>{props.title}:</Text>
      <Text style={styles.text}> {props.value}</Text>
    </View>
  )
}

export default ProfileItem

const styles = StyleSheet.create({
  profileItem: {
    fontSize: 16,
    flexDirection: 'row',
    color: 'black',
    marginLeft: 15
  }, 
  text:{
    lineHeight: 30,
    fontSize: 16,
  }
})