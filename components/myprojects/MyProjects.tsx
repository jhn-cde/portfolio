import React from 'react'
import styles from './myprojects.module.css'
import Project from './project/Project'

const MyProjects = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container + ' container'}>
        <div className={styles.title_container}>
          <h2 className={styles.title} id={'myprojects'}>
            Some Of My Projects
          </h2>
        </div>
        <div className="projects">
          <Project />
        </div>
      </div>
    </section>
  )
}

export default MyProjects