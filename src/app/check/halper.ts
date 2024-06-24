import { ICartProduct } from '@/types/types'

export const mapItems = (cartItems: any) => {
  return cartItems.map((item: any) => ({
    product_id: item.id,
    product: {
      title: item.title,
      composition: item.composition || '', // Assuming `desc` is the composition
      price: item.price,
      note: '', // Assuming there is no note in the cart item
      category: item.category,
    },
    quantity: item.quantity,
  }))
}
