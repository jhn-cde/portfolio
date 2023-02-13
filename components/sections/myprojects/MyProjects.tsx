import React from 'react'
import styles from './myprojects.module.css'
import ProjectA from './project/ProjectA'
import ProjectB from './project/ProjectB'

const MyProjects = () => {
  return (
    <section className='sm:min-h-screenflex items-center' id={'myprojects'}>
      <div className='md:max-w-6xl m-auto px-4 pt-12 sm:px md:px-20'>
        <h2>
          Some Of My Projects
        </h2>
        <div className='my-12'>
          <div className='mb-16'>
            <ProjectA />
          </div>
          <div className='mb-16'>
            <ProjectB />
          </div>
          <div>
            <ProjectA />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjects