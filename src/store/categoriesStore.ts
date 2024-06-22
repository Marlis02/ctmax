import { ProductService } from '@/api'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Category = {
  id: number
  title: string
}

type CategoryStore = {
  categories: Category[]
  getCategories: () => void
  //   deleteCategory: (id: number) => void
  //   editCategory: (id: number, title: string) => void
}

export const useCategoryStore = create<CategoryStore>()(
  devtools(
    persist(
      (set) => ({
        categories: [],
        getCategories: async () => {
          try {
            const data = await ProductService.getCategories()
            set({ categories: data })
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
