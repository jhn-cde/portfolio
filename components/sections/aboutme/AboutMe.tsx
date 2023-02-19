import Image from 'next/image'
import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'

const AboutMe = () => {
  return (
    <section className='relative sm:min-h-screen bg-primary-2 flex items-center lg:px-4 lg:py-12 dark:bg-primary-dark-2' id={'aboutme'}>
      <div className="md:max-w-6xl m-auto lg:py-0 lg:flex items-center sm:px md:px-20">
        <div className='mb-8 lg:mb-0 lg:absolute left-0 lg:h-full'>
          <Image
            src={'/profile.webp'}
            width={1000}
            height={833}
            alt='johan photo'
            className='w-auto lg:h-full'
            priority
          />
        </div>

        <div className="px-4 pb-12 lg:w-6/12 ml-auto rounded-md lg:p-6 bg-opacity-0 lg:bg-primary-2 lg:bg-opacity-70 lg:backdrop-blur-md lg:dark:bg-primary-dark-2 lg:dark:bg-opacity-60 lg:dark:backdrop-blur-sm">
          <h2 className='text-4xl text-center mb-2 md:mb-4 md:text-4xl lg:text-6xl'>
            About Me
          </h2>
          <Description />
        </div>
      </div>
    </section>
  )
}

export default AboutMe