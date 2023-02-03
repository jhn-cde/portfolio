import Image from 'next/image'
import React from 'react'
import styles from './img.module.css'

const Img = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/images/plan_de_estudios.png'}
        width={450}
        height={300}
        alt='plan de estudios'
        className={styles.img}
      />
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Img