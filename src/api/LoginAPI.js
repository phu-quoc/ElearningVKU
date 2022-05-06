import axios from "axios";
import { BASE_URL } from "./Common";

export const login = async (user, setError) => {
  await axios({
      method: 'post',
      url: `${BASE_URL}login`,
      headers: {'Content-Type': 'application/json'},
      data: {
   
      }
  }).then(response => {
      setTokenSession(response.data.token)
      setUserSession(response.data.user)
  }).catch(error => {
      setError(error.response.data.message)
  })
}