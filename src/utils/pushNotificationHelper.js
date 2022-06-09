import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {useDispatch} from 'react-redux';
import PushNotification from 'react-native-push-notification';



export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type);
      }
    });

  messaging().onMessage(async remoteMessage => {
    PushNotification.createChannel({
      channelId: 'notification',
      channelName: 'notification_name',
    });
    PushNotification.localNotification({
      channelId: 'notification',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  });
};
