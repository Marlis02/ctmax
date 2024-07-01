import { ICartProduct } from '@/types/types'
import styles from './cartInfo.module.scss'

const CartInfo = ({ cartData }: any) => {
  const totalCost = cartData.reduce(
    (acc: any, item: any) => acc + item.price,
    0,
  )

  console.log(cartData, 'cartData')

  return (
    <div className={styles.cartInfoCon}>
      <h3 className={styles.cartInfoTitle}>Состав заказа</h3>
      <div className={styles.cartOrdersCon}>
        {cartData &&
          cartData.map((item: ICartProduct) => (
            <div className={styles.cart_order} key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p className={styles.cart_order_count}>{item.quantity} шт</p>
            </div>
          ))}
      </div>
      <div className={styles.cartResult}>
        <div className={styles.cart_desc}>
          <p>{cartData.length} товаров</p>
          <p>{totalCost} сом</p>
        </div>
        <div className={styles.cart_total}>
          <p>Сумма заказа</p>
          <p>{totalCost} сом</p>
        </div>
      </div>
    </div>
  )
}

export default CartInfo
