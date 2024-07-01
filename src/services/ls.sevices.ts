export const setLS = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

export const getLS = (key: string) => {
  return localStorage.getItem(key)
}

export const removeLS = (key: string) => {
  localStorage.removeItem(key)
}

// tokens
export const getToken = () => {
  const tokens = localStorage.getItem('tokens')
  if (tokens) {
    const { token } = JSON.parse(tokens)
    return token
  } else {
    console.error('No token available service')
  }
}

export const getRefreshToken = () => {
  const tokens = localStorage.getItem('tokens')
  if (tokens) {
    const { refresh } = JSON.parse(tokens)
    return refresh
  } else {
    console.error('No refresh token available service')
  }
}

export const saveToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}
