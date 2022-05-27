import AsyncStorage from '@react-native-async-storage/async-storage';

// dùng ngrok tạo host tới port 8000
// ngrok httop 8000
export const BASE_URL = "https://ac53-2402-9d80-409-1ee1-cdae-81b9-758f-a827.ap.ngrok.io" + "/api/"
export const BASE_URL_HEROKU = 'https://elearningvku-server.herokuapp.com/api/';

// export const BASE_URL = "" 

export const getUser = async (setUser) => {
  let user=null;
  try{
    user =  await AsyncStorage.getItem('USER')
    user = JSON.parse(user);
    setUser(user);
    console.log("Storage:",user)
    return user;
  }catch(e){
    console.log("Storage error",e);
    return null;
  }
}

export const getAuthUser= (setUser)=>{ 
  const _user = getUser(setUser);
    _user.then((data) => {
      setUser(data);
    })
}

export const getToken= async ()=>{ 
  try{
    let token= await AsyncStorage.getItem("@Token")
    console.log('raw token', token);
    return  token;
  }catch(err){
    console.log(err)
  }
}