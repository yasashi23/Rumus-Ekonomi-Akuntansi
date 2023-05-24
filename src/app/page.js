import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'
import DeretHitung from './pages/ekonomi/deretHitung/DeretHitung'
import DeretUkur from './pages/ekonomi/deretUkur/deretUkur'
import FungsiPermintaan from './pages/ekonomi/fungsiPermintaan/fungsiPermintaan'
import FungsiPenawaran from './pages/ekonomi/fungsiPenawaran/fungsiPenawaran'
import Powered from './pages/powered'

export default function Home() {
  const DrtH = {
    height:'100%',
    margin: '0px 0px 20vh 0px'
  }
  const heightStyle ={
    height: '100%',
    margin: '0px 0px 20vh 0px'
  }
  const root = {
  }
  return (
    <RootLayout style={root}>
      <DeretHitung style={DrtH}/>
      <DeretUkur style={heightStyle}/>
      <FungsiPermintaan style={heightStyle}/>
      <FungsiPenawaran style={heightStyle}/>
      <Powered/>
    </RootLayout>
  )
}
