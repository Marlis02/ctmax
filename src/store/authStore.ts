import { api } from '@/api/interceptors'
import { AuthServices } from '@/services/auth.services'
import { IUser } from '@/types/types'
import toast from 'react-hot-toast'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type AuthStore = {
  user: IUser
  userLogin: (phone: IUser, setModal?: any) => void
  userCheckCode: (code: any, setModal?: any) => void
  userLogout: (router: any) => void
  laoding: boolean
  error: string | null
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: {
          name: '',
          surname: '',
          phone: '',
          email: '',
          userId: 0,
        },
        laoding: false,
        error: null,
        userLogin: async (user, setModal) => {
          set({ laoding: true })
          try {
            const res = await api.post('/user/login', user)
            if (res.status === 200 || 201) {
              set({
                user: { ...user, phone: user.phone },
                laoding: false,
                error: null,
              })
              setModal('checkCode')
            }
          } catch (error: any) {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status < 500
            ) {
              toast.error('Неверный номер телефона')
            } else if (error.response && error.response.status >= 500) {
              toast.error('Сервер недоступен')
            } else {
              toast.error('Произошла ошибка') // Catch all other errors
            }
          }
        },
        userCheckCode: async (body, setModal: any) => {
          set({ laoding: true })
          try {
            const res = await AuthServices.userCheckCode({
              phone: body.phone,
              code: body.code,
            })
            set((state) => ({
              ...state,
              user: { ...state.user, userId: res.id },
            }))
            setModal(null)
          } catch (error) {
            toast.error('Неверный код')
            console.log(error)
          }
        },
        userLogout: (router) => {
          set({
            user: { name: '', surname: '', phone: '', email: '', userId: 0 },
          })
          router.push('/')
        },
      }),
      {
        name: 'auth', // имя ключа в localStorage
      },
    ),
  ),
)
