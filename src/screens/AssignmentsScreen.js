import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUnSubmitAssignments} from '../redux/actions/unSubmitAssignmentActions';
import {DrawerRouter, useIsFocused} from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import {ASSIGNMENT_DETAIL_SCREEN_NAME} from '../constants/routeNames';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {white} from '../constants/colors';

function AssignmentScreen({navigation}) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.bearerToken);
  const unSubmitAssignments = useSelector(
    state => state.unSubmitAssignments.unSubmitAssignments,
  );
  console.log('unSubmitAssignments', unSubmitAssignments);

  useEffect(() => {
    dispatch(getUnSubmitAssignments(token));
  }, [isFocused]);
  return (
    <View>
      <Drawer.Section>
        {unSubmitAssignments.map(item => (
          <DrawerItem
            onPress={() => {
              navigation.navigate(ASSIGNMENT_DETAIL_SCREEN_NAME, {id: item.id});
            }}
            label={item.title}
            icon={() => (
              <ImageBackground
                source={require('../assets/images/bg-course3.png')}
                imageStyle={{borderRadius: 20}}
                style={{width: 40, height: 40}}>
                <View style={styles.icon}>
                  <FontAwesome5Icon name="book" size={20} color={white} />
                </View>
              </ImageBackground>
            )}
            style={{backgroundColor: '#fff'}}
          />
        ))}
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AssignmentScreen;
