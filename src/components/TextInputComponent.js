import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function TextInputComponent(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        multiline={props.multiline}
        numberOfLines={props?.numberOfLines ?props.numberOfLines: 1}
      >
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
      backgroundColor: '#e0e0e0',
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5,
  },
  input: {
      padding: 15,
      color: '#000000',
      fontSize: 18,
      textAlignVertical: 'top' 
  },
})