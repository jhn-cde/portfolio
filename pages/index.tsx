import Head from 'next/head'
import Intro from '@/components/sections/intro/Intro'
import Layout from '@/components/layout/Layout'
import AboutMe from '@/components/sections/aboutme/AboutMe'
import MyProjects from '@/components/sections/myprojects/MyProjects'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Johan Huaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-white to-primary-light">
        <Intro />

        <AboutMe />

        <MyProjects />
      </main>
    </Layout>
  )
}
