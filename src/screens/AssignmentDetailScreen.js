import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Linking,
  ToastAndroid
} from 'react-native';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from "@react-navigation/native";
import { getAssignment, turnIn, getSubmission } from '../api/AssignmentAPI'

export default function AssignmentDetailScreen({ navigation, route }) {
  const isFocused = useIsFocused();
  const [assignment, setAssignment] = useState()
  const [multipleFile, setMultipleFile] = useState([]);
  const [submission, setSubmission] = useState();

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
    ToastAndroid.showWithGravity("Đang nộp bài tập!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    turnIn(route.params?.id, multipleFile)
  }

  useEffect(() => {
    if (isFocused) {
      getAssignment(route.params?.id, setAssignment)
      getSubmission(route.params?.id, setSubmission)
    }
  }, [isFocused])
  return (
    <View style={{ flex: 1 }}>
      <HeaderInsertFileComponent title="Bài tập" navigation={navigation}
        onSelectFiles={onSelectFiles} onSent={onSent}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{assignment?.title}</Text>
        <Text style={styles.deadline}>
          <Icon name="clock-outline" size={18} /> {assignment?.assignment?.deadline}
        </Text>
        <Text style={styles.title}>Mô tả bài tập:</Text>
        <Text style={styles.description}>{assignment?.description}</Text>
        <Text style={styles.title}>Tệp đính kèm:</Text>
        {assignment?.assignment?.assignment_file_attacks.map(item => (
          <Pressable key={item.id}  onPress={() => Linking.openURL(`${item.file_attack_path}`)}>
            <Text>{item.name}</Text>
          </Pressable>
        ))}
        {submission ?
          <Text style={styles.title}>Tệp đã nộp:</Text> :
          <Text style={styles.title}>Chưa nộp bài</Text>
        }
        {submission ? submission?.assignment_submission_file_attacks.map(item => (
          <Pressable onPress={() => Linking.openURL(`${item.file_attack_path}`)}>
            <Text>{item.name}</Text>
          </Pressable>
        )) : null}
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
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    padding: 5,
  },
  container: {
    padding: 15,
  },
  deadline: {
    color: '#ff0000'
  },
  fileContainer: {
    paddingRight: 35,
    paddingTop: 5,
  },
  btnDelete: {
    position: 'absolute',
    right: 20,
  },
})