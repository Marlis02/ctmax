import { api } from '@/api/interceptors'
import { Category } from '@mui/icons-material'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IProductsStore {
  products: any
  getProducts: () => void
  loading: boolean
  error: string | null
}

const useProductStore = create<IProductsStore>()(
  devtools(
    persist(
      (set) => ({
        categories: [],
        products: null,
        loading: false,
        error: null,
        getProducts: async () => {
          console.log('getProducts вызван')
          set({ loading: true, error: null })
          try {
            const { data } = await api.get('/products')
            // console.log(data)
            set({ products: data, loading: false })
          } catch (error) {
            set({ error: 'Failed to fetch products', loading: false })
          }
        },
      }),
      {
        name: 'products',
      },
    ),
  ),
)

export default useProductStore
