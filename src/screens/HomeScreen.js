import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, RefreshControl, } from 'react-native';
import { CourseCard } from '../components';
import { COURSE_DETAILS_SCREEN_NAME, CREATE_COURSE_SCREEN_NAME } from '../constants/routeNames';
import FloatingBottomButton from '../components/FloatingBottomButton';
import { getAuthUser } from '../api/Common'

function HomeScreen({ navigation }) {
  const [user, setUser] = useState({})
  const [refreshing, setFreshing] = useState(false);
  const onRefresh = () => {
    setFreshing(true);
    getAuthUser(setUser);
    setFreshing(false);
  }
  const pressButtonHandler = () => {
    navigation.navigate(CREATE_COURSE_SCREEN_NAME)
  }

  useEffect(() => {
    getAuthUser(setUser)
    console.log("auth", user)
  }, [])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: '1', name: 'Lap trinh di dong' },
          { key: '2', name: 'Mang may tinh' },
          { key: '3', name: 'Lap trinh di dong' },
          { key: '4', name: 'Mang may tinh' },
          { key: '5', name: 'Lap trinh di dong' },
          { key: '6', name: 'Mang may tinh' },
          { key: '7', name: 'Lap trinh di dong' },
          { key: '8', name: 'Mang may tinh' },
        ]}
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
