'use client'

import { X } from 'lucide-react'
import styles from './modal.module.scss'

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
        <X
          className={styles.modalCloseBtn}
          onClick={() => setActive(null)}
          size={40}
        />
      </div>
    </div>
  )
}

export default Modal
