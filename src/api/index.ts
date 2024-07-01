// import axios from 'axios'

// const BASE_URL = 'http://localhost:5000'
// const BASE_URL2 = ''

// export const ProductService = {
//   getCategories: async () => {
//     const res = await axios.get(`${BASE_URL}/categories/`)
//     return res.data
//   },
//   // produccts
//   getProducts: async (title: string, categoryId: string) => {
//     const res = await axios.get(`${BASE_URL}/products/`)
//     return res.data
//   },
//   postProducts: async (data: FormData, token: string) => {
//     try {
//       const headers = { Authorization: `Bearer ${token}` }
//       const res = await axios.post(`${BASE_URL}/products/create/`, data, {
//         headers,
//       })
//       return res
//     } catch (error) {
//       console.error('Error in postProducts:', error)
//       throw error
//     }
//   },
//   deleteProducts: async (id: number) => {
//     const res = await axios.delete(`http://192.168.123.163:8000/products/${id}`)
//     return res.data
//   },

//   // orders

//   addOrder: async (data: any) => {
//     return await axios.post(`${BASE_URL}/orders/`, data)
//   },
//   getOrdersByPhone: async (phone: number) => {
//     return await axios.get(`${BASE_URL}/orders/by-user/${phone}/`)
//   },

//   //Admin auth
//   loginAdmin: async (data: any) => {
//     return await axios.post(`${BASE_URL}/token/`, data)
//   },
// }
