export const BASE_URL = "http://10.0.2.2:8000/api/" 

export const getUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) {
      return JSON.parse(userStr)
  }
  return null
}



export const setUserSession = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}