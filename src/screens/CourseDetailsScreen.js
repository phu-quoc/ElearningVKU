import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Modal, Alert, TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import FloatingBottomButton from '../components/FloatingBottomButton';
import { DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Drawer } from 'react-native-paper';
import TextInputComponent from '../components/TextInputComponent';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { CREATE_ASSIGNMENT_SCREEN_NAME, CREATE_DOCUMENT_SCREEN_NAME } from '../constants/routeNames';

function CourseDetailsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false) //main modal show menu
  const [modalTopicView, setModalTopicView] = useState(false) //modal add topic
  const [topic, setTopic] = useState("")

  const pressButtonHandler = () => {
    setModalVisible(!modalVisible)
  }
  const clickTopicHandler = () => {
    setModalVisible(false)
    setModalTopicView(true)
  }
  const AddTopicHandler = () => {
    setModalTopicView(false);
    alert(topic)
  }

  return (
    <View style={{ flex: 1 }}>
      <FloatingBottomButton icon="plus" onPress={pressButtonHandler} />
      <Modal
        animationType="slide"
        visible={modalTopicView}
        transparent={true}
        onRequestClose={() => setModalTopicView(!modalTopicView)}
      >
        <View style={styles.centerView}>

          <View style={styles.modalTopicView}>
            <TouchableHighlight
              underlayColor='#ffffffff'
              onPress={() => { setModalTopicView(false) }}
              style={styles.btnClose}
            >
              <Icon
                name="close"
                color={'#000000'}
                size={30}
              />
            </TouchableHighlight>
            <View style={{ width: 280, }}>
              <TextInputComponent placeholder="Nhập chủ đề" value={topic} onChangeText={setTopic} />
            </View>
            <Pressable onPress={AddTopicHandler} style={styles.btnAddTopic}>
              <Text style={styles.text}>Thêm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity style={styles.modalView} onPress={() => { setModalVisible(false); }}>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Chủ đề"
              onPress={clickTopicHandler}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="clipboard-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bài tập"
              onPress={() => {
                setModalVisible(false)
                navigation.navigate(CREATE_ASSIGNMENT_SCREEN_NAME)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="notebook-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Tài liệu"
              onPress={() => {
                setModalVisible(false)
                navigation.navigate(CREATE_DOCUMENT_SCREEN_NAME)
              }}
            />
          </Drawer.Section>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTopicView: {
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
  ,
  btnAddTopic: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#28a745",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: 'bold'
  },
  btnClose: {
    position: 'absolute',
    right: 25,
    top: 10,
  }
});


export default CourseDetailsScreen;
