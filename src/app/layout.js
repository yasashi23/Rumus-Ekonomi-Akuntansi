import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './pages/nav/nav'
import Powered from './pages/powered'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bricalcu ekonomi',
  description: 'hitung rumus ekonomi',
}

export default function RootLayout({ children, style }) {
  return (
    <html lang="en">
      <body >
        <Nav/>
        <div className='flexPro mt-6 flex items-center justify-center flex-col all-container' style={style}>
          {children}
        </div>
      </body>
    </html>
  )
}
