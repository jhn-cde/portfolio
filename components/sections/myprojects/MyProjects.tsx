import { getStaticProps } from '@/pages/index'
import type { InferGetStaticPropsType } from 'next'
import React, { useState } from 'react'
import Project from './project/Project'

const MyProjects = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [more, setMore] = useState(false)

  return (
    <section className='sm:min-h-screenflex items-center' id={'myprojects'}>
      <div className='md:max-w-6xl m-auto px-4 pt-12 sm:px md:px-20'>
        <h2 className='text-4xl text-center my-4 lg:my-10 lg:text-6xl'>
          My Projects
        </h2>
        <div className='mb-0'>
          {
            projects.map((project, index) => {
              const {title, description, p_type, img, techs, gh, url} = project.data
              const type = index%2 ? 'l' : 'r'
              return(
                <div key={index} className={'transition duration-500 overflow-hidden'.concat(!more && index >= 3?' h-0 opacity-0': ' opacity-100 mb-16 h-auto')}>
                  <Project title={title} description={description} p_type={p_type} img={img} techs={techs} gh={gh} url={url} type={type}/>
                </div>  
              )
            })
          }
        </div>
        <div className='flex justify-center m-auto mb-12'>
          <button 
            className='rounded-md border-2 border-accent-dark text-accent-dark px-4 py-2 min-h-full w-36'
            onClick={()=>{setMore(!more)}}
          >{more?'Show less':'Show more'}</button>
        </div>
      </div>
    </section>
  )
}

export default MyProjects