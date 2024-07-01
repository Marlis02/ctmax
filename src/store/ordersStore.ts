// import { ISendProduct } from '@/types/types'
// import { create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'
// import { responseErrors } from '../api/errors'
// import { api } from '@/api/interceptors'
// import { OrderServices } from '@/services/order.services'

// type Category = {
//   id: number
//   title: string
// }

// type userOrderStore = {
//   userOrders: any
//   addOrder: (data: any) => any
//   getOrdersByUserId: (id: number) => any
//   loading: boolean
//   error: any
// }

// export const useOrdersStore = create<userOrderStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         userOrders: [],
//         loading: false,
//         error: null,
//         addOrder: async (data: any) => {
//           try {
//             set({ loading: true })
//             const res = await OrderServices.addOrder(data)
//             if (res.status !== 200) {
//               set({ error: 'Server error' })
//               return
//             }
//             set({ loading: false, error: null })
//           } catch (error) {
//             console.log(error)
//             set({ loading: false, error: error })
//           }
//         },
//         getOrdersByUserId: async (phone: number) => {
//           try {
//             set({ loading: true, error: null })
//             const res = await api.get(phone)

//             if (res.status >= 200 && res.status < 300) {
//               set({ userOrders: res.data, loading: false, error: null })
//             } else {
//               const errorMessage = responseErrors(res)
//               set({ loading: false, error: errorMessage })
//             }

//             set({ userOrders: res.data, loading: false, error: null })
//           } catch (error) {
//             console.log(error)
//             set({ loading: false, error: 'Failed to fetch' })
//           }
//         },
//       }),
//       {
//         name: 'orders', // имя ключа в localStorage
//       },
//     ),
//   ),
// )
