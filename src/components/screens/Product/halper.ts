import { IProduct } from '@/types/types'

export const groupByCategory = (products: IProduct[]) => {
  return products.reduce((acc: Record<string, IProduct[]>, product) => {
    if (!acc[product.category_title]) {
      acc[product.category_title] = []
    }
    acc[product.category_title].push(product)
    return acc
  }, {})
}
