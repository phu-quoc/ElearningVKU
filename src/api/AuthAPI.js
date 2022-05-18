import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, getToken } from "./Common";

export const loginHandler =  (idToken, user, setUser) => {
    axios.post(`${BASE_URL}login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'enctype': 'multipart/form-data',
        }, data: {
            idToken: idToken,
        }
    }).then(response => {
        let response_data = response.data;
        console.log("data: ",response_data);
        const token = response_data.token;
        const data= response_data.user;
        user={ data, name: data.first_name + data.last_name, email: data.email }
        setUser(user)
        // AsyncStorage.removeItem("USER");
        console.log("setUser", user)
        console.log("Token", token)
        AsyncStorage.setItem("USER", JSON.stringify(user));
        AsyncStorage.setItem("@Token",JSON.stringify(token))
    }).catch(error => {
        console.log("fail")
        console.error(error.message);
    })
}

export const logoutHandler =async ()=>{
    const token= await getToken();
    axios.get(`${BASE_URL}logout`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    }).then(response => {
        AsyncStorage.removeItem("@Token")
    }).catch(error => {
        console.error(error.message);
    })
}