import React from 'react'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.menu}>
        menu
      </div>
    </div>
  )
}

export default NavBar