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
        <div className={styles.projects}>
          <div className={styles.project}>
            <Project />
          </div>
          <div className={styles.project}>
            <Project />
          </div>
          <div className={styles.project}>
            <Project />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjects