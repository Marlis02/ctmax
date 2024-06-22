import { create } from 'zustand'

interface ScrollStoreState {
  categoryRefs: { [key: string]: HTMLElement | null }
  setCategoryRef: (category: string, ref: HTMLElement | null) => void
  scrollToCategory: (category: string, offset?: number) => void
}

export const useScrollStore = create<ScrollStoreState>((set, get) => ({
  categoryRefs: {},
  setCategoryRef: (category, ref) =>
    set((state) => ({
      categoryRefs: { ...state.categoryRefs, [category]: ref },
    })),
  scrollToCategory: (category, offset = 0) => {
    const state = get()
    const element = state.categoryRefs[category]
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  },
}))
