import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CourseCard} from '../components';
import {COURSE_DETAILS_SCREEN_NAME} from '../constants/routeNames';
import {getCourses} from '../redux/actions/actions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  // alert(JSON.stringify(courses));

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  function renderCourses() {
    return (
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
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
  return <View style={styles.container}>{renderCourses()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
