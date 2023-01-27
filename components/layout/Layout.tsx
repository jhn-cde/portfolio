import Head from 'next/head'
import React from 'react'
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

      <header title='header' className={styles.header}><p>header</p></header>
      <div title='content'>{children}</div>
      <footer title='footer'></footer>

    </div>
  )
}

export default Layout