import React from 'react'
import styles from './myprojects.module.css'

const MyProjects = () => {
  return (
    <section>
      <div className={styles.container + ' container'}>
        <div className={styles.title_container}>
          <h2 className={styles.title} id={'myprojects'}>
            Some Of My Projects
          </h2>
        </div>
      </div>
    </section>
  )
}

export default MyProjects