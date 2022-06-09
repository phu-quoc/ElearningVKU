import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getTopicByCourse} from '../api/TopicAPI';
import {useIsFocused} from '@react-navigation/native';
import {createAssignment} from '../api/AssignmentAPI';
import {useSelector} from 'react-redux';

export default function CreateAssignmentScreen({navigation, route}) {
  const isFocused = useIsFocused();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  // const [topics, setTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState();
  const [multipleFile, setMultipleFile] = useState([]);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [datetime, setDateTime] = useState(new Date());
  const topics = route.params.topics;
  const courseId = route.params.courseId;
  const course = useSelector(state => state.courses.courses.find(course => course.id === courseId));
  // alert(JSON.stringify(topics));

  const selectTopicHandler = value => {
    setSelectedTopic(value);
  };
  const onSelectFiles = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      setMultipleFile(results);
      console.log('Files: ', multipleFile);
    } catch (err) {
      alert('Error: ' + err.message);
      throw err;
    }
  };

  const onRemoveSelectedFile = index => {
    var array = [...multipleFile];
    array.splice(index, 1); //remove selected file at index once time
    setMultipleFile(array);
  };

  const onSent = () => {
    ToastAndroid.showWithGravity(
      'Đang tạo bài tập!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    createAssignment(selectedTopic, title, description, datetime, multipleFile, course.name);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDateTime(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    let fTime =
      tempDate.getHours() +
      ':' +
      tempDate.getMinutes() +
      ':' +
      tempDate.getSeconds();
    setDate(fDate);
    setTime(fTime);
    setShow(false);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  // useEffect(() => {
  //   // Call only when screen open or when back on screen
  //   if (isFocused) {
  //     getTopicByCourse(route.params?.courseId, setTopics)
  //   }
  // }, [isFocused])

  return (
    <View style={{flex: 1}}>
      <HeaderInsertFileComponent
        title="Thêm bài tập"
        navigation={navigation}
        onSelectFiles={onSelectFiles}
        onSent={onSent}
      />
      <DropdownComponent
        data={() => topics.map(item => ({value: item.id, text: item.name}))}
        placeholder="Chủ đề"
        value={selectedTopic}
        onSelect={selectTopicHandler}
      />
      <TextInputComponent
        value={title}
        onChangeText={setTitle}
        placeholder="Tiêu đề"
      />
      <TextInputComponent
        onChangeText={setDescription}
        placeholder="Mô tả bài tập"
        value={description}
        multiline={true}
        numberOfLines={10}
      />
      <View style={styles.datetimeContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Hạn nộp: </Text>
        <Pressable onPress={() => showMode('date')}>
          <Text>Date: {date}</Text>
        </Pressable>
        <Pressable onPress={() => showMode('time')}>
          <Text>Time: {time}</Text>
        </Pressable>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={datetime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {multipleFile.length != 0 ? (
        <Text style={styles.title}>Đã chọn {multipleFile.length} files: </Text>
      ) : null}
      <ScrollView style={styles.scrollContainer}>
        {multipleFile.map((item, key) => (
          <View style={styles.fileContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => onRemoveSelectedFile(key)}>
              <Icon name="delete-outline" color={'#ff0000'} size={20} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fileContainer: {
    paddingLeft: 20,
    paddingRight: 35,
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  scrollContainer: {
    paddingTop: 10,
  },
  btnDelete: {
    position: 'absolute',
    right: 20,
  },
  title: {
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  datetimeContainer: {
    paddingLeft: 20,
    paddingTop: 10,
  },
});
