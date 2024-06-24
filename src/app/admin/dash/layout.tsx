'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import styles from './dashLayout.module.scss'

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className={styles.con}>
      <nav className={styles.nav}>
        <Link href="/admin/dash/create_product">Create Product</Link>
        <Link href="/admin/dash">Dashboard</Link>
      </nav>
      <section className={styles.section}>{children}</section>
    </div>
  )
}

export default ProfileLayout
