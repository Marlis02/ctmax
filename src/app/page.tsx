'use client'
import styles from '@/styles/mainPage.module.scss'
import PopularOrders from '@/components/screens/PopularOrders/PopularOrders'

import Slider from '@/components/ui/Slider/Slider'

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
    </main>
  )
}
