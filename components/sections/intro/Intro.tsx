import React from 'react'
import styles from './intro.module.css'

const Intro = () => {
  return (
    <section className="pt-32 py-16 sm:min-h-screen flex items-center sm:px-10 md:px-20 px-4 md:max-w-6xl m-auto">
      <div className="w-auto sm:w-10/12">
        <h6 className="text-accent font-bold font-mono sm:text-lg">Hi there! I'm</h6>
        <h1 className='text-accent text-4xl font-black sm:text-5xl md:text-6xl lg:text-8xl'>Johan Huaman.</h1>
        <span className="text-secondary text-3xl font-bold sm:text-5xl  md:text-6xl lg:text-7xl" title='description'>Software Developer.</span>
        <p title='content' className="text-secondary mt-2">I’m a recent computer science graduate with passion for programming. Seeking job opportunities to apply my skills and stay current with the latest technologies.</p>
      </div>
    </section>
  )
}

export default Intro