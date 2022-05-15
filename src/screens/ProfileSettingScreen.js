import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react'
import ProfileSettingItem from '../components/ProfileSettingItem';

function ProfileSettingScreen() {
  const departments = ['Computer Science', 'Business Administration', "Computer Engineering"]
  const majors = ["GIT", 'IT', ' DM', "CE"]
  const classes = ['20GIT', '20SE1', '20SE2', '20SE3']
  const [text, setText] = useState("")

  return (
    <View style={{ paddingTop: 30 }}>
      <ProfileSettingItem title="Department" data={departments} />
      <ProfileSettingItem title="Major" data={majors} />
      <ProfileSettingItem title="Class" data={classes} />
      <View style={styles.profileItem}>
        <Text style={{ ...styles.text, fontWeight: "bold", }}>Phone:</Text>
        <TextInput style={styles.input}
          value={text}
          onChangeText={setText}
          multiline
          keyboardType="numeric"
        >
        </TextInput>
      </View>
      <View style={styles.centerItem}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.centerItem}>
            <Text style={styles.btTitle}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default ProfileSettingScreen

const styles = StyleSheet.create({
  profileItem: {
    fontSize: 16,
    flexDirection: 'row',
    color: 'black',
    marginLeft: 15,
    paddingBottom: 10,
  },
  text: {
    lineHeight: 40,
    fontSize: 16,
    minWidth: 100,
    textAlign: 'right',
  },
  input: {
    width: 200,
    marginLeft: 10,
    borderBottomWidth: 1,
    padding: 10,
    color: 'black',
  },
  button: {
    width: 100,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#28a745',
    borderRadius: 40,
  },
  centerItem: {
    alignItems: 'center',
  },
  btTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  }
})