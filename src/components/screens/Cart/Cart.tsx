'use client'
import { useCartStore } from '@/store/cartStore'
import styles from '@/styles/components/cart/cart.module.scss'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import CartCards from './CartCard'
import Image from 'next/image'
import Modal from '@/components/ui/Modal/Modal'
import { useRouter } from 'next/navigation'

const Cart = ({ setOpen }: { setOpen: any }) => {
  const [modal, setModal] = useState(false)
  const router = useRouter()
  const { items } = useCartStore()
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const totalCost = items.reduce((acc: any, item: any) => acc + item.price, 0)
  console.log(items)
  const cartProducts =
    items.length > 0 ? (
      items.map((item: any) => {
        return <CartCards key={item.id} {...item} />
      })
    ) : (
      <p>Корзина пуста</p>
    )

  return (
    <div className={styles.con}>
      <div className={styles.cart_con}>
        {items.length > 0 ? (
          <>
            <p className={styles.cart__title}>
              {items.length} товарa на {totalCost}
            </p>
            {cartProducts}
            <div className={styles.cart__footer}>
              <div className={styles.cart__footer_desc}>
                <p>Сумма заказа</p>
                <span>{totalCost} сом</span>
              </div>
              <button
                onClick={() => {
                  router.push('/check')
                  setOpen(false)
                }}
                className={styles.cart__footer_btn}
              >
                К оформлению
              </button>
            </div>
          </>
        ) : (
          <div className={styles.cart_empty}>
            <Image
              src="/images/empty-cart.png"
              alt="emptyCart"
              width={300}
              height={200}
            />
            <h3>Ваша корзина пустая</h3>
          </div>
        )}
      </div>
      <button className={styles.cart__close_btn} onClick={() => setOpen()}>
        <X size={60} />
      </button>
    </div>
  )
}

export default Cart
