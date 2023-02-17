import Head from 'next/head'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from 'store';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';
import Social from './social/Social';

interface Props{
  children: JSX.Element[]
}

export const siteTitle = 'Mi Portafolio';

const Layout = ({ children }: Props) => {
  const darkTheme = useSelector(selectTheme);
  
  return (
    <div className={darkTheme?'dark':''}>
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
      
      <div className="tracking-tight">{children}</div>
      
      <Footer />

      <Social />

    </div>
  )
}

export default Layout