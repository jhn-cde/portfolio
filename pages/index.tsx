import Head from 'next/head'
import Intro from '@/components/sections/intro/Intro'
import Layout from '@/components/layout/Layout'
import AboutMe from '@/components/sections/aboutme/AboutMe'
import MyProjects from '@/components/sections/myprojects/MyProjects'
import GetInTouch from '@/components/sections/getintouch/GetInTouch'
import { InferGetStaticPropsType } from 'next'
import { getProjects } from 'lib/projects'

export default function Home({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Head>
        <title>Johan Huaman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-white to-primary-light">

        <Intro />
        <AboutMe />
        <MyProjects projects={projects}/>
        <GetInTouch />
        
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allProjects = getProjects();
  
  return {
    props: {
      projects: allProjects, 
    }
  };
}
