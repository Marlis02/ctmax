'use client'

import { useOrdersStore } from '@/store/ordersStore'
import { Button } from '@mui/material'
import axios from 'axios'
import { on } from 'events'
import { useEffect } from 'react'

const MyOrders = () => {
  const { getOrdersByPhone, error, loading, userOrders } = useOrdersStore()
  useEffect(() => {
    const num = localStorage.getItem('user-phone')
    getOrdersByPhone('996700700888')
  }, [])

  console.log(userOrders)

  const userOrrdes = userOrders.map((item: any) => {
    const user = item.user
    return (
      <div key={item.id}>
        <p>{item.created_at}</p>
        <p>{item.note}</p>
        <p>{item.status}</p>
        <p>{item.user.phone}</p>
      </div>
    )
  })

  const getOrdersByStatus = async (status: string) => {
    const res = await axios.get(
      `http://192.168.123.163:8000/orders/?status=${status}`,
    )
    const data = res.data
    console.log(data)
  }
  return (
    <div>
      <h1>Мои заказы</h1>
      <Button variant="contained" onClick={() => getOrdersByStatus('')}>
        click
      </Button>
      {userOrders.length > 0 ? userOrrdes : <p>Нет данных</p>}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  )
}

export default MyOrders
