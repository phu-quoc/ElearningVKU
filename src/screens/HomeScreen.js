import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SubjectCard} from '../components';

function HomeScreen() {
  function renderSubjects() {
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
        renderItem={({item, index}) => <SubjectCard subject={item} />}
      />
    );
  }
  return <View style={styles.container}>{renderSubjects()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;
