'use client'
import { useRouter } from 'next/navigation'
import styles from './profile.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthStore } from '@/store/authStore'
const ProfilePage = () => {
  const router = useRouter()
  const [data, setData] = useState<any>({})
  const user = useAuthStore((state) => state.user)
  const userLogout = useAuthStore((state) => state.userLogout)
  console.log(user.userId)

  return (
    <div className={styles.con}>
      <h1 className={styles.title}>Личные данные :</h1>
      <form className={styles.form}>
        <div className={styles.input_con}>
          <label className={styles.label}>Имя</label>
          <input className={styles.input} type="text" placeholder={data.name} />
        </div>
        <div className={styles.input_con}>
          <label className={styles.label}>Фамилия</label>
          <input className={styles.input} type="text" placeholder={data.name} />
        </div>
        <div className={styles.input_con}>
          <label className={styles.label}>День рождения</label>
          <input className={styles.input} type="date" placeholder={data.name} />
        </div>
        <div className={styles.input_con}>
          <label className={styles.label}>Электронная почта</label>
          <input className={styles.input} type="text" placeholder={data.name} />
        </div>
      </form>
      <button className={styles.logout_btn} onClick={() => userLogout(router)}>
        Выйти из акаунта
      </button>
    </div>
  )
}

export default ProfilePage
