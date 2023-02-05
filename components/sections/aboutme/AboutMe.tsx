import React from 'react'
import styles from './aboutme.module.css'
import Description from './description/Description'
import Profile from './profile/Profile'

const AboutMe = () => {
  return (
    <section className='sm:min-h-screen bg-secondary lg:bg-secondary-light lg:bg-transparent'>
      <div className="md:max-w-7xl m-auto px-4 py-12 lg:flex items-center sm:px md:px-20">
        <div className='mb-8 lg:mb-0 lg:absolute'>
          <Profile />
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