'use client'
import useProductStore from '@/store/productsStore'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import styles from './product.module.scss'
import { ICategory, IProduct } from '@/types/types'
import ProductCard from './ProductCard'
import { useScrollStore } from '@/store/scrollStore'

const ProductList: FC = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const setCategoryRef = useScrollStore((state) => state.setCategoryRef)
  const products = useProductStore((state) => state.products)
  const getProducts = useProductStore((state) => state.getProducts)
  useEffect(() => {
    // console.log('useEffect вызван')
    getProducts()
  }, [])

  

  return (
    <div className={styles.product_list}>
      {products?.map(({ categoryId, name, products }: ICategory) => (
        <div key={categoryId} className={styles.category_section}>
          <h2 ref={(ref) => setCategoryRef(name, ref)}>{name}</h2>
          <div className={styles.category_products}>
            {products?.map((item: IProduct) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
