'use client'

import { useEffect, useState } from 'react'
import styles from './orderList.module.scss'
import { api } from '@/api/interceptors'

const OrderList = () => {
  const [orders, setOrders] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get('/order/get/user_id/2')
        setOrders(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])
  console.log(orders)

  return (
    <div className={styles.con}>
      <h2 className={styles.title}>Мои заказы:</h2>
      <div className={styles.ordersCon}>
        {orders?.map((item: any, index: any) => {
          return (
            <div key={index} className={styles.orderCon}>
              <p>{item.address}</p>
              <p>{item.status}</p>
              <p>{item.note}</p>
              <p>Продукты</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderList
