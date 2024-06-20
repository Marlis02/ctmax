'use client'
import { navLinks } from '@/data/data'
import { useCartStore, useOpenCart } from '@/store/cartStore'
import styles from '@/styles/components/nav.module.scss'
import Cart from '../Cart/Cart'
const Nav = () => {
  const { open, setOpen } = useOpenCart()
  const { items } = useCartStore()

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__links}>
          {navLinks.map((link: any) => (
            <p key={link.id}>{link.title}</p>
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

export default Nav
