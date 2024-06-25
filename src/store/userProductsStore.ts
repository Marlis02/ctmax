import { ProductService } from '@/services/product.services'
import { create } from 'zustand'

interface IUserProductsStore {
  userCategories: any
  getUserCategories: () => void
  getUserProducts: (categoryId: string) => void
  loading: boolean
  error: string | null
  products: any
}

export const useUserProductsStore = create<IUserProductsStore>((set) => ({
  userCategories: [],
  products: [],
  loading: false,
  error: null,
  getUserCategories: async () => {
    try {
      set({ loading: true })
      const data = await ProductService.getCategories()
      set({ userCategories: data, loading: false })
    } catch (error) {
      console.error('Error fetching products:', error)
      set({ loading: false, error: 'Failed to fetch products' })
    }
  },
  getUserProducts: async () => {
    try {
      set({ loading: true })
      const data = await ProductService.getProducts()
      set({ products: data, loading: false })
    } catch (error) {
      console.error('Error fetching products:', error)
      set({ loading: false, error: 'Failed to fetch products' })
    }
  },
}))
