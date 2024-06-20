import Image from 'next/image'
import React from 'react'
import styles from '@/styles/components/popularOrders.module.scss'

const PopularOrders = () => {
  return (
    <div className={styles.con}>
      <h3>Самые частые заказы</h3>
      <div className={styles.orders__con}>
        <div className={styles.order}>
          <Image src="/images/pizz.png" alt="logo" width={80} height={80} />
          <div>
            <p>Пеперони</p>
            <p>От 500 coм</p>
          </div>
        </div>
        <div className={styles.order}>
          <Image src="/images/pizz.png" alt="logo" width={80} height={80} />
          <div>
            <p>Пеперони</p>
            <p>От 500 coм</p>
          </div>
        </div>
        <div className={styles.order}>
          <Image src="/images/pizz.png" alt="logo" width={80} height={80} />
          <div>
            <p>Пеперони</p>
            <p>От 500 coм</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularOrders
