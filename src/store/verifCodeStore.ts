import axios from 'axios'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type VerifCodeStore = {
  userPhone: string
  code: string
  getCode: (code: any) => void
  logout: (router: any) => void
}

export const useVerifCodeStore = create<VerifCodeStore>()(
  devtools((set) => ({
    userPhone: '',
    code: '',
    getCode: async (code: string) => {
      try {
        const res = await axios.post(
          'http://192.168.123.163:8000/api/verification-code/',
          code,
        )

        set({ code: res.data.verification_code, userPhone: res.data.phone })
      } catch (error) {
        console.log(error)
      }
    },
    logout: (router: any) => {
      router.push('/')
      set({ code: '', userPhone: '' })
    },
  })),
)
