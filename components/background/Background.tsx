import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './background.module.css';

const Background = () => {
  const [size, setSize] = useState({width: 1000, height: 1800})

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    const _width = window.innerWidth-60
    const _height = _width*1800/1000
    setSize({width: _width, height: _height})
  }
  
  return (
    <div className={styles.container}>
      <Image 
        src="/images/background.svg"
        width={size.width}
        height={size.height}
        alt='background'
        priority
      />
    </div>
  )
}

export default Background