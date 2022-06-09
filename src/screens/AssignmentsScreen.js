import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';

function AssignmentScreen() {
  const notificationHandler = item => {
    PushNotification.localNotificationSchedule({
      channelId: 'test',
      title: 'Successfully',
      message: '+1.000.000 VND into account payment',
      date: new Date(Date.now() + 1000),
      allowWhileIdle: true,
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={notificationHandler}
        style={{width: 300, height: 100, backgroundColor: '#fff'}}>
        <Text>AssignmentScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AssignmentScreen;
