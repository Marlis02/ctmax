'use client'
import { navLinks } from '@/data/data'
import { useCartStore, useOpenCart } from '@/store/cartStore'
import styles from '@/styles/components/navbar.module.scss'
import Cart from '../Cart/Cart'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import useProductsStore from '@/store/productsStore'
import Image from 'next/image'
import { useCategoryStore } from '@/store/categoriesStore'
import { useScrollStore } from '@/store/scrollStore'

const Navbar = () => {
  const { open, setOpen } = useOpenCart()
  const pathname = usePathname()
  const { items } = useCartStore()
  const [showLogo, setShowLogo] = useState(false)
  //store
  const categories = useCategoryStore((state) => state.categories)
  const getCategories = useCategoryStore((state) => state.getCategories)
  const scrollToCategory = useScrollStore((state) => state.scrollToCategory)

  // const { categories, getCategories } = useCategoryStore()

  useEffect(() => {
    getCategories()
    const handleScroll = () => {
      setShowLogo(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const active =
    pathname === '/check' ||
    pathname === '/admin' ||
    pathname === '/admin/dash' ||
    pathname === '/admin/dash/create_product'

  console.log(active)

  return (
    <>
      <nav className={active ? styles.nav_none : styles.nav}>
        <div className={styles.nav__links}>
          {categories.map((link: any) => (
            <p key={link.id} onClick={() => scrollToCategory(link.title, -100)}>
              {link.title}
            </p>
          ))}
        </div>
        {items.length < 0 ? (
          <button onClick={() => setOpen()} className={styles.nav__cart_btn}>
            Корзина - {items.length}
          </button>
        ) : (
          <button onClick={() => setOpen()} className={styles.nav__cart_btn}>
            Корзина - {items.length}
          </button>
        )}
      </nav>
      {open && <Cart setOpen={setOpen} />}
    </>
  )
}

export default Navbar
