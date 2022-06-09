import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import HeaderCreatingScreenCmp from '../components/HeaderCreatingScreenCmp';
import { getAllCategories, createCourse} from '../api/CourseAPI'
// import { createCourse } from '../redux/actions/courseActions'
import { useDispatch, useSelector } from 'react-redux';

export default function CreateCourseScreen({ navigation, route }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.bearerToken);
    const [selectCategory, setSelectedCategory] = useState("")
    const [text, setText] = useState("")
    const [categories, setCategories] = useState([])

    const categoriesData = categories.map(categoryITem => ({ value: categoryITem.id, text: categoryITem.name }));
    const CategoryHandler = (value) => {
        setSelectedCategory(value)
    }
    const createCourseHandler = () => {
        if (text.length <= 0) {
            console.error("Vui lòng nhập tên khóa học")
        } else {
            ToastAndroid.showWithGravity("Đang tạo lớp học!", ToastAndroid.SHORT, ToastAndroid.CENTER);
            // dispatch(createCourse(token, selectCategory, text))
            createCourse(selectCategory, text)
        }
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