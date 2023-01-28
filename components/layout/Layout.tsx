import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from './layout.module.css';

interface Props{
  children: JSX.Element[]
}

export const siteTitle = 'Mi Portafolio';

const Layout = ({ children }: Props) => {
  const [navbarScroll, setNavbarScroll] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1000)
  const [windowHeigth, setWindowHeigth] = useState(1800)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
  }, [])
  
  const handleScroll = () => {
    setNavbarScroll(window.scrollY>=70)
  }

  const handleResize = () => {
    const _width = window.innerWidth-60
    const _height = _width*1800/1000
    setWindowWidth(_width)
    setWindowHeigth(_height)
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My Portfolio using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header title='header' className={navbarScroll?styles.header_scroll:styles.header_container}><p>header</p></header>
      
      <div title='content' className={styles.content}>{children}</div>
      
      <footer className={styles.footer} title='footer'></footer>

      <div className={styles.image_container}>
        <Image 
          src="/images/background.svg"
          width={windowWidth}
          height={windowHeigth}
          alt='background'
          priority
        />
      </div>

    </div>
  )
}

export default Layout