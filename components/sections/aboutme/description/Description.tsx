import React from 'react'
import { SiTypescript, SiCplusplus, SiReact, SiPython, SiLinux, SiGit } from 'react-icons/si'

const Description = () => {
  return (
    <div className=''>
      <p className='mb-4'>
        I'm from the National University San Antonio Abad del Cusco. I specialize in <span style={{fontWeight :'600'}}>software development</span> and <span style={{fontWeight :'600'}}>machine learning</span> and have gained valuable experience through participating in <span style={{fontWeight :'600'}}>coding competitions</span>.
      </p>
      <p className='mb-4'>
        I am highly motivated with a passion for technology and a strong desire to learn and grow as a professional. I am a fast learner, adaptable and always willing to take on new challenges.
      </p>
      <p className="hidden mb-4 lg:block">
        As a recent graduate, I am eager to start my professional career and utilize the skills and knowledge I have acquired during my studies. I am open to remote or on-site opportunities and am willing to work from anywhere.
      </p>
      <h3 className='text-accent-dark'>Core Skills</h3>
      <div className='flex flex-wrap justify-around text-6xl'>
        <div className='text-blue-400 m-4'>
          <SiReact />
        </div>
        <div className='text-[#3178C6] m-4'>
          <SiTypescript />
        </div>
        <div className='text-gray-400 dark:text-white m-4'>
          <SiPython />
        </div>
        <div className='text-blue-600 m-4'>
          <SiCplusplus />
        </div>
        <div className='text-black dark:text-white p-4'>
          <SiLinux className=' '/>
        </div>
        <div className='text-[#F14E32] m-4'>
          <SiGit />
        </div>
      </div>
      {/* <p className="text-primary-light lg:text-secondary">
        Technologies I've been working with recently:
      </p>
      <div className="text-accent lg:text-accent-dark flex">
        <ul className="mr-12">
          <li><span>_</span> TypeScript</li>
          <li><span>_</span> React</li>
          <li><span>_</span> Express JS</li>
        </ul>
        <ul>
          <li><span>_</span> Python</li>
          <li><span>_</span> C++</li>
          <li><span>_</span> Linux</li>
        </ul>
      </div> */}
    </div>
  )
}

export default Description
