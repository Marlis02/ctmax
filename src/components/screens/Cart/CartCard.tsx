import { useCartStore } from '@/store/cartStore'
import styles from './cartCard.module.scss'
import { ICartProduct } from '@/types/types'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
const CartCards = ({ id, title, img, desc, price, quantity }: ICartProduct) => {
  const { removeItem, plusQuantity, minusQuantity } = useCartStore()

  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard__1}>
        <Image src={img ? img : ''} alt="cartImg" width={60} height={60} />
        <p>{title}</p>
        <X size={20} onClick={() => removeItem(id)} />
      </div>
      <div className={styles.cartCard__2}>
        <p>{price} сом</p>
        <div className={styles.cartCard__2_counter}>
          <Minus size={20} onClick={() => minusQuantity(id)} />
          {quantity}
          <Plus size={20} onClick={() => plusQuantity(id)} />
        </div>
      </div>
    </div>
  )
}

export default CartCards
