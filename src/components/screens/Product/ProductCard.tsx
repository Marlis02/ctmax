import { useCartStore } from '@/store/cartStore'
import styles from './product.module.scss'
import { ICartProduct, IProduct } from '@/types/types'
import Image from 'next/image'
import toast from 'react-hot-toast'

// export interface ICartProduct {
//   id: number
//   name: string
//   image: string
//   description: string
//   price: number
//   category_name?: string
//   categoryId: number
//   composition?: string
//   quantity: number
//   initialPrice: number
// }

const ProductCard = ({
  id,
  image,
  price,
  description,
  composition,
  category_id,
  name,
}: IProduct) => {
  const addItem = useCartStore((state) => state.addItem)
  const cartProduct: ICartProduct = {
    id,
    name,
    image,
    description,
    price,
    quantity: 1,
    initialPrice: price,
    composition: composition,
  }

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
      <p className={styles.card_title}>{name}</p>
      <p className={styles.card_desc}>
        Охотничьи колбаски, маринованные огурчики, красный лук, томаты,
        горчичный соус, моцарелла, томатный соус {description}
      </p>
      <div className={styles.card_footer}>
        <span className={styles.card_price}>{price} сом</span>
        <button
          className={styles.card_btn}
          onClick={() => {
            addItem(cartProduct)
            toast(`Добавлено в корзину : \n  1шт ${name} `, {
              style: {
                borderRadius: '12px',
                background: '#333',
                color: '#fff',
                padding: '15px',
                fontSize: '14px',
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
