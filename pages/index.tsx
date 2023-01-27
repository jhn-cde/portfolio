import Head from 'next/head'

import styles from '@/pages/index.module.css'
import Intro from '@/components/intro/Intro'
import Layout from '@/components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Johan Huaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>
    </Layout>
  )
}
