import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
import {notificationListener} from './src/utils/pushNotificationHelper';

function App() {
  useEffect(() => {
    notificationListener();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
