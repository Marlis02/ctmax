'use client'
import { navLinks } from '@/data/data'
import { useCartStore, useOpenCart } from '@/store/cartStore'
import styles from './navbar.module.scss'
import Cart from '../Cart/Cart'
import { usePathname, useRouter } from 'next/navigation'
import { act, useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useScrollStore } from '@/store/scrollStore'
import { LocalMall } from '@mui/icons-material'
import { useCategoryStore } from '@/store/categoriesStore'

const Navbar = () => {
  const { open, setOpen } = useOpenCart()
  const pathname = usePathname()
  const { items } = useCartStore()
  const router = useRouter()
  //store
  const navCategories = useCategoryStore((state) => state.navCategories)
  const getNavCategories = useCategoryStore((state) => state.getNavCategories)
  const scrollToCategory = useScrollStore((state) => state.scrollToCategory)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    getNavCategories()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 186)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryClick = (categoryTitle: any) => {
    if (pathname === '/') {
      scrollToCategory(categoryTitle, -100)
    } else {
      scrollToCategory(categoryTitle, -100)
      router.push('/')
    }
  }
  const active =
    pathname === '/check' ||
    pathname === '/admin' ||
    pathname === '/admin/dash' ||
    pathname === '/admin/dash/create_product'

  return (
    <>
      <nav className={active ? styles.nav_none : styles.nav}>
        <div className={styles.nav__block}>
          <div className={styles.nav__links_con}>
            <Image
              src="/icons/main_logo.svg"
              alt="main_logo"
              className={isSticky ? styles.nav__logo_active : styles.nav__logo}
              width={100}
              height={50}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />

            <div
              className={
                isSticky ? styles.nav__links_active : styles.nav__links
              }
            >
              {navCategories.map((link: any) => {
                // console.log(link)

                return (
                  <p
                    key={link.categoryId}
                    className={styles.nav__link}
                    onClick={() => handleCategoryClick(link.name)}
                  >
                    {link.name}
                  </p>
                )
              })}
            </div>
          </div>
          {items.length < 0 ? (
            <button onClick={() => setOpen()} className={styles.nav__cart_btn}>
              Корзина
            </button>
          ) : (
            <button onClick={() => setOpen()} className={styles.nav__cart_btn}>
              Корзина - {items.length}
            </button>
          )}
        </div>
      </nav>

      <button onClick={() => setOpen()} className={styles.nav__cart_btn_mobile}>
        <LocalMall fontSize="large" className={styles.icon} />
        <span className={styles.count}>{items.length}</span>
      </button>

      {open && <Cart open={open} setOpen={setOpen} />}
    </>
  )
}

export default Navbar
