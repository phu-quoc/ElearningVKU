import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5'


export default function TopicCard(props) {
  const [topic, setTopic] = useState(props.topic);
  console.log('topic', topic)

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.childContainer}>
        <Drawer.Section>
        {topic.assignments.forEach(assignment =>(
          <DrawerItem 
            // label={assignment.title}
            lable="Hi"
            icon ={()=>(
              <FontAweSome5  name="book" size={30}/>
            )}
          />
        ))}
        </Drawer.Section>
        <Text>Blah Blah Blah</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  parentContainer: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
  }
  ,
  childContainer: {
    padding: 15,
    marginLeft: 10,
  }
})