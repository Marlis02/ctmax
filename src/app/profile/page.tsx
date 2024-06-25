'use client'
import { useRouter } from 'next/navigation'
import styles from './profile.module.scss'
import { useVerifCodeStore } from '@/store/verifCodeStore'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ProfilePage = () => {
  const router = useRouter()
  const logout = useVerifCodeStore((state) => state.logout)
  const userPhone = useVerifCodeStore((state) => state.userPhone)
  console.log(userPhone, 'userPhone')
  const [data, setData] = useState<any>({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://192.168.123.163:8000/api/users/996700500500/',
        )
        setData(res.data) // Обновляем состояние с полученными данными
        console.log(res.data, 'res')
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []) // Пустой массив зависимостей означает, что эффект будет выполнен один раз после монтирования компонента

  console.log(data, 'data')

  return (
    <div>
      <h1>Профиль</h1>
      <p>Телефон: {userPhone}</p>

      <br />
      <div>имя : {data.name}</div>
      <br />
      <div>email : {data.email}</div>
      <br />
      <div>birthday : {data.birthday}</div>
      <br />
      <br />
      <br />
      <button className={styles.logout_btn} onClick={() => logout(router)}>
        Выйти из акаунта
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default ProfilePage
