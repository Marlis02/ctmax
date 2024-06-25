'use client'
import { navLinks } from '@/data/data'
import { useCartStore, useOpenCart } from '@/store/cartStore'
import styles from './navbar.module.scss'
import Cart from '../Cart/Cart'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useCategoryStore } from '@/store/categoriesStore'
import { useScrollStore } from '@/store/scrollStore'

const Navbar = () => {
  const { open, setOpen } = useOpenCart()
  const pathname = usePathname()
  const { items } = useCartStore()
  const router = useRouter()
  //store
  const categories = useCategoryStore((state) => state.categories)
  const getCategories = useCategoryStore((state) => state.getCategories)
  const scrollToCategory = useScrollStore((state) => state.scrollToCategory)
  const setCategoryRef = useScrollStore((state) => state.setCategoryRef)

  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    if (categories.length <= 0) {
      getCategories()
    }
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
        <div className={styles.nav__con}>
          <div
            className={isSticky ? styles.nav__links_active : styles.nav__links}
          >
            <Image
              src="/icons/main_logo.svg"
              alt="main_logo"
              className={isSticky ? styles.nav__logo_active : styles.nav__logo}
              width={100}
              height={50}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            {categories.map((link: any) => (
              <p
                key={link.id}
                className={styles.nav__link}
                onClick={() => handleCategoryClick(link.title)}
              >
                {link.title}
              </p>
            ))}
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
      {open && <Cart setOpen={setOpen} />}
    </>
  )
}

export default Navbar
