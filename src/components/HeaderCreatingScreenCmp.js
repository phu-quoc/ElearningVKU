import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Drawer } from 'react-native-paper';

export default function HeaderCreatingScreenCmp(props) {
  const CloseHandler = () => {
    props.navigation.goBack()
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity   
          onPress={CloseHandler}
          style={styles.btnClose}
        >
          <Icon
            name="close"
            color={'#000000'}
            size={30}
          />
        </TouchableOpacity>
        <Drawer.Section>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </Drawer.Section>

      </View>
      <TouchableOpacity style={styles.btnCreate} onPress={props.onPress}>
        <Text style={styles.text}>Tạo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    color: '#000000',
    fontSize: 25,
    lineHeight: 40,
    padding: 5,
    marginLeft: 10,
    width: 300,
  },
  btnClose: {
    marginLeft: 15,
    marginTop: -5,
  },
  btnCreate: {
    position: 'absolute',
    right: 20,
    top: 10,
    width: 60,
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
})