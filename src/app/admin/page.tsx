import { Button, TextField } from '@mui/material'
import styles from '@/styles/pages/admin.module.scss'

const Admin = () => {
  return (
    <main className={styles.con}>
      <form className={styles.from}>
        <h3 className={styles.from_title}>Администрация</h3>
        <TextField
          className={styles.from_inp}
          id="outlined-basic"
          label="Login"
          variant="outlined"
        />
        <TextField
          className={styles.from_inp}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button className={styles.form_btn} variant="outlined">
          Вход
        </Button>
      </form>
    </main>
  )
}

export default Admin
