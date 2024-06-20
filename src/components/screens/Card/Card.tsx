import Modal from '@/components/ui/Modal/Modal'
import { ICardData } from '@/data/data'
import { useCartStore } from '@/store/cartStore'
import styles from '@/styles/components/card.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Card = (props: ICardData) => {
  const { items, addItem } = useCartStore()

  const inCart = items.some((item) => item.id === props.id)

  return (
    <div className={styles.card}>
      <Image
        src={props.img}
        alt="logo"
        width={200}
        height={200}
        onClick={() => alert(props.id)}
      />
      <p className={styles.card_title}>{props.title}</p>
      <p className={styles.card_desc}>
        {props.desc.length > 30 ? props.desc.slice(0, 30) + '...' : props.desc}
      </p>
      <div className={styles.card_footer}>
        <span className={styles.card_price}>{props.price}</span>
        <button
          className={
            inCart
              ? `${styles.card_btn} ${styles.cartActivBtn}`
              : styles.card_btn
          }
          disabled={inCart}
          onClick={() => {
            addItem({ ...props, quantity: 1, initialPrice: props.price })
            toast.success('Товар добавлен в корзину')
          }}
        >
          В корзину
        </button>
      </div>
    </div>
  )
}

export default Card
