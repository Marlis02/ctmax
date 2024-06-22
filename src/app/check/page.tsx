'use client'
import { useCartStore } from '@/store/cartStore'
import styles from './gg.module.scss'
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import {
  AlignVerticalJustifyStartIcon,
  Backpack,
  BackpackIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'

import { useState } from 'react'
import { ICardData } from '@/data/data'
import { ICartProduct } from '@/types/types'
import { useRouter } from 'next/navigation'

const Check = () => {
  const router = useRouter()
  const { items } = useCartStore()
  const [pay, setPay] = useState('Начличными')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPay((event.target as HTMLInputElement).value)
  }

  const totalCost = items.reduce((acc: any, item: any) => acc + item.price, 0)
  return (
    <>
      <main className={styles.con}>
        <div className={styles.head}>
          <Image
            src="/icons/main_logo.svg"
            alt="logo"
            width={100}
            height={70}
          />
          <h2>Checkout</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.form_con1}>
            <p className={styles.form_con1_title}>Заказ на самовывоз</p>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Имя</label>
              <input className={styles.form_con1_inp} type="text" />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Номер телефона</label>
              <input className={styles.form_con1_inp} type="text" />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Адрес пиццерии</label>
              <input className={styles.form_con1_inp} type="text" />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Время</label>
              <textarea className={styles.form_con1_textarea} />
            </div>
          </div>
          <div className={styles.form_con2}>
            <label className={styles.form_con2_label}>Промокод</label>
            <div className={styles.form_con2_item}>
              <input className={styles.form_con2_inp} type="text" />
              <button className={styles.form_con2_btn}>Применить</button>
            </div>
          </div>
          <div className={styles.form_con3}>
            <label className={styles.form_con3_label}>Способы оплаты</label>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={pay}
                onChange={handleChange}
              >
                <FormControlLabel
                  className={styles.form_con3_inp}
                  value="Картой на сайте"
                  control={
                    <Radio
                      sx={{
                        color: '#f44336',
                        '&.Mui-checked': {
                          color: '#f44336',
                        },
                      }}
                    />
                  }
                  label="Картой на сайте"
                />
                <FormControlLabel
                  className={styles.form_con3_inp}
                  value="Картой в заведении"
                  control={
                    <Radio
                      sx={{
                        color: '#f44336',
                        '&.Mui-checked': {
                          color: '#f44336',
                        },
                      }}
                    />
                  }
                  label="Картой в заведении"
                />
                <FormControlLabel
                  className={styles.form_con3_inp}
                  sx={{ fontSize: '22px ' }}
                  value="Наличными"
                  control={
                    <Radio
                      sx={{
                        color: '#f44336',
                        '&.Mui-checked': {
                          color: '#f44336',
                        },
                      }}
                    />
                  }
                  label="Наличными"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.btn_con}>
          <button className={styles.button} onClick={() => router.push('/')}>
            <ChevronLeft /> назад в корзину
          </button>
          <button className={styles.button}>
            Оформить закакз на 100сом <ChevronRight />
          </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.cart_info}>
          <h3>Состав заказа</h3>
          <div className={styles.cart_orders}>
            {items &&
              items.map((item: ICartProduct) => (
                <div className={styles.cart_order} key={item.id}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p className={styles.cart_order_count}>{item.quantity} шт</p>
                </div>
              ))}
          </div>
          <div className={styles.cart_desc}>
            <p>{items.length} товаров</p>
            <p>{totalCost} сом</p>
          </div>
          <div className={styles.cart_total}>
            <p>Сумма заказа</p>
            <p>{totalCost} сом</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Check
