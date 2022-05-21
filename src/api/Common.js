import AsyncStorage from '@react-native-async-storage/async-storage';

// dùng ngrok tạo host tới port 8000
// ngrok httop 8000
export const BASE_URL = "https://fb92-2402-9d80-40e-98c6-e419-4f35-9e87-8f05.ap.ngrok.io" + "/api/"
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
    token= JSON.parse(token);
    return  token;
  }catch(err){
    console.log(err)
  }
}