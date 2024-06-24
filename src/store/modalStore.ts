import { create } from 'zustand'

type ModalStore = {
  open: string | null
  setModal: (open: string | null) => void
}

export const useModalStore = create<ModalStore>((set) => ({
  open: '',
  setModal: (open) => set({ open }),
}))
