import React from 'react'
import styles from './intro.module.css'

const Intro = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <h6 className={styles.iam}>Hi there! I'm</h6>
            <h1 className={styles.title}>Johan Huaman.</h1>
            <h2 className={styles.subtitle} title='description'>Software Developer.</h2>
            <div className={styles.text_container}>
              <p title='content'>I’m a recent computer science graduate with passion for programming. Seeking job opportunities to apply my skills and stay current with the latest technologies.</p>
            </div>
          </div>
        </div>
        <div className={styles.square}></div>
      </div>
    </section>
  )
}

export default Intro