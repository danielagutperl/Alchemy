export const setToken = (token) => {
  window.localStorage.setItem('auth', JSON.stringify(token))
} 
