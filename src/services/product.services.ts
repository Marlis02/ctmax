import { api } from '@/api/interceptors'

export const ProductService = {
  getCategories: async () => {
    const res = await api.get('/categories/')
    return res.data
  },
  getProducts: async () => {
    const res = await api.get(`/products/`)
    return res.data
  },
}
