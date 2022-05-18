import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  RefreshControl
} from 'react-native';
import {
  Avatar,
  Drawer,
} from 'react-native-paper';
import { styles } from "../assets/StyleSheet/ProfileStyleSheet"
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import ProfileItem from '../components/ProfileItem';
import ProfileSettingScreen from '../screens/ProfileSettingScreen'
import { getAuthUser } from '../api/Common';
import { getAllDepartments } from '../api/ProfileAPI';

function ProfileScreen({ navigation, route }) {
  const [pressed, setPressed] = useState(false);
  const [department, setDepartment] = useState("");
  const [user, setUser] = useState(route.params?.user);
  const btEditToggle = async () => {
    setPressed(!pressed);
    console.log("department: ", department);
  }
  const [refreshing, setFreshing] = useState(false);
  const onRefresh = () => {
    setFreshing(true);
    getAuthUser(setUser);
    setFreshing(false);
    console.log(user)
  }
  // useEffect(()=>{ 
  //   getAllDepartments(setDepartmentss)
  // }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View >
          <TouchableHighlight
            onPress={btEditToggle}
            underlayColor='#042417'
            style={styles.btEdit}>
            <View>
              <FontAweSome5 name="edit" size={20} color='black' />
            </View>
          </TouchableHighlight>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              source={user?.data?.image_feature_path ? { uri: user.data?.image_feature_path } : require('../assets/icons/profile.png')}
              size={65}
            />
            <Text style={styles.title}>{`${user?.data?.first_name}  ${user?.data?.last_name}`}</Text>
            <Text>{user?.data?.email}</Text>
          </View>
        </View>
        <Drawer.Section title="Hồ Sơ" style={styles.drawerSection}>
          <ProfileItem title="Khoa" value={user?.data?.student?.activity_class?.department?.name} />
          {user?.data?.user_type ? // user_type
            <View>
              <ProfileItem title="Lớp" value={user?.data?.student?.activity_class?.name} />
              {/* <ProfileItem title="Chuyên ngành" value="IT" /> */}
            </View> :
            <View>
              <ProfileItem title="Trình độ" value="PhD." />
            </View>
          }
          <ProfileItem title="Điện thoại" value={user?.data?.phone} />
        </Drawer.Section>
        {pressed ? <ProfileSettingScreen departments={department} /> : null}
      </ScrollView>
    </View>
  )
}

export default ProfileScreen