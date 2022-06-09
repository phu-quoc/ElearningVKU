/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN: ', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  requestPermissions: true,
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  // console.log('Message handled in the background!', remoteMessage);
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

AppRegistry.registerComponent(appName, () => App);
