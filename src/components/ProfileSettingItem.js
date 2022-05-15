import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

export default function ProfileSettingItem(props) {
  const [text, setText] = useState("")

  return (
    <View style={styles.profileItem}>
      <Text style={{ ...styles.text, fontWeight: "bold", }}>{props.title}:</Text>
      <SelectDropdown
        data={props.data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  profileItem: {
    fontSize: 16,
    flexDirection: 'row',
    color: 'black',
    marginLeft: 15,
    paddingBottom: 10,
  },
  text: {
    lineHeight: 40,
    fontSize: 16,
    minWidth: 100,
    textAlign: 'right',
  },
  input: {
    width: 200,
    marginLeft: 10,
    borderBottomWidth: 1,
    padding: 10,
    color: 'black',
  }
})