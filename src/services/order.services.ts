import { api } from '@/api/interceptors'

export const OrderServices = {
  addOrder: async (data: any) => {
    const res = await api.post('/order/order', data)
    return res.data
  },
}
