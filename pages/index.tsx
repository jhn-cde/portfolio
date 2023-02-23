import Head from 'next/head'
import Intro from '@/components/sections/intro/Intro'
import Layout from '@/components/layout/Layout'
import AboutMe from '@/components/sections/aboutme/AboutMe'
import MyProjects from '@/components/sections/myprojects/MyProjects'
import GetInTouch from '@/components/sections/getintouch/GetInTouch'
import { InferGetStaticPropsType } from 'next'
import { getProjects } from 'lib/projects'
import store from 'store'
import { Provider } from 'react-redux'
import { getIntro } from 'lib/intro'

export default function Home({ intro, projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Johan Huaman | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" bg-primary-1 text-secondary dark:bg-primary-dark-3 dark:text-secondary-dark">

          <Intro {...intro.data}/>
          <AboutMe />
          <MyProjects projects={projects}/>
          <GetInTouch />
          
        </main>
      </Layout>
    </Provider>
  )
}

export const getStaticProps = async () => {
  const projects = getProjects();
  const intro = getIntro();
  
  return {
    props: {
      projects,
      intro
    }
  };
}
