import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WINDOW_WIDTH} from '../constants/headerDimensions';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions/authActions';
import {WEB_CLIENT_ID} from '../constants/googleWebClientId';
import messaging from '@react-native-firebase/messaging';

function LoginScreen() {
  const dispatch = useDispatch();
  const [fcmToken, setFcmToken] = useState('');

  const getFCMToken = async () => {
    const token = await AsyncStorage.getItem('FCMTOKEN');
    console.log('AStoken: ', token);
    setFcmToken(token);
    if (token === null) {
      try {
        const token = await messaging().getToken();
        if (token) {
          await AsyncStorage.setItem('FCMTOKEN', token);
          console.log('messagingToken: ', token);
          setFcmToken(token);
        }
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });
    getFCMToken();
    console.log('fcmToken: ', fcmToken);
  }, []);
  const loginHandler = () => {
    dispatch(login(fcmToken));
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logovku.png')}
        style={styles.image}
      />
      <GoogleSigninButton
        style={{width: 280, height: 55}}
        text="Login with google"
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={loginHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: WINDOW_WIDTH * 0.5,
    height: (WINDOW_WIDTH * 400) / 772,
    resizeMode: 'contain',
    minWidth: 200,
  },
});
export default LoginScreen;
