import { useCartStore } from '@/store/cartStore'
import styles from './product.module.scss'
import { IProduct } from '@/types/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ProductCard = ({
  id,
  category_title,
  image,
  note,
  price,
  title,
  composition,
  count,
  category,
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
              category,
              composition,
            })
            toast(`1шт ${title} добавлено в корзину `, {
              style: {
                width: '300px',
                borderRadius: '4px',
                background: '#333',
                color: '#fff',
                padding: '10px',
              },
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
