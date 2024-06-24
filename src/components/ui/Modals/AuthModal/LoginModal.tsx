'use client'
import React, { useState } from 'react'
import styles from './loginModal.module.scss'
import axios from 'axios'
import { useVerifCodeStore } from '@/store/verifCodeStore'

const LoginModal = ({ setActive }: any = {}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('996')
  const getCode = useVerifCodeStore((state) => state.getCode)

  const handleSubmit = (data: any) => {
    getCode(data)
    setActive('checkCode')
  }

  return (
    <div className={styles.con}>
      <div className={styles.headers}>
        <h1 className={styles.title}>Вход на сайт</h1>
        <p className={styles.note}>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.input_con}>
          <span className={styles.label}>Номер телефона</span>
          <input
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="text"
          />
        </div>
        <button
          className={styles.button}
          onClick={() => handleSubmit({ phone: phoneNumber })}
        >
          Выслать код
        </button>
      </div>
    </div>
  )
}

export default LoginModal
