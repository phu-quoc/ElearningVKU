import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/StyleSheet/DrawerNavigationStyleSheet';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SETTINGS_SCREEN_NAME,
  COURSE_DETAILS_SCREEN_NAME,
  HOME_SCREEN_NAME,
  NOTIFICATIONS_SCREEN_NAME,
  PROFILE_SCREEN_NAME
} from '../constants/routeNames';
import auth from '@react-native-firebase/auth';
import { loginHandler, logoutHandler } from '../api/AuthAPI';
import { getAuthUser } from '../api/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

export default function DrawerContent(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.bearerToken);
  const user = useSelector(state => state.auth.user);
  const courses = useSelector(state => state.courses.courses);
  console.log('courses', courses);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1025591701711-p3njvopj68jsdnp8np4u46dte3g0o9ch.apps.googleusercontent.com',
      offlineAccess: true,
    })
  }, []);

  const logoutHandler = () => {
    dispatch(logout(token));
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={user.image_feature_path ? { uri: user.image_feature_path } : require('../assets/icons/profile.png')}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>{user.first_name + ' ' + user.last_name}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>

            {user.user_type == 1 ?
              <View style={styles.row}>
                <View style={styles.section}>
                  <Caption style={styles.caption}>Lớp: </Caption>
                  <Paragraph style={[styles.paragraph, styles.caption]}> {user?.student?.activity_class?.name}</Paragraph>
                </View>
                <View style={styles.section}>
                  <Caption style={styles.caption}>Khoa: </Caption>
                  <Paragraph style={[styles.paragraph, styles.caption]}>{user?.student?.activity_class?.department?.name}</Paragraph>
                </View>
              </View>
              :
              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}> {user?.lecturer?.degree?.name}</Paragraph>
                </View>
                <View style={styles.section}>
                  <Caption style={styles.caption}>Khoa: </Caption>
                  <Paragraph style={[styles.paragraph, styles.caption]}>{user?.lecturer?.department?.name}</Paragraph>
                </View>
              </View>
            }
          </View>


          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate(HOME_SCREEN_NAME) }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="bell-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Notification"
              onPress={() => { props.navigation.navigate(NOTIFICATIONS_SCREEN_NAME) }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate(PROFILE_SCREEN_NAME)
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => { props.navigation.navigate('BookmarkScreen') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="cog-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Setting"
              onPress={() => { props.navigation.navigate(SETTINGS_SCREEN_NAME) }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Support"
              onPress={() => { props.navigation.navigate('SupportScreen') }}
            />
          </Drawer.Section>
          <Drawer.Section title="Courses">
            {courses.map((item) => (
              <DrawerItem
                key={item.id}
                icon={({ color, size }) => (
                  <Icon
                    name="notebook-outline"
                    color={color}
                    size={size}
                  />
                )}
                label={item.name}
                onPress={() => {
                  props.navigation.navigate(COURSE_DETAILS_SCREEN_NAME, {
                    courseId: item.id
                  })
                }}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={logoutHandler}
        />
      </Drawer.Section>
    </View>
  );
}
