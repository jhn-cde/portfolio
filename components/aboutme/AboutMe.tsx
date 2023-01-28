import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'
import Profile from './profile/Profile'

const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>About Me</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <Profile />
        </div>
        <div className={styles.description}>
          <Description />
        </div>
      </div>
    </section>
  )
}

export default AboutMe