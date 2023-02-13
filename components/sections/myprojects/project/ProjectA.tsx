import Image from 'next/image'
import React from 'react'
import styles from './project.module.css'

const ProjectA = () => {
  return (
    <div className='overflow-hidden relative flex items-center sm:h-60 sm:mx-28 md:mx-0 md:h-96 drop-shadow-xl'>
      <div className="w-full relative z-0 pl-0 md:absolute md:w-6/12">
        <Image
          src={'/images/plan_de_estudios.png'}
          width={900}
          height={600}
          alt='johan photo'
          className='object-contain w-auto h-auto md:w-full md:h-full p-6'
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backdrop-blur-0 hover:backdrop-blur-0 bg-opacity-30 bg-secondary hover:bg-transparent"></div>
      </div>
      <div className='absolute z-10 top-0 left-0 w-full h-full flex items-center ml-auto bg-opacity-80 bg-secondary-light px-3 sm:px-16 sm:bg-opacity-25 sm:backdrop-blur-sm md:w-8/12 md:relative md:px-0 md:bg-transparent md:backdrop-blur-0 lg:items-end lg:mb-10 rounded-md'>
        <div className='md:text-right'>
          <h4 className='md:px-4 lg:px-10'>Personal Project</h4>
          <h3 className='md:px-4 lg:px-10 pb-2'>Plan de estudios</h3>
          <p className='md:p-6 lg:pl-20 lg:px-10 md:bg-secondary md:text-primary rounded-md'>A web application build with React, to helps UNSAAC Computer Science students to check their progress and plan for graduation</p>
          <div className='md:p-4 lg:px-10 flex justify-end'>
            {['React', 'JavaScript', 'CSS'].map(item => <p key={item} className='pl-6 text-accent'>{item}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectA