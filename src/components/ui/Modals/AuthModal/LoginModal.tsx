'use client'
import React, { useState } from 'react'
import styles from './loginModal.module.scss'
import axios from 'axios'
import { useAuthStore } from '@/store/authStore'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUser } from '@/types/types'

const LoginModal = ({ setModal }: any = {}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('996')
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUser>()

  //-------------STORE------------
  const userLogin = useAuthStore((state) => state.userLogin)

  const onSubmit: SubmitHandler<IUser> = (data: any) => {
    userLogin(
      {
        name: '',
        surname: '',
        phone: data.phone,
        email: '',
      },
      setModal,
    )
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input_con}>
          <span className={styles.label}>Номер телефона</span>
          <input
            id="phoneNumber"
            type="text"
            placeholder="+996 999-999999"
            className={styles.input}
            {...register('phone', {
              required: 'Phone number is required',
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <button className={styles.button} type="submit">
          Выслать код
        </button>
      </form>
    </div>
  )
}

export default LoginModal
