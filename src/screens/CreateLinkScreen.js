import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';
import { getTopicByCourse } from '../api/TopicAPI'
import { useIsFocused } from "@react-navigation/native";
import { createLink } from '../api/ResourceAPI'

export default function CreateLinkScreen({ navigation, route }) {
  const isFocused = useIsFocused();
  const [title, setTitle] = useState()
  const [url, setUrl] = useState()
  const [topics, setTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState()

  const selectTopicHandler = (value) => {
    setSelectedTopic(value)
  }
  const onSent = () => {
    ToastAndroid.showWithGravity("Đang lưu!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    createLink(selectedTopic, title, url)
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
      <HeaderInsertFileComponent title="Thêm Link" navigation={navigation}
        onSent={onSent}
      />
      <DropdownComponent data={() => topics.map(item => ({ value: item.id, text: item.name }))}
        placeholder="Chủ đề" value={selectedTopic}
        onSelect={selectTopicHandler}
      />
      <TextInputComponent value={title} onChangeText={setTitle} placeholder="Tiêu đề" />
      <TextInputComponent value={url} onChangeText={setUrl} placeholder="Link tham khảo" />
    </View>
  )
}
