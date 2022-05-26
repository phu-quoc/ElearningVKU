import React, { useEffect } from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/headerDimensions';
import { useDispatch, useSelector } from 'react-redux';
import {login} from  '../redux/actions/authActions';

function LoginScreen() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1025591701711-p3njvopj68jsdnp8np4u46dte3g0o9ch.apps.googleusercontent.com',
      offlineAccess: true,
    })
  }, []);
  const loginHandler = () => {
    dispatch(login());
  }
  // const login = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { idToken } = await GoogleSignin.signIn();
  //     // Create a Google credential with the token
  //     const googleCredential = auth .GoogleAuthProvider.credential(idToken);
  //     // Sign-in the user with the credential
  //     const userAuth = auth().signInWithCredential(googleCredential);
  //     userAuth.then((data) => {
  //       console.log("Google response:", data);
  //       setUser({
  //         name: data.additionalUserInfo.profile.name,
  //         email: data.additionalUserInfo.profile.email,
  //       })
  //       console.log(idToken);
  //       loginHandler(idToken, user, setUser);
  //       console.log("Drawer content:", user);
  //       setIsLoggined(true);
  //     })
  //       .catch((error) => {
  //         console.log(error.message);
  //       })
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
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
    width: WINDOW_WIDTH*.5,
    height: WINDOW_WIDTH*400/772,
    resizeMode: 'contain',
    minWidth: 200
  },
});
export default LoginScreen;
