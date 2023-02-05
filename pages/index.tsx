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

      <main className="bg-white px-4 md:max-w-7xl m-auto">
        <Intro />

        <AboutMe />

        <MyProjects />
      </main>
    </Layout>
  )
}
