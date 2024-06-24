import { ProductService } from '@/api'
import { ISendProduct } from '@/types/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { responseErrors } from './errors'

type Category = {
  id: number
  title: string
}

type userOrderStore = {
  userOrders: any
  addOrder: (data: any) => any
  getOrdersByPhone: (phone: any) => any
  loading: boolean
  error: any
}

export const useOrdersStore = create<userOrderStore>()(
  devtools(
    persist(
      (set) => ({
        userOrders: [],
        loading: false,
        error: null,
        addOrder: async (data: any) => {
          try {
            set({ loading: true })
            const res = await ProductService.addOrder(data)
            if (res.status !== 200) {
              set({ error: 'Server error' })
              return
            }
            set({ loading: false, error: null })
          } catch (error) {
            console.log(error)
            set({ loading: false, error: error })
          }
        },
        getOrdersByPhone: async (phone: number) => {
          try {
            set({ loading: true, error: null })
            const res = await ProductService.getOrdersByPhone(phone)

            if (res.status >= 200 && res.status < 300) {
              set({ userOrders: res.data, loading: false, error: null })
            } else {
              const errorMessage = responseErrors(res)
              set({ loading: false, error: errorMessage })
            }

            set({ userOrders: res.data, loading: false, error: null })
          } catch (error) {
            console.log(error)
            set({ loading: false, error: 'Failed to fetch' })
          }
        },
      }),
      {
        name: 'orders', // имя ключа в localStorage
      },
    ),
  ),
)
