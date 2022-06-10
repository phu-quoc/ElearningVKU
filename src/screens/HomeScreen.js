import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FloatingBottomButton from '../components/FloatingBottomButton';
import {CourseCard} from '../components';
import {
  COURSE_DETAILS_SCREEN_NAME,
  CREATE_COURSE_SCREEN_NAME,
} from '../constants/routeNames';
import {getUser} from '../redux/actions/authActions';
import {getCourseOfUser} from '../redux/actions/courseActions';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {sendNotification} from '../api/NotificationAPI';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.bearerToken);
  const courses = useSelector(state => state.courses.courses);
  const user = useSelector(state => state.auth.user);
  // const [refreshing, setFreshing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      dispatch(getUser(token));
      dispatch(getCourseOfUser(token));
      console.log('token:', token);
    }
  }, [isFocused]);

  const sendMessage = () => {
    sendNotification(token);
  };

  const pressButtonHandler = () => {
    navigation.navigate(CREATE_COURSE_SCREEN_NAME);
  };

  function renderCourses() {
    return (
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <CourseCard
            id={index}
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
      {courses.length > 0 && renderCourses()}
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
