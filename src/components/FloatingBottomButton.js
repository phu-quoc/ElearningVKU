import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FloatingBottomButton(props) {
  return (
    <View style={styles.btnContainer}>
        <TouchableHighlight
          styles={styles.button}
          activeOpacity={0.6}
          underlayColor="tomato"
          onPress={props.onPress}
        >
          <Icon
            name={props.icon}
            color={"#fff"}
            size={30}
          />
        </TouchableHighlight>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: "center",
    bottom: 50,
    right: 50,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "tomato",
  },
  button: {

  }
});