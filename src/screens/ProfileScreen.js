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
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen({ navigation, route }) {
  const [pressed, setPressed] = useState(false);
  const [department, setDepartment] = useState("");
  const user = useSelector(state => state.auth.user);

  // const [user, setUser] = useState(route.params?.user);
  const btEditToggle = async () => {
    setPressed(!pressed);
    // console.log("department: ", department);
  }
  const [refreshing, setFreshing] = useState(false);
  const onRefresh = () => {
    setFreshing(true);
    setFreshing(false);
    console.log(user)
  }
  // useEffect(()=>{ 
  //   console.log('user', user)
  //   getAllDepartments(setDepartment)
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
              source={user?.image_feature_path ? { uri: user.image_feature_path } : require('../assets/icons/profile.png')}
              size={65}
            />
            <Text style={styles.title}>{`${user?.first_name}  ${user?.last_name}`}</Text>
            <Text>{user?.email}</Text>
          </View>
        </View>
        <Drawer.Section title="Hồ Sơ" style={styles.drawerSection}>
          {user?.user_type==1 ? // user_type
            <View>
              <ProfileItem title="Khoa" value={user?.student?.activity_class?.department?.name} />
              <ProfileItem title="Lớp" value={user?.student?.activity_class?.name} />
              {/* <ProfileItem title="Chuyên ngành" value="IT" /> */}
            </View> :
            <View>
              <ProfileItem title="Khoa" value={user?.lecturer?.department?.name} />
              <ProfileItem title="Trình độ" value={user?.lecturer?.degree?.name} />
            </View>
          }
          <ProfileItem title="Điện thoại" value={user?.phone} />
        </Drawer.Section>
        {pressed ? <ProfileSettingScreen /> : null}
      </ScrollView>
    </View>
  )
}

export default ProfileScreen