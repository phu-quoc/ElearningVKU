import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { getAssignment, turnIn } from '../api/AssignmentAPI'

export default function AssignmentDetailScreen({ navigation, route }) {
  const [assignment, setAssignment] = useState()
  const [multipleFile, setMultipleFile] = useState([]);

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
    turnIn(route.params?.id, multipleFile)
  }
  useEffect(() => {
    getAssignment(route.params?.id, setAssignment)
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <HeaderInsertFileComponent title="Bài tập" navigation={navigation}
        onSelectFiles={onSelectFiles} onSent={onSent}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{assignment?.title}</Text>
        <Text style={styles.deadline}>Thời hạn: {assignment?.assignment?.deadline}</Text>
        <Text style={styles.title}>Mô tả bài tập:</Text>
        <Text style={styles.description}>{assignment?.description}</Text>
        <Text style={styles.title}>Tệp đính kèm:</Text>
        {/* {assignment?.assignment?.assignment_file_attacks.map(item => {

        })} */}

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