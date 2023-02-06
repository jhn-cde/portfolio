import Image from 'next/image'
import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'

const AboutMe = () => {
  return (
    <section className='sm:min-h-screen bg-secondary lg:bg-secondary-light flex items-center'>
      <div className="md:max-w-7xl m-auto px-4 py-12 lg:py-0 lg:flex items-center sm:px md:px-20">
        <div className='mb-8 lg:mb-0 lg:absolute left-0 lg:min-h-screen'>
          <Image
            src={'/images/profile.png'}
            width={500}
            height={441}
            alt='johan photo'
            className='w-auto lg:min-h-screen'
          />
        </div>

        <div className="lg:w-6/12 ml-auto lg:p-6 bg-opacity-0 lg:bg-secondary-light lg:bg-opacity-70 lg:backdrop-blur-md">
          <h2 id={'aboutme'}>
            About Me
          </h2>
          <Description />
        </div>
      </div>
    </section>
  )
}

export default AboutMe