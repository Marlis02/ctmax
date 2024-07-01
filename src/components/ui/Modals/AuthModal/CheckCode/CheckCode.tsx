import { useEffect, useState } from 'react'
import styles from './checkCode.module.scss'
import VerificationInput from 'react-verification-input'
import './input.css'
import { useAuthStore } from '@/store/authStore'
import { CircularProgress } from '@mui/material'
import { IUser } from '@/types/types'

const CheckCode = ({ setModal }: any) => {
  const [checkCode, setCheckCode] = useState('')

  //STORE---------------------------------------------------
  const userCheckCode = useAuthStore((state) => state.userCheckCode)
  const user: IUser = useAuthStore((state) => state.user)
  const loading = useAuthStore((state) => state.laoding)
  //--------------------------------------------------------
  const handleChange = (value: any) => {
    setCheckCode(value)
  }

  useEffect(() => {
    if (checkCode.length === 4) {
      userCheckCode({ phone: user.phone, code: checkCode }, setModal)
    }
  }, [handleChange])

  return (
    <div className={styles.con}>
      <div className={styles.headers}>
        <h1 className={styles.title}>Вход на сайт</h1>
        <p className={styles.note}>
          Код отправили сообщением на :
          <br />
          {user.phone}
          <span onClick={() => setModal('login')} className={styles.change}>
            {' '}
            Изменить
          </span>
        </p>
        {loading && <CircularProgress />}
      </div>
      <div className={styles.form}>
        <div className={styles.input_con}>
          <VerificationInput
            onChange={handleChange}
            length={4}
            validChars="0-9"
            classNames={{
              container: 'container',
              character: 'character',
              characterInactive: 'character--inactive',
              characterSelected: 'character--selected',
              characterFilled: 'character--filled',
            }}
          />
        </div>
        <button className={styles.button}>Получить новый код</button>
      </div>
    </div>
  )
}

export default CheckCode
