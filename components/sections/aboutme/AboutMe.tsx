import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'
import Profile from './profile/Profile'

const AboutMe = () => {
  return (
    <section className={styles.section}>
    <div className={styles.container + ' container'}>
      <div className={styles.profile}>
        <Profile />
      </div>

      <div className={styles.description}>
        <h2 className={styles.title} id={'aboutme'}>
          About Me
        </h2>
        <Description />
      </div>
      </div>
    </section>
  )
}

export default AboutMe