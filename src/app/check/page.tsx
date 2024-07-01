'use client'
import { useCartStore } from '@/store/cartStore'
import styles from './check.module.scss'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { ICartProduct, ISendProduct } from '@/types/types'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { mapItems } from './halper'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { useAuthStore } from '@/store/authStore'
import CartInfo from '@/components/screens/Cart/CartInfo'

const Check = () => {
  const router = useRouter()
  const items = useCartStore((state) => state.items)
  // const addOrder = useOrdersStore((state) => state.addOrder)
  const user = useAuthStore((state) => state.user)

  const [pay, setPay] = useState('Начличными')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPay((event.target as HTMLInputElement).value)
  }

  const { register, handleSubmit } = useForm<ISendProduct>()

  const onSubmit: SubmitHandler<ISendProduct> = async (data: ISendProduct) => {
    const userID = user.userId
    data.status = 'Новый'
    data.products = mapItems(items)
    console.log(data, 'data')
  }

  const totalCost = items.reduce((acc: any, item: any) => acc + item.price, 0)
  return (
    <>
      <div className={styles.head}>
        <Image src="/icons/main_logo.svg" alt="logo" width={100} height={70} />
        <h2>Checkout</h2>
      </div>
      <div className={styles.con}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_con1}>
            <p className={styles.form_con1_title}>Заказ на самовывоз</p>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Имя</label>
              <input
                className={styles.form_con1_inp}
                type="text"
                // {...register('user.')}
              />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Номер телефона</label>
              <input
                className={styles.form_con1_inp}
                type="text"
                // placeholder={user ? user.phone : ''}
                // {...register('user.')}
              />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Адрес </label>
              <input
                className={styles.form_con1_inp}
                type="text"
                {...register('address')}
              />
            </div>
            <div className={styles.form_con1_item}>
              <label className={styles.form_con1_label}>Примечание</label>
              <textarea
                className={styles.form_con1_textarea}
                {...register('note')}
              />
            </div>
          </div>
          <div className={styles.form_con2}>
            <label className={styles.form_con2_label}>Промокод</label>
            <div className={styles.form_con2_item}>
              <input className={styles.form_con2_inp} type="text" />
              <button className={styles.form_con2_btn}>Применить</button>
            </div>
          </div>
          {/* <div className={styles.form_con3}>
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
          </div> */}

          <div className={styles.btn_con}>
            <button className={styles.button} onClick={() => router.push('/')}>
              <ChevronLeft /> назад в корзину
            </button>
            <button type="submit" className={styles.button}>
              Оформить закакз на {totalCost}сом <ChevronRight />
            </button>
          </div>
        </form>
        <CartInfo cartData={items} />
      </div>
    </>
  )
}

export default Check
