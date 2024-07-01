import { api } from '@/api/interceptors'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type CategoryStore = {
  navCategories: any
  getNavCategories: () => void
}

export const useCategoryStore = create<CategoryStore>()(
  devtools(
    persist(
      (set) => ({
        navCategories: [],
        getNavCategories: async () => {
          try {
            const { data } = await api.get('/categories')
            set({ navCategories: data })
          } catch (error) {
            console.log(error)
          }
        },
      }),
      {
        name: 'nav-categories', // имя ключа в localStorage
      },
    ),
  ),
)
