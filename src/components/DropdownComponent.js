import React from 'react'
import { View, StyleSheet, } from 'react-native'
import Select, { SelectConfig, SelectItem } from '@redmin_delishaj/react-native-select';


export default function DropdownComponent(props) {
  const config = {
    fontSize: 18,
    backgroundColor: '#e0e0e0',
    textColor: 'black',
    selectedBackgroundColor: 'white',
    selectedTextColor: 'black',
    selectedFontWeight: 'bold',
  }

  return (
    <View style={styles.dropdown}>
      <Select
        data={props.data}
        onSelect={props.onSelect}
        placeholder={props.placeholder}
        value={props.value}
        config={config}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  dropdown: {
      paddingTop: 30,
      alignItems: "center",
  },
})