'use client'
import { useRouter } from 'next/navigation'
import styles from './profile.module.scss'
import { useVerifCodeStore } from '@/store/verifCodeStore'
const ProfilePage = () => {
  const router = useRouter()
  const logout = useVerifCodeStore((state) => state.logout)
  const userPhone = useVerifCodeStore((state) => state.userPhone)
  console.log(userPhone, 'userPhone')

  return (
    <div>
      <h1>Профиль</h1>
      <br />
      <br />
      <br />
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
