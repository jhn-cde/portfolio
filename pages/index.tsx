import Head from 'next/head'
import Intro from '@/components/intro/Intro'
import Layout from '@/components/layout/Layout'
import AboutMe from '@/components/aboutme/AboutMe'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Johan Huaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />

        <AboutMe />
      </main>
    </Layout>
  )
}
