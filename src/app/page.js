import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'
import DeretHitung from './pages/ekonomi/deretHitung/DeretHitung'
import DeretUkur from './pages/ekonomi/deretUkur/deretUkur'
import FungsiPermintaan from './pages/ekonomi/fungsiPermintaan/fungsiPermintaan'
import FungsiPenawaran from './pages/ekonomi/fungsiPenawaran/fungsiPenawaran'

export default function Home() {
  return (
    <RootLayout>
      <DeretHitung/>
      <DeretUkur/>
      <FungsiPermintaan/>
      <FungsiPenawaran/>
    </RootLayout>
  )
}
