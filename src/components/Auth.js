const getToken = () => {
  return window.localStorage.getItem('auth')
}

const isAuthorised = () => {
  const token = getToken()
  return (token != null && token.length > 0)
}

const clear = () => {
  return window.localStorage.clear()
}

const getUserName = () => {
  return window.localStorage.getItem('username')
}
const setUserName = (username) => {
  window.localStorage.setItem('username', username)
}

const setToken = (token) => {
  window.localStorage.setItem('auth', token)
}

export default {
  isAuthorised,
  clear,
  getToken,
  setToken,
  getUserName,
  setUserName
}
