import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/logovku.png')} style={styles.image} />
      <Text>Name</Text>
      <Text>Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 100
  }
});
export default LoginScreen;
