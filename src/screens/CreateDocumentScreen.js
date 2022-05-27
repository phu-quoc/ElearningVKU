import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTopicByCourse } from '../api/TopicAPI'
import { useIsFocused } from "@react-navigation/native";
import { createDocument } from '../api/ResourceAPI'

export default function CreateDocumentScreen({ navigation, route }) {
  const isFocused = useIsFocused();
  const [title, setTitle] = useState()
  const [url, setUrl] = useState()
  const [description, setDescription] = useState()
  const [topics, setTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState()
  const [multipleFile, setMultipleFile] = useState([]);

  const selectTopicHandler = (value) => {
    setSelectedTopic(value)
  }
  const onSelectFiles = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      })
      setMultipleFile(results)
      console.log('Files: ', multipleFile)
    } catch (err) {
      alert('Error: ' + err.message);
      throw err;
    }
  }
  const onRemoveSelectedFile = (index) => {
    var array = [...multipleFile];
    array.splice(index, 1); //remove selected file at index once time
    setMultipleFile(array)
  }
  const onSent = () => {
    createDocument(selectedTopic, title, description, url, multipleFile)
  }

  useEffect(() => {
    // Call only when screen open or when back on screen
    if (isFocused) {
      setTopics([])
      getTopicByCourse(route.params?.courseId, setTopics)
    }
  }, [isFocused])


  return (
    <View style={{ flex: 1 }}>
      <HeaderInsertFileComponent title="Thêm tài liệu" navigation={navigation}
        onSelectFiles={onSelectFiles} onSent={onSent}
      />
      <DropdownComponent data={() => topics.map(item => ({ value: item.id, text: item.name }))}
        placeholder="Chủ đề" value={selectedTopic}
        onSelect={selectTopicHandler}
      />
      <TextInputComponent value={title} onChangeText={setTitle} placeholder="Tiêu đề" />
      <TextInputComponent value={url} onChangeText={setUrl} placeholder="Link tham khảo" />
      <TextInputComponent onChangeText={setDescription}
        placeholder="Mô tả tài liệu" value={description}
        multiline={true} numberOfLines={5}
      />
      {multipleFile.length != 0 ?
        <Text style={styles.title}>Đã chọn {multipleFile.length} files: </Text>
        : null
      }
      <ScrollView style={styles.scrollContainer}>
        {multipleFile.map((item, key) => (
          <View style={styles.fileContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <TouchableOpacity
              style={styles.btnDelete}
              onPress={() => onRemoveSelectedFile(key)}
            >
              <Icon
                name="delete-outline"
                color={'#ff0000'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
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
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 18,
  }
})