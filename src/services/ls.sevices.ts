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
  return localStorage.getItem('tokens')
}

export const getRefreshToken = () => {
  const tokens = localStorage.getItem('tokens')
  if (tokens) {
    const { refreshToken } = JSON.parse(tokens)
    return refreshToken
  } else {
    console.error('No refresh token available service')
  }
}

export const saveToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token))
}
