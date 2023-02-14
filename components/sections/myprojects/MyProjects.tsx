import { getStaticProps } from '@/pages/index'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import styles from './myprojects.module.css'
import Project from './project/Project'

const MyProjects = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <section className='sm:min-h-screenflex items-center' id={'myprojects'}>
      <div className='md:max-w-6xl m-auto px-4 pt-12 sm:px md:px-20'>
        <h2>
          Some Of My Projects
        </h2>
        <div className='my-12'>
          {
            projects.map((project, index) => {
              const {title, description, p_type, img, techs} = project.data
              const type = index%2 ? 'l' : 'r'
              return(
                <div key={index} className='mb-16'>
                  <Project title={title} description={description} p_type={p_type} img={img} techs={techs}  type={type}/>
                </div>  
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default MyProjects