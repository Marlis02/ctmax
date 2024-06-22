'use client'
import styles from '@/styles/pages/main.module.scss'
import PopularOrders from '@/components/screens/PopularOrders/PopularOrders'
import { ICardData, cardData } from '@/data/data'
import Slider from '@/components/ui/Slider/Slider'
import { useEffect, useRef, useState } from 'react'
import useProductsStore from '@/store/productsStore'
import { groupProductsByCategory } from '@/utils/scroll'
import ProductList from '@/components/screens/Product/ProductList'

export default function Home() {
  return (
    <main className={styles.main_con}>
      <Slider />
      <PopularOrders />
      <ProductList />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <button style={{ width: '200px', height: '50px' }}>Click</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Footer</h1>
    </main>
  )
}
