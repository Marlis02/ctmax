'use client'
import { useState } from 'react'

import styles from './dashLayout.module.scss'
import { usePathname } from 'next/navigation'
import { IconButton, Menu } from '@mui/material'
import { Logout } from '@mui/icons-material'

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className={styles.con}>
        <nav className={styles.nav}>
          <div className={styles.nav_block}>
            <IconButton className={styles.menu}>
              <Menu
                fontSize="large"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            </IconButton>
            {pathname === '/admin/dash' && <h2>Dashboard</h2>}
            {pathname === '/admin/dash/create_product ' && (
              <h2>Create product</h2>
            )}
          </div>
          <IconButton className={styles.logout}>
            <Logout fontSize="large" />
          </IconButton>
        </nav>
        <section className={styles.section}>{children}</section>
      </div>
      {/* <DashDrawer open={isSidebarOpen} setOpen={setIsSidebarOpen} /> */}
    </>
  )
}

export default ProfileLayout
