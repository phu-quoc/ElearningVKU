import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Drawer} from 'react-native-paper';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeaderInsertFileComponent(props) {
  const CloseHandler = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={CloseHandler} style={styles.btnClose}>
          <Icon name="close" color={'#000000'} size={30} />
        </TouchableOpacity>
        <Drawer.Section>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </Drawer.Section>
        <View style={{flexDirection: 'row', fontWeight: 'bold'}}>
          <TouchableOpacity onPress={props.onSelectFiles}>
            <Icon name="paperclip" color={'#000000'} size={27} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.btnCreate} onPress={props.onSent}>
        <FontAweSome5 name="paper-plane" color={'#000000'} size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
  },
  headerTitle: {
    color: '#000000',
    fontSize: 25,
    lineHeight: 40,
    padding: 5,
    marginLeft: 10,
    width: 250,
  },
  btnClose: {
    marginLeft: 15,
    marginTop: -5,
  },
  btnCreate: {
    position: 'absolute',
    right: 20,
    top: 10,
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
