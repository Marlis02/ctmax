'use client'
import React, { FC, memo, useEffect, useMemo, useState } from 'react'
import styles from './product.module.scss'
import { cardData } from '@/data/data'
import ProductCard from './ProductCard'
import { IProduct } from '@/types/types'
import useProductsStore from '@/store/productsStore'
import { groupByCategory } from './halper'
import { useScrollStore } from '@/store/scrollStore'

const ProductList: FC = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const products = useProductsStore((state) => state.products)
  const getProducts = useProductsStore((state) => state.getProducts)
  const setCategoryRef = useScrollStore((state) => state.setCategoryRef)

  useEffect(() => {
    if (products.length <= 0) {
      getProducts(search, category)
    }
  }, [category, search])

  const productsByCategory = useMemo(
    () => groupByCategory(products),
    [products],
  )
  console.log(productsByCategory)

  return (
    <div className={styles.product_list}>
      {Object.keys(productsByCategory).map((category) => (
        <div key={category} className={styles.category_section}>
          <h2 ref={(el) => setCategoryRef(category, el)}>{category}</h2>
          <div className={styles.category_products}>
            {productsByCategory[category].map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
