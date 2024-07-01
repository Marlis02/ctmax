'use client'
import { useCartStore } from '@/store/cartStore'
import styles from './cart.module.scss'
import { Ref, useEffect, useRef, useState } from 'react'
import CartCards from './CartCard'
import Image from 'next/image'
import Modal from '@/components/ui/Modals/Modal'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/store/modalStore'
import { Close } from '@mui/icons-material'

const Cart = ({ open, setOpen }: any) => {
  const router = useRouter()
  //store------------------------------
  const { items } = useCartStore()
  const { modal, setModal } = useModalStore()
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const totalCost = items.reduce((acc: any, item: any) => acc + item.price, 0)
  console.log(items, 'cartProducts')

  const cartProducts =
    items.length > 0 &&
    items.map((item: any) => {
      return <CartCards key={item.id} {...item} />
    })

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
                onClick={() => router.push('/check')}
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
              height={100}
            />
            <h3>Ваша корзина пустая</h3>
          </div>
        )}
      </div>
      <button className={styles.cart__close_btn} onClick={() => setOpen()}>
        <Close fontSize="large" />
      </button>
    </div>
  )
}

export default Cart
