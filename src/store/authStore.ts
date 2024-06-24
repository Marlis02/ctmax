import { ProductService } from '@/api'

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type AuthStore = {
  login: (user: any, push: any) => void
  //   deleteCategory: (id: number) => void
  //   editCategory: (id: number, title: string) => void
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        login: async (user: any, push: any) => {
          try {
            const res = await ProductService.loginAdmin(user)
            localStorage.setItem('token', JSON.stringify(res.data))
            push('/admin/dash')
          } catch (error) {
            console.log(error)
          }
        },
      }),
      {
        name: 'category-storage', // имя ключа в localStorage
      },
    ),
  ),
)
