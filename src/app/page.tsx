'use client'
import Image from 'next/image'
import styles from '@/styles/page.module.scss'
import Carousel from '@/components/ui/Carousel/Carousel'
import Card from '@/components/screens/Card/Card'
import PopularOrders from '@/components/screens/PopularOrders/PopularOrders'
import { ICardData, cardData } from '@/data/data'
import Slider from '@/components/ui/Slider/Slider'

export default function Home() {
  return (
    <main className={styles.main_con}>
      <Slider />
      <PopularOrders />
      <div className={styles.card_con}>
        {cardData.map((item: ICardData) => (
          <Card key={item.id} {...item} />
        ))}
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
      <br />
      <br />
      <br />
    </main>
  )
}
