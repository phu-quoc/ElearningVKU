import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CourseCard} from '../components';
import {COURSE_DETAILS_SCREEN_NAME} from '../constants/routeNames';

function HomeScreen({navigation}) {
  function renderCourses() {
    return (
      <FlatList
        data={[
          {key: '1', name: 'Lap trinh di dong'},
          {key: '2', name: 'Mang may tinh'},
          {key: '3', name: 'Lap trinh di dong'},
          {key: '4', name: 'Mang may tinh'},
          {key: '5', name: 'Lap trinh di dong'},
          {key: '6', name: 'Mang may tinh'},
          {key: '7', name: 'Lap trinh di dong'},
          {key: '8', name: 'Mang may tinh'},
        ]}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <CourseCard
            course={item}
            onPress={() => navigation.navigate(COURSE_DETAILS_SCREEN_NAME)}
          />
        )}
      />
    );
  }
  return <View style={styles.container}>{renderCourses()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
