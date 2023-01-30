import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'
import Profile from './profile/Profile'

const AboutMe = () => {
  return (
    <section className={styles.section}>
      <div className={styles.profile}>
        <Profile />
      </div>
      <div className={styles.container + ' container'}>
        <div className={styles.description}>
          <div>
            <div className={styles.title_container}>
              <h2 className={styles.title}>About Me</h2>
            </div>
            <Description />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe