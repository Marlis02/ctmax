import { ProductService } from '@/api'
import { IProduct } from '@/types/types'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IProductStore {
  products: IProduct[]
  getProducts: (title: string, categoryId: string) => void
  addProducts: (products: any) => void
  loading: boolean
  error: string | null
}
const useProductsStore = create<IProductStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        loading: false,
        error: null,
        getProducts: async (title: string, categoryId: string) => {
          try {
            set({ loading: true })
            const data = await ProductService.getProducts(title, categoryId)
            set({ products: data, loading: false })
          } catch (error) {
            console.error('Error fetching products:', error)
            set({ loading: false, error: 'Failed to fetch products' })
          }
        },
        addProducts: async (formData: FormData) => {
          try {
            const res = await ProductService.postProducts(formData)
            if (res.status !== 200) {
              set({ error: 'Server error' })
              return
            }
            // Assuming the response data is the new product
            set((state) => ({
              products: [...state.products, res.data],
              error: null,
            }))
          } catch (error) {
            console.log(error)
            set({ error: 'Failed to post product' })
          }
        },
      }),
      {
        name: 'products-storage', // имя ключа в localStorage
      },
    ),
  ),
)

export default useProductsStore
