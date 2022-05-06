import axios from "axios";
import { BASE_URL, setUserSession } from "./Common";

export const loginHandler = async (idToken) => {
    await axios({
        method: 'post',
        url: `${BASE_URL}login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: {
            'idToken': idToken,
        }
    }).then(response => {
        console.log("ok")
        console.log(response);
    }).catch(error => {
        console.log("fail")
        console.error(error.code);
        console.error(error.message);
    })
}