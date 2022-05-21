import React, { useState, useEffect } from 'react';
import {
  FlatList, StyleSheet,
  Text, View, TouchableHighlight,
  RefreshControl, ToastAndroid
} from 'react-native';
import { CourseCard } from '../components';
import { COURSE_DETAILS_SCREEN_NAME, CREATE_COURSE_SCREEN_NAME } from '../constants/routeNames';
import FloatingBottomButton from '../components/FloatingBottomButton';
import { getAuthUser } from '../api/Common'
import { getCourses } from '../api/CourseAPI'

function HomeScreen({ navigation }) {
  const [user, setUser] = useState({})
  const [refreshing, setFreshing] = useState(false);
  const [courses, setCourses] = useState([])
  const onRefresh = () => {
    // sau khi login, refresh de load lai du lieu
    setFreshing(true);
    getAuthUser(setUser);
    getCourses(setCourses)
    setFreshing(false);
  }
  const pressButtonHandler = () => {
    navigation.navigate(CREATE_COURSE_SCREEN_NAME)
  }
  const coursesData = courses.map(courseItem => ({ key: courseItem.id, name: courseItem.name }))

  useEffect(() => {
    getAuthUser(setUser)
    console.log("auth", user)
  }, [])
  useEffect(() => {
    getCourses(setCourses)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={coursesData}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CourseCard
            course={item}
            onPress={() => navigation.navigate(COURSE_DETAILS_SCREEN_NAME)}
          />
        )}
      />
      {user?.data?.user_type == 2 ? <FloatingBottomButton icon="plus" onPress={pressButtonHandler} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
