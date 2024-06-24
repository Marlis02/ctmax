import { Poppins, Roboto } from 'next/font/google'
import '@/styles/globals.scss'
import Header from '@/components/screens/Header/Header'
import Navbar from '@/components/screens/Navbar/Navbar'
import Footer from '@/components/screens/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CT MAX',
  description: 'ctmax',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const pathName = usePathname()
  // const isAdmin = pathName === '/admin' || pathName === '/admin/dash'

  // const toastOptions = {
  //   position: 'top-right',
  //   bottom: '20px',
  //   duration: 3000,
  //   theme: 'dark',
  //   style: {
  //     backgroundColor: '#36393F',
  //     color: '#F0F0F0',
  //     padding: '16px',
  //     borderRadius: '4px',
  //   },
  // }

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
        {/* </Toaster> */}
      </body>
    </html>
  )
}
