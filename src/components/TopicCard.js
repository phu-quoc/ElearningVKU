import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import {ASSIGNMENT_DETAIL_SCREEN_NAME} from '../constants/routeNames';

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
                            key={id}
                            onPress={() =>
                              Linking.openURL(`${file.file_attack_path}`)
                            }
                            label={file.name}
                            icon={() => (
                              <FontAweSome5 name="readme" size={20} />
                            )}
                          />
                        ))
                      : null;
                  case 2:
                    // return null;
                    return (
                      <DrawerItem
                      key={id}
                        onPress={() => Linking.openURL(`${resource?.url?.url}`)}
                        label={resource.title}
                        icon={() => <FontAweSome5 name="chrome" size={20} />}
                      />
                    );
                  case 4: //is Assignments
                    return (
                      <DrawerItem
                        key={id}
                        onPress={() => {
                          navigation.navigate(ASSIGNMENT_DETAIL_SCREEN_NAME, {
                            id: resource.id,
                          });
                        }}
                        label={resource.title}
                        icon={() => <FontAweSome5 name="book" size={20} />}
                      />
                    );
                  default:
                    break;
                }
                //  ()
              })
            : null}
          {/* {topic?.resources
            ? topic.resources.map(resource => {
                return resource?.url ? (
                  <DrawerItem
                    key={id}
                    onPress={() => Linking.openURL(`${resource.url.url}`)}
                    label={resource.url.url}
                    icon={() => <FontAweSome5 name="chrome" size={20} />}
                  />
                ) : null;
              })
            : null} */}
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
});
