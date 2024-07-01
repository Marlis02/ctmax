import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type ModalStore = {
  modal: string | null
  setModal: (modal: string | null) => void
}

export const useModalStore = create<ModalStore>()(
  devtools((set) => ({
    modal: null,
    setModal: (modal) => set({ modal: modal }),
  })),
)
