import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderCreatingScreenCmp from '../components/HeaderCreatingScreenCmp';

export default function CreateCourseScreen({ navigation, route }) {
    const [selectCategory, setSelectedCategory] = useState("")
    const [text, setText] = useState("")
    const categories = [
        {
            "id": 1,
            "name": "Đại cương",
            "department_id": 1,
        },
        {
            "id": 2,
            "name": "Chuyên ngành",
            "department_id": 1,
        },
    ]

    const categoriesData = categories.map(clasItem => ({ value: clasItem.id, text: clasItem.name }));
    const CategoryHandler = (value) => {
        alert("id: " + value)
        setSelectedCategory(value)
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderCreatingScreenCmp title="Tạo lớp học" navigation={navigation} />
            <DropdownComponent data={categoriesData} onSelect={CategoryHandler}
                placeholder="Danh mục" value={selectCategory}
            />
            <TextInputComponent value={text} onChangeText={setText} placeholder="Tên Khóa học" />
        </View>
    )
}

const styles = StyleSheet.create({

})