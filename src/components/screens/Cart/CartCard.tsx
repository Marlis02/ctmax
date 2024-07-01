import { useCartStore } from '@/store/cartStore'
import styles from './cartCard.module.scss'
import { ICartProduct } from '@/types/types'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import RemoveIcon from '@mui/icons-material/Remove'
import { Add } from '@mui/icons-material'
const CartCards = ({
  id,
  description,
  image,
  price,
  quantity,
  name,
}: ICartProduct) => {
  const { removeItem, plusQuantity, minusQuantity } = useCartStore()

  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCard__1}>
        <Image src={image ? image : ''} alt="cartImg" width={60} height={60} />
        <p>{name}</p>
        <CloseIcon fontSize="large" onClick={() => removeItem(id)} />
      </div>
      <div className={styles.cartCard__2}>
        <p>{price} сом</p>
        <div className={styles.cartCard__2_counter}>
          <RemoveIcon fontSize="small" onClick={() => minusQuantity(id)} />
          {quantity}
          <Add fontSize="small" onClick={() => plusQuantity(id)} />
        </div>
      </div>
    </div>
  )
}

export default CartCards
