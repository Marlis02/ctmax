import React, { FC } from 'react'
import styles from './footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.con}>
      <h2>CT MAX</h2>
      <p>Все права защищены © 2024</p>
    </footer>
  )
}

export default Footer
