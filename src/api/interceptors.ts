import { getRefreshToken, getToken, saveToken } from '@/services/ls.sevices'
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const api = axios.create(options)

// const refreshAuthToken = async () => {
//   const refreshToken = getRefreshToken()
//   if (!refreshToken) {
//     throw new Error('No refresh token available')
//   }

//   try {
//     const response = await axios.post('http://localhost:8000/refresh-token', {
//       refreshToken,
//     })
//     const { token } = response.data
//     saveToken(token)
//     return token
//   } catch (error) {
//     console.error('Failed to refresh token', error)
//   }
// }

// Интерсептор для добавления токена к каждому запросу
// api.interceptors.request.use(
//   (config) => {
//     const token = getToken()
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// // Интерсептор для обработки ответа и  обновления токена
// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     const newToken = response.headers['authorization']
//     if (newToken) {
//       saveToken(newToken)
//     }
//     return response
//   },
//   async (error) => {
//     const originalRequest = error.config
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       try {
//         const newToken = await refreshAuthToken()
//         originalRequest.headers['Authorization'] = `Bearer ${newToken}`
//         return api(originalRequest)
//       } catch (refreshError) {
//         return Promise.reject(refreshError)
//       }
//     }
//     return Promise.reject(error)
//   },
// )

// Вариант 2========================================

const refreshAuthToken = async () => {
  const refreshToken = getRefreshToken()
  if (!refreshToken) {
    throw new Error('No refresh token available')
  }

  try {
    const response = await axios.post('http://localhost:8000/refresh-token', {
      refreshToken,
    })
    const { token, newRefreshToken } = response.data
    saveToken(token)
    return token
  } catch (error) {
    console.error('Failed to refresh token', error)
    throw error
  }
}

// Интерсептор для добавления токена к каждому запросу
api.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Интерсептор для обработки ответа и бесшумного обновления токена
api.interceptors.response.use(
  (response: AxiosResponse) => {
    const newToken = response.headers['authorization']
    if (newToken) {
      saveToken(newToken)
    }
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const newToken = await refreshAuthToken()
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`
        return api(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)
