'use client'

import styles from './modal.module.scss'
import { Close } from '@mui/icons-material'

interface ModalProps {
  active: boolean
  setActive: (active: boolean) => void
  children: React.ReactNode
}
const Modal = ({ active, setActive, children }: any) => {
  return (
    <div
      onClick={() => setActive(null)}
      className={active !== null ? styles.modalActive : styles.modal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <Close
          fontSize="large"
          className={styles.modalCloseBtn}
          onClick={() => setActive(null)}
        />
      </div>
    </div>
  )
}

export default Modal
