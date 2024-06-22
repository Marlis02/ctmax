import { Poppins } from 'next/font/google'
import '@/styles/globals.scss'
import Header from '@/components/screens/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/screens/Navbar/Navbar'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const pathName = usePathname()
  // const isAdmin = pathName === '/admin' || pathName === '/admin/dash'

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer position="top-right" />
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
