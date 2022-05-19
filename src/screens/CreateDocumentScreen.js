import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderInsertFileComponent from '../components/HeaderInsertFileComponent';

export default function CreateDocumentScreen({ navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <HeaderInsertFileComponent title="Thêm tài liệu" navigation={navigation} />
    </View>
  )
}