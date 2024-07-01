'use client'
import { Button, TextField } from '@mui/material'
import styles from './admin.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useAuthStore } from '@/store/authStore'
import { User } from '@/types/types'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

const Admin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { push } = useRouter()

  console.log(username)
  console.log(password)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ username, password })
    login({ username, password }, push)
  }

  useEffect(() => {
    const isAdmin = localStorage.getItem('token')
    if (isAdmin) {
      push('/admin/dash')
    }
  }, [])
  return (
    <main className={styles.con}>
      <form className={styles.from} onSubmit={handleSubmit}>
        <h3 className={styles.from_title}>Администрация</h3>

        <TextField
          onChange={(e: any) => setUsername(e.target.value)}
          className={styles.from_inp}
          variant="outlined"
          label="username"
        />

        <TextField
          onChange={(e: any) => setPassword(e.target.value)}
          className={styles.from_inp}
          variant="outlined"
          label="password"
        />

        <Button type="submit" className={styles.form_btn} variant="outlined">
          Вход
        </Button>
      </form>
    </main>
  )
}

export default Admin
