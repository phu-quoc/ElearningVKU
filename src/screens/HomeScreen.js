import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FloatingBottomButton from '../components/FloatingBottomButton';
import { CourseCard } from '../components';
import {
  COURSE_DETAILS_SCREEN_NAME,
  CREATE_COURSE_SCREEN_NAME,
} from '../constants/routeNames';
import { getUser } from '../redux/actions/authActions';
import { getCourseOfUser } from '../redux/actions/courseActions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.bearerToken);
  const courses = useSelector(state => state.courses.courses);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(getUser(token));
    dispatch(getCourseOfUser(token))
    console.log("token:", token);
  }, []);

  const pressButtonHandler = () => {
    navigation.navigate(CREATE_COURSE_SCREEN_NAME);
  };

  function renderCourses() {
    return (
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CourseCard
            course={item}
            onPress={() =>
              navigation.navigate(COURSE_DETAILS_SCREEN_NAME, {
                courseId: courses[index].id,
              })
            }
          />
        )}
      />
    );
  }
  return (
    <View style={styles.container}>
      {renderCourses()}
      {user.user_type == 2 && (
        <FloatingBottomButton icon="plus" onPress={pressButtonHandler} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
