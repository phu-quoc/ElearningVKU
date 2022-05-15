import axios from "axios";
import { BASE_URL, setUserSession } from "./Common";

export const loginHandler = async (idToken,user, setUser) => {
    await axios.post(`${BASE_URL}login`,{
        // method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'enctype': 'multipart/form-data',
        },data:{
            idToken: idToken,
        }
    }).then(response => {
        let data = response.data;
        console.log(response.data);
        console.log("raw user:",user);
        setUser({...user,data, name: data.first_name + data.last_name, email:data.email})
        console.log("Login APi: ",user);
    }).catch(error => {
        console.log("fail")
        console.error(error.code);
        console.error(error.message);
    })
}

// await axios(url, {
//     method: "get",
//     headers: {
//       'Content-type': 'Application/json',
//       Accept: 'Application/json',
//       Authorization: jwt,
//     },
//     data: {},
//   })