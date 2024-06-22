import { ICartProduct } from '@/types/types'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
type OpenStore = {
  open: boolean
  setOpen: () => void
}

export const useOpenCart = create<OpenStore>((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
  items: [],
}))

type Store = {
  items: ICartProduct[]
  addItem: (newItem: ICartProduct) => void
  removeItem: (itemId: number) => void
  clearCart: () => void
  getItems: () => ICartProduct[]
  plusQuantity: (itemId: number) => void
  minusQuantity: (itemId: number) => void
}
export const useCartStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        addItem: (newItem) => {
          set((state) => {
            const existingItem = state.items.find(
              (item) => item.id === newItem.id,
            )

            if (existingItem) {
              return {
                items: state.items.map((item) =>
                  item.id === newItem.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                        price: item.initialPrice * (item.quantity + 1),
                      }
                    : item,
                ),
              }
            } else {
              // Add new item to cart
              return { items: [...state.items, newItem] }
            }
          })
        },
        removeItem: (itemId) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
          })),
        clearCart: () => set((state) => ({ items: [] })),
        getItems: () => get().items,
        plusQuantity: (itemId) =>
          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    price: item.initialPrice * (item.quantity + 1),
                  }
                : item,
            ),
          })),
        minusQuantity: (itemId) =>
          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId && item.quantity > 1
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    price: item.initialPrice * (item.quantity - 1),
                  }
                : item,
            ),
          })),
      }),
      {
        name: 'cart-storage',
      },
    ),
  ),
)
