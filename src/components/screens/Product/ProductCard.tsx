import { useCartStore } from '@/store/cartStore'
import styles from '@/styles/components/product.module.scss'
import { IProduct } from '@/types/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ProductCard = ({
  id,
  category_title,
  image,
  note,
  price,
  title,
  composition,
  count,
}: IProduct) => {
  const { items, addItem } = useCartStore()
  const [defaultImage, setDefaultState] = useState('')

  return (
    <div className={styles.card}>
      <Image
        src={image ? image : '/images/pizz.png'}
        alt="logo"
        width={200}
        height={200}
        onClick={() => alert(id)}
        className={styles.card_img}
      />
      <p className={styles.card_title}>{title}</p>
      <p className={styles.card_desc}>{note}</p>
      <div className={styles.card_footer}>
        <span className={styles.card_price}>{price} сом</span>
        <button
          className={styles.card_btn}
          onClick={() => {
            addItem({
              id,
              img: image ? image : '/images/pizz.png',
              price,
              title,
              desc: note,
              quantity: 1,
              initialPrice: price,
              category_title,
            })
          }}
        >
          В корзину
        </button>
      </div>
    </div>
  )
}

export default ProductCard
