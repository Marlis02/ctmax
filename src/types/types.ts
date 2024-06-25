//cart=====================
export interface ICartProduct {
  id: number
  title: string
  img: string
  desc: string
  price: number
  quantity: number
  initialPrice: number
  category_title?: string
  category?: number
  composition?: string
}

export interface IProduct {
  id: number
  title: string
  composition?: string
  price: number
  image: string
  note: string
  category_title: string
  count?: number
  category?: number
}

export interface User {
  username: string
  password: string
}

//orders=====================
export interface IUser {
  name: string
  phone: string
  address: string
}

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

export interface ISendProduct {
  user: number
  address: string
  note: string
  status_order: string
  items: {
    product_id: number
    product: {
      title: string
      composition: string
      price: number
      note: string
      category: number
    }
    quantity: number
  }[]
}
