import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.scss'
import Header from '@/components/screens/Header/Header'
import Nav from '@/components/screens/Nav/Nav'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CTMAX',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer position="top-right" />
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  )
}
