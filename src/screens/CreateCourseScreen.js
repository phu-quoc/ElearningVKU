import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderCreatingScreenCmp from '../components/HeaderCreatingScreenCmp';
import {getAllCategories, createCourse } from '../api/CourseAPI'

export default function CreateCourseScreen({ navigation, route }) {
    const [selectCategory, setSelectedCategory] = useState("")
    const [text, setText] = useState("")
    const [categories, setCategories] = useState([])

    const categoriesData = categories.map(categoryITem => ({ value: categoryITem.id, text: categoryITem.name }));
    const CategoryHandler = (value) => {
        setSelectedCategory(value)
    }
    const createCourseHandler = ()=>{ 
        createCourse(selectCategory, text)
    }
    useEffect(() => {
        getAllCategories(setCategories)
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <HeaderCreatingScreenCmp onPress={createCourseHandler} title="Tạo lớp học" navigation={navigation} />
            <DropdownComponent data={categoriesData} onSelect={CategoryHandler}
                placeholder="Danh mục" value={selectCategory}
            />
            <TextInputComponent value={text} onChangeText={setText} placeholder="Tên Khóa học" />
        </View>
    )
}

const styles = StyleSheet.create({

})