import Head from 'next/head'
import React from 'react'
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import styles from './layout.module.css';

interface Props{
  children: JSX.Element[]
}

export const siteTitle = 'Mi Portafolio';

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hi there! I'm Johan Wilfredo Huaman Mendoza and this is my Portfolio,(learning Next.js)"
        />
        <meta
          property="og:image"
          content={"/logo_scroll.svg"}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <NavBar />
      
      <div title='content' className={styles.content}>{children}</div>
      
      <Footer />
    </div>
  )
}

export default Layout