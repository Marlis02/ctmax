'use client'
import Link from 'next/link'
import styles from './header.module.scss'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import Modal from '@/components/ui/Modals/Modal'
import LoginModal from '@/components/ui/Modals/AuthModal/LoginModal'
import CheckCode from '@/components/ui/Modals/AuthModal/CheckCode/CheckCode'
import MenuIcon from '@mui/icons-material/Menu'
import { useModalStore } from '@/store/modalStore'
import { Menu } from '@mui/material'
import { useAuthStore } from '@/store/authStore'
import { PermIdentity, ViewStream } from '@mui/icons-material'

const Header = () => {
  //store----------------------------
  const user = useAuthStore((state) => state.user)
  const { modal, setModal } = useModalStore()
  const router = useRouter()
  //other----------------------------------------

  const pathname = usePathname()
  const active =
    pathname === '/check' ||
    pathname === '/admin' ||
    pathname === '/admin/dash' ||
    pathname === '/admin/dash/create_product'

  return (
    <>
      <header className={active ? styles.header_none : styles.header}>
        <div className={styles.header__1}>
          <div className={styles.header__lang}>
            <Image
              src="/icons/language.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <span>ru</span>
          </div>
          <div className={styles.header__links}>
            <Link href="/about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
        </div>
        <div className={styles.header__2}>
          <div className={styles.header__block1}>
            <Image
              src="/icons/main_logo.svg"
              alt="gg"
              width={180}
              height={80}
            />
            <div className={styles.header__delivery}>
              <p>Доставка по Бишкеку</p>
              <p>
                35мин - 4.77{' '}
                <Image
                  src="/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              </p>
            </div>
            <div className={styles.header__phone}>
              <p>0(555)-555-555</p>
              <p>Звонок бесплатный</p>
            </div>
          </div>
          <div className={styles.header__block2}>
            <Image src="/icons/coin.svg" alt="logo" width={20} height={20} />
            {user.userId ? (
              <Image
                src="/icons/ava.svg"
                alt="logo"
                width={30}
                height={30}
                onClick={() => router.push('/profile')}
              />
            ) : (
              <button onClick={() => setModal('login')}>Войти</button>
            )}

            <Modal active={modal} setActive={setModal}>
              {modal === 'login' && <LoginModal setModal={setModal} />}
              {modal === 'checkCode' && <CheckCode setModal={setModal} />}
            </Modal>
          </div>
        </div>
        <div className={styles.header__mobile}>
          <Image
            className={styles.header__modile_logo}
            src="/icons/main_logo.svg"
            alt="gg"
            width={130}
            height={80}
          />
          <MenuIcon className={styles.header__modile_menu} fontSize="large" />
        </div>
      </header>
    </>
  )
}

export default Header
