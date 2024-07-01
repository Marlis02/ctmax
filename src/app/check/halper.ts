import { ICartProduct } from '@/types/types'

export const mapItems = (cartItems: any) => {
  return cartItems.map((item: any) => ({
    product_id: item.id,
    quantity: item.quantity,
  }))
}
