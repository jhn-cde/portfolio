import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
interface Props{
  scroll: boolean
}
const NavBar = ({scroll}: Props) => {
  const [logo, setLogo] = useState('/images/logo.svg')
  useEffect(() => {
    if(scroll)
      setLogo('/images/logo_scroll.svg')
    else
      setLogo('/images/logo.svg')
  }, [scroll])
  
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={logo}
          width={50}
          height={50}
          alt='plan de estudios'
          className={scroll?styles.scroll:styles.img}
        />
      </div>
      <div className={styles.menu}>
        menu
      </div>
    </div>
  )
}

export default NavBar