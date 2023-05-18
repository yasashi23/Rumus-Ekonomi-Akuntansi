import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'
import DeretUkur from './pages/ekonomi/deretukur/DeretUkur'

export default function Home() {
  return (
    <RootLayout>
      <DeretUkur/>

    </RootLayout>
  )
}
