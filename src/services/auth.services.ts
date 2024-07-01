import { api } from '@/api/interceptors'
import { IUser } from '@/types/types'

export const AuthServices = {
  userLoginByPhone: async (phone: IUser) => {
    try {
      const res = await api.post('/user/login', phone)
      if (res.status === 200 || 201) return res.data
    } catch (error) {
      console.error(error)
      throw new Error('Не удалось выполнить вход по телефону')
    }
  },
  userCheckCode: async (code: any) => {
    try {
      const res = await api.post('/user/code', code)
      if (res.status === 200 || 201) return res.data
    } catch (error) {
      console.log(error)
      throw new Error('Не удалось выполнить вход по телефону')
    }
  },
}
