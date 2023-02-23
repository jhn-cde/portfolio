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
import { getAboutMe } from 'lib/aboutme'
import { getInTouch } from 'lib/getInTouch'

export default function Home({ intro, aboutme, projects, getintouch }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Johan Huaman | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className=" bg-primary-1 text-secondary dark:bg-primary-dark-3 dark:text-secondary-dark">

          <Intro {...intro.data}/>
          <AboutMe {...aboutme}/>
          <MyProjects projects={projects}/>
          <GetInTouch {...getintouch}/>
          
        </main>
      </Layout>
    </Provider>
  )
}

export const getStaticProps = async () => {
  const projects = getProjects();
  const intro = getIntro();
  const aboutme = await getAboutMe();
  const getintouch = await getInTouch()

  return {
    props: {
      projects,
      intro,
      aboutme,
      getintouch
    }
  };
}
