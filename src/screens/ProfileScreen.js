import React, {useState} from 'react'
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  Avatar,
  Drawer,
} from 'react-native-paper';
import { styles } from "../assets/StyleSheet/ProfileStyleSheet"
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'
import ProfileItem from '../components/ProfileItem';
import ProfileSettingScreen from '../screens/ProfileSettingScreen'

function ProfileScreen() {
  const [pressed, setPressed] = useState(false);
  const btEditHandler = () => {
    setPressed(!pressed);
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <View >
        <TouchableHighlight
          onPress={btEditHandler}
          underlayColor='#042417'
          style={styles.btEdit}>
          <View>
            <FontAweSome5 name="edit" size={20} color='black' />
          </View>
        </TouchableHighlight>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={require('../assets/icons/profile.png')}
            // source={user?.data?.avatar ? { uri: user.data.avatar } : require('../assets/icons/profile.png')}
            size={65}
          />
          <Text style={styles.title}>Pham Toan Phuc</Text>
          <Text>ptphuc.20it1@vku.udn.vn</Text>
        </View>
      </View>
      <Drawer.Section title="Profile" style={styles.drawerSection}>
        <ProfileItem title="Department" value="Computer Science" />
        {1 ? // user_type
          <View>
            <ProfileItem title="Class" value="20GIT" />
            <ProfileItem title="Major" value="IT" />
          </View> :
          <View>
            <ProfileItem title="Degree" value="PhD." />
          </View>
        }
        <ProfileItem title="Phone number" value="0374081611" />
      </Drawer.Section>
      {pressed?<ProfileSettingScreen />: null}
    </View>
  )
}

export default ProfileScreen