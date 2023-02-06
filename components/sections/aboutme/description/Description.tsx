import React from 'react'
import styles from './description.module.css'

const Description = () => {
  return (
    <div className=''>
      <p className="text-primary-light lg:text-secondary">
        I'm from the National University San Antonio Abad del Cusco. I specialize in <span className="text-primary-light lg:text-secondary" style={{fontWeight :'600'}}>software development</span> and <span className="text-primary-light lg:text-secondary" style={{fontWeight :'600'}}>machine learning</span> and have gained valuable experience through participating in <span className="text-primary-light lg:text-secondary" style={{fontWeight :'600'}}>coding competitions</span>.
      </p>
      <p className="text-primary-light lg:text-secondary">
        I am highly motivated with a passion for technology and a strong desire to learn and grow as a professional. I am a fast learner, adaptable and always willing to take on new challenges.
      </p>
      <p className="text-secondary hidden lg:block">
        As a recent graduate, I am eager to start my professional career and utilize the skills and knowledge I have acquired during my studies. I am open to remote or on-site opportunities and am willing to work from anywhere.
      </p>
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