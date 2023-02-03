import React from 'react'
import styles from './description.module.css'

const Description = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        I'm from the National University San Antonio Abad del Cusco. I specialize in <span style={{fontWeight :'600'}}>software development</span> and <span style={{fontWeight :'600'}}>machine learning</span> and have gained valuable experience through participating in <span style={{fontWeight :'600'}}>coding competitions</span>.
      </p>
      <p className={styles.text}>
        I am highly motivated with a passion for technology and a strong desire to learn and grow as a professional. I am a fast learner, adaptable and always willing to take on new challenges.
      </p>
      <p className={styles.text+' '+styles.hide}>
        As a recent graduate, I am eager to start my professional career and utilize the skills and knowledge I have acquired during my studies. I am open to remote or on-site opportunities and am willing to work from anywhere.
      </p>
      <p className={styles.text}>
        Technologies I've been working with recently:
      </p>
      <div className={styles.list_container}>
        <div className={styles.list}>
          <ul>
            <li><span className={styles.item}>_</span> TypeScript</li>
            <li><span className={styles.item}>_</span> React</li>
            <li><span className={styles.item}>_</span> Express JS</li>
          </ul>
        </div>

        <div className={styles.list}>
          <ul>
            <li><span className={styles.item}>_</span> Python</li>
            <li><span className={styles.item}>_</span> C++</li>
            <li><span className={styles.item}>_</span> Linux</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Description