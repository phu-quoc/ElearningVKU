import React, {useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, SectionList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCourseDetails} from '../redux/actions/actions';

const CourseDetailsScreen = ({navigation, route}) => {
  const courseId = route.params.courseId;
  const course = useSelector(state =>
    state.courses.courses.find(course => course.id === courseId),
  );

  const data = course.topics.reduce((acc, cur) => {
    acc.push({name: cur.name, data: cur.resources})
    return acc;
  }, []);

  const renderCourseDetails = () => {
    return (
      <SectionList
        sections={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Text>{item.title}</Text>}
        renderSectionHeader={({section}) => (<Text>{section.name}</Text>)}
      />
    );
  };
  return <View style={styles.container}>{renderCourseDetails()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CourseDetailsScreen;
