import React, { useEffect, useState } from 'react'
import styles from './header.module.css';
import NavBar from './navbar/NavBar';

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
      <NavBar scroll={navbarScroll}/>
    </header>
  )
}

export default Header