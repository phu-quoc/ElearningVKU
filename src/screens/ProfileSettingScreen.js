import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/actions/authActions'

function ProfileSettingScreen(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.bearerToken);
  const [phone, setPhone] = useState("")
  const [isClicked, setIsClicked] = useState(false)
  const updateHandler = () => {
    setIsClicked(true)
    ToastAndroid.showWithGravity("Đang cập nhật!", ToastAndroid.SHORT, ToastAndroid.CENTER);
    dispatch(updateProfile(token,phone))
    setIsClicked(false)
  }

  return (
    <View style={{ paddingTop: 30, }}>
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