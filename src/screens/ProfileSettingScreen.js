import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react'
import ProfileSettingItem from '../components/ProfileSettingItem';
import { updateProfile } from '../api/ProfileAPI'

function ProfileSettingScreen(props) {
  const [department, setDepartment] = useState("");
  // const departments = ['Computer Science', 'Business Administration', "Computer Engineering"]
  // const majors = ["GIT", 'IT', ' DM', "CE"]
  // const classes = ['20GIT', '20SE1', '20SE2', '20SE3']
  // const userTypes = ['Student', "Lecture"];
  const [phone, setPhone] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const updateHandler = () => {
    setIsClicked(true)
    ToastAndroid.showWithGravity("Đang cập nhật!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    updateProfile(phone)
    setIsClicked(false)
  }

  return (
    <View style={{ paddingTop: 30, }}>
      {/* <ProfileSettingItem title="Quyền" data={userTypes} /> */}
      {/* <ProfileSettingItem title="Khoa"
        data={Array.from(props.departments).map(depart => ([{ name: depart.name, index: depart.id }]))} /> */}
      {/* <ProfileSettingItem title="Major" data={majors} /> */}
      {/* <ProfileSettingItem title="Lớp" data={classes} /> */}
      <View style={styles.profileItem}>
        <Text style={{ ...styles.text, fontWeight: "bold", }}>Điện thoại:</Text>
        <TextInput style={styles.input}
          value={phone}
          onChangeText={setPhone}
          multiline
          keyboardType="numeric"
          maxLength={10}
        >
        </TextInput>
      </View>
      <View style={styles.centerItem}>
        <TouchableOpacity style={styles.button} onPress={updateHandler}>
          <View style={styles.centerItem}>
            <Text style={styles.btTitle}>Lưu</Text>
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
    marginLeft: 16,
    paddingBottom: 10,
  },
  text: {
    lineHeight: 40,
    fontSize: 16,
    minWidth: 100,
    // textAlign: 'right',
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