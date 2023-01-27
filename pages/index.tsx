import Head from 'next/head'

import styles from '@/pages/index.module.css'
import Intro from '@/components/intro/Intro'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johan Huaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>
    </div>
  )
}
