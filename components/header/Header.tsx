import React, { useEffect, useState } from 'react'
import styles from './header.module.css';

const Header = () => {
  const [navbarScroll, setNavbarScroll] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])
  
  const handleScroll = () => {
    setNavbarScroll(window.scrollY>=70)
  }
  return (
    <header title='header' className={navbarScroll?styles.header_scroll:styles.header}
    >
      <p>header</p>
    </header>
  )
}

export default Header