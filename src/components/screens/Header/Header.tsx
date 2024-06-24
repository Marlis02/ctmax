'use client'
import Link from 'next/link'
import styles from './header.module.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Modal from '@/components/ui/Modals/Modal'
import LoginModal from '@/components/ui/Modals/AuthModal/LoginModal'
import CheckCode from '@/components/ui/Modals/AuthModal/CheckCode/CheckCode'
import { useVerifCodeStore } from '@/store/verifCodeStore'
import { CircleUserRound } from 'lucide-react'

const Header = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const userPhone = useVerifCodeStore((state) => state.userPhone)

  const router = useRouter()

  const pathname = usePathname()
  const active =
    pathname === '/check' ||
    pathname === '/admin' ||
    pathname === '/admin/dash' ||
    pathname === '/admin/dash/create_product'
  return (
    <div className={active ? styles.header_none : styles.header}>
      <div className={styles.header__1}>
        <div className={styles.header__lang}>
          <Image src="/icons/language.svg" alt="logo" width={30} height={30} />
          <span>ru</span>
        </div>
        <div className={styles.header__links}>
          <Link href="/about">О нас</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
      </div>
      <div className={styles.header__2}>
        <div className={styles.header__block1}>
          <Image src="/icons/main_logo.svg" alt="gg" width={180} height={80} />
          <h3>КОМПАНИЯ</h3>
          <div className={styles.header__delivery}>
            <p>Доставка по Бишкеку</p>
            <p>
              35мин - 4.77{' '}
              <Image src="/icons/star.svg" alt="star" width={20} height={20} />
            </p>
          </div>
          <div className={styles.header__phone}>
            <p>0(555)-555-555</p>
            <p>Звонок бесплатный</p>
          </div>
        </div>
        <div className={styles.header__block2}>
          <Image src="/icons/coin.svg" alt="logo" width={20} height={20} />
          {userPhone ? (
            <CircleUserRound onClick={() => router.push('/profile')} />
          ) : (
            <button onClick={() => setActiveModal('login')}>Войти</button>
          )}
          <Modal active={activeModal} setActive={setActiveModal}>
            {activeModal === 'login' && (
              <LoginModal setActive={setActiveModal} />
            )}
            {activeModal === 'checkCode' && (
              <CheckCode setActive={setActiveModal} />
            )}
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Header
