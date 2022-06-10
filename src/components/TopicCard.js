import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Linking, ImageBackground} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import {ASSIGNMENT_DETAIL_SCREEN_NAME} from '../constants/routeNames';
import {pink, white} from '../constants/colors';

export const TopicCard = ({id, topic, navigation}) => {
  console.log('topic card', topic);
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>{topic.name}</Text>
      <View style={styles.childContainer}>
        <Drawer.Section>
          {topic?.resources
            ? topic.resources.map(resource => {
                switch (resource.resource_type) {
                  case 1: // is file
                    return resource?.files
                      ? resource?.files.map(file => (
                          <DrawerItem
                            key={file.id}
                            onPress={() =>
                              Linking.openURL(`${file.file_attack_path}`)
                            }
                            label={file.name}
                            icon={() => (
                              // <FontAweSome5 name="readme" size={20} />

                              <ImageBackground
                                source={require('../assets/images/bg-course4.png')}
                                imageStyle={{borderRadius: 20}}
                                style={{width: 40, height: 40}}>
                                <View style={styles.icon}>
                                  <FontAweSome5
                                    name="readme"
                                    size={20}
                                    color={white}
                                  />
                                </View>
                              </ImageBackground>
                            )}
                          />
                        ))
                      : null;
                  case 2:
                    // return null;
                    return (
                      <DrawerItem
                        key={resource.id}
                        onPress={() => Linking.openURL(`${resource?.url?.url}`)}
                        label={resource.title}
                        icon={() => (
                          <ImageBackground
                                source={require('../assets/images/bg-course5.png')}
                                imageStyle={{borderRadius: 20}}
                                style={{width: 40, height: 40}}>
                                <View style={styles.icon}>
                                  <FontAweSome5
                                    name="chrome"
                                    size={20}
                                    color={white}
                                  />
                                </View>
                              </ImageBackground>
                        )}
                      />
                    );
                  case 4: //is Assignments
                    return (
                      <DrawerItem
                        key={resource.id}
                        onPress={() => {
                          navigation.navigate(ASSIGNMENT_DETAIL_SCREEN_NAME, {
                            id: resource.id,
                          });
                        }}
                        label={resource.title}
                        icon={() => (
                          <ImageBackground
                                source={require('../assets/images/bg-course3.png')}
                                imageStyle={{borderRadius: 20}}
                                style={{width: 40, height: 40}}>
                                <View style={styles.icon}>
                                  <FontAweSome5
                                    name="book"
                                    size={20}
                                    color={white}
                                  />
                                </View>
                              </ImageBackground>
                        )}
                      />
                    );
                  default:
                    break;
                }
                //  ()
              })
            : null}
        </Drawer.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  parentContainer: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
  },
  childContainer: {
    padding: 15,
    marginLeft: 10,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
