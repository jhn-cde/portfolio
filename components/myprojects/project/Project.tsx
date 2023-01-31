import React from 'react'
import Img from './img/Img'
import Info from './info/Info'
import styles from './project.module.css'

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Img/>
      </div>
      <div className={styles.info_container}>
        <Info />
      </div>
    </div>
  )
}

export default Project