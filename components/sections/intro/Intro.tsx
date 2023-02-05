import React from 'react'
import styles from './intro.module.css'

const Intro = () => {
  return (
    <section className="pt-32 py-12 sm:min-h-screen flex items-center sm:px-10 md:px-20 px-4 md:max-w-7xl m-auto">
      <div className="w-auto sm:w-10/12">
        <h6 className="text-accent sm:text-lg font-bold font-mono">Hi there! I'm</h6>
        <h1 className='text-accent text-2xl sm:text-5xl font-black'>Johan Huaman.</h1>
        <span className="text-secondary text-2xl sm:text-5xl font-bold" title='description'>Software Developer.</span>
        <p title='content' className="text-secondary">I’m a recent computer science graduate with passion for programming. Seeking job opportunities to apply my skills and stay current with the latest technologies.</p>
      </div>
      <div className="w-1/2 h-3/4 border-10 bg-secondary opacity-80"/>
    </section>
  )
}

export default Intro