import { useEffect, useState } from 'react'
import styles from './checkCode.module.scss'
import VerificationInput from 'react-verification-input'
import './input.css'
import toast from 'react-hot-toast'
import { useVerifCodeStore } from '@/store/verifCodeStore'

const CheckCode = ({ active, setActive }: any) => {
  const [checkCode, setCheckCode] = useState('')
  const code = useVerifCodeStore((state) => state.code)
  const handleChange = (value: any) => {
    setCheckCode(value)
  }

  useEffect(() => {
    if (checkCode.length === 4) {
      if (checkCode === code) {
        toast.success('Код верный')
        setActive(null)
      } else {
        toast.error('Код неверный')
      }
    }
  }, [handleChange])

  return (
    <div className={styles.con}>
      <div className={styles.headers}>
        <h1 className={styles.title}>Вход на сайт</h1>
        <p className={styles.note}>
          Код отправили сообщением на <br />
          +996 996 706 525{' '}
          <span onClick={() => setActive('login')} className={styles.change}>
            Изменить
          </span>
        </p>
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
