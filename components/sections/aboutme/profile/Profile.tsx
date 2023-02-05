import Image from 'next/image'
import React from 'react'
import styles from './profile.module.css'
const Profile = () => {
  return (
    <div className={styles.container}>
      <Image
        src={'/images/profile.png'}
        width={500}
        height={441}
        alt='johan photo'
        className={styles.img}
      />
    </div>
  )
}

export default Profile