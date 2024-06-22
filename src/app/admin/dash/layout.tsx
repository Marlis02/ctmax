'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div>
      <nav>
        <Link href="/admin/dash/create_product">Create Product</Link>
        <br />
        <Link href="/admin/dash">Dashboard</Link>
      </nav>
      <section>{children}</section>
    </div>
  )
}

export default ProfileLayout
