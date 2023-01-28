import Image from 'next/image'
import React from 'react'
import styles from './background.module.css';

const Background = () => {
  
  return (
    <div className={styles.container}>
      <Image 
        src="/images/background.svg"
        width={1000}
        height={1800}
        alt='background'
        priority
        className={styles.img}
      />
    </div>
  )
}

export default Background