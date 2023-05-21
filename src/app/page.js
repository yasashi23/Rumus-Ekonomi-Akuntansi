import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'
import DeretHitung from './pages/ekonomi/deretHitung/DeretHitung'
import DeretUkur from './pages/ekonomi/deretUkur/deretUkur'

export default function Home() {
  return (
    <RootLayout>
      <DeretHitung/>
      <DeretUkur/>
    </RootLayout>
  )
}
