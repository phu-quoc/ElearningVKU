import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  ToastAndroid,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  SectionList,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FloatingBottomButton from '../components/FloatingBottomButton';
// import FloatingBottomButton from '../components/FloatingBottomButton';
// import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Drawer} from 'react-native-paper';
import TextInputComponent from '../components/TextInputComponent';
// import {
//   CREATE_ASSIGNMENT_SCREEN_NAME,
//   CREATE_DOCUMENT_SCREEN_NAME,
// } from '../constants/routeNames';
// import {getAuthUser} from '../api/Common';
// import {getCourse} from '../api/CourseAPI';
// import {addTopic} from '../api/TopicAPI';
import { TopicCard } from '../components/TopicCard';
// import {useDispatch, useSelector} from 'react-redux';
import {
  CREATE_ASSIGNMENT_SCREEN_NAME,
  CREATE_DOCUMENT_SCREEN_NAME,
} from '../constants/routeNames';
import { DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import { addTopic, getTopicsByCourse } from '../redux/actions/topicActions';

function CourseDetailsScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false); //main modal show menu
  const [modalTopicView, setModalTopicView] = useState(false); //modal add topic
  const [newTopic, setNewTopic] = useState('');
  const dispatch = useDispatch();
  const courseId = route.params.courseId;
  const topics = useSelector(state => state.topics.topics);

  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.bearerToken);

  useEffect(() => {
    dispatch(getTopicsByCourse(courseId, token));
  }, []);

  const onFresh = () => { };

  const pressButtonHandler = () => {
    setModalVisible(!modalVisible);
  };
  const clickTopicHandler = () => {
    setModalVisible(false);
    setModalTopicView(true);
  };
  const addTopicHandler = () => {
    if (newTopic.length <= 0) {
      ToastAndroid.showWithGravity(
        'Vui lòng nhập chủ đề!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }
    ToastAndroid.showWithGravity(
      'Đang thêm chủ đề!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    dispatch(addTopic(newTopic, courseId, token));
    setModalTopicView(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {topics.length > 0 ? (
        <FlatList
          data={topics}
          keyExtractor={topic => topic.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TopicCard topic={item} navigation={navigation} />
          )}
        />
      ) : null}

      {user.user_type === 2 ? (
        <FloatingBottomButton icon="plus" onPress={pressButtonHandler} />
      ) : null}
      <Modal
        animationType="slide"
        visible={modalTopicView}
        transparent={true}
        onRequestClose={() => setModalTopicView(!modalTopicView)}>
        <View style={styles.centerView}>
          <View style={styles.modalTopicView}>
            <TouchableHighlight
              underlayColor="#ffffffff"
              onPress={() => {
                setModalTopicView(false);
              }}
              style={styles.btnClose}>
              <Icon name="close" color={'#000000'} size={30} />
            </TouchableHighlight>
            <View style={{ width: 280 }}>
              <TextInputComponent
                placeholder="Nhập chủ đề"
                value={newTopic}
                onChangeText={setNewTopic}
              />
            </View>
            <Pressable onPress={addTopicHandler} style={styles.btnAddTopic}>
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
        }}>
        <TouchableOpacity
          style={styles.modalView}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Chủ đề"
              onPress={clickTopicHandler}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="clipboard-outline" color={color} size={size} />
              )}
              label="Bài tập"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate(CREATE_ASSIGNMENT_SCREEN_NAME, { courseId: courseId })
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="notebook-outline" color={color} size={size} />
              )}
              label="Tài liệu"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate(CREATE_DOCUMENT_SCREEN_NAME, { courseId: courseId })
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
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTopicView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnAddTopic: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#28a745',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  btnClose: {
    position: 'absolute',
    right: 25,
    top: 10,
  },
});

export default CourseDetailsScreen;
