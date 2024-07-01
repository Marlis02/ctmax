import { emit } from 'process'

// products
export interface IProduct {
  id: number
  name: string
  description: string
  composition: string
  price: number
  category_id: number
  image: string
}
export interface ICategory {
  categoryId: number
  name: string
  products?: IProduct[]
}

//cart=====================
export interface ICartProduct {
  id: number
  name: string
  image: string
  description: string
  price: number
  quantity: number
  initialPrice: number
  composition?: string
  category_name?: string
  categoryId?: number
}

export interface User {
  username: string
  password: string
}

//orders=====================

export interface IUserProducts {
  title: string
  composition?: string
  price: number
  note: string
  category: number
}

export interface IUserOrders {
  product_id: number
  product: IUserProducts
  quantity: number
}
// export interface  {
//   user: IUser
//   note: string
//   status: string
//   items: IUserOrders[]
// }

// order
export interface ISendProduct {
  user_id: number
  address: string
  note: string
  status: string
  products: {
    product_id: number
    quantity: number
  }[]
}

// user

export interface IUser {
  name?: string | null
  surname?: string | null
  phone?: string | null
  email?: string | null
  userId?: number | null
}

export interface IUserOrderList {}
