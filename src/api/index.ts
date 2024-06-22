import axios from 'axios'

const BASE_URL = 'http://192.168.123.163:8000'
const BASE_URL2 = ''

export const ProductService = {
  getCategories: async () => {
    const res = await axios.get(`${BASE_URL}/categories/`)
    return res.data
  },
  // produccts
  getProducts: async (title: string, categoryId: string) => {
    const res = await axios.get(`${BASE_URL}/products/`)
    return res.data
  },
  postProducts: async (data: FormData) => {
    const res = await axios.post('http://192.168.123.163:8000/products/', data)
    return res.data
  },
  deleteProducts: async (id: number) => {
    const res = await axios.delete(`http://192.168.123.163:8000/products/${id}`)
    return res.data
  },

  // orders

  addOredr: async (data: any) => {
    const res = await axios.post('${BASE_URL}/orders/', data)
    return res.data
  },
}
