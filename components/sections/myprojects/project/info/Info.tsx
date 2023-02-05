import React from 'react'
import styles from './info.module.css'

const Info = () => {
  return (
    <div>
      <div className={styles.project_type}>
          <h4>Personal Project</h4>
        </div>
        <div className={styles.title}>
          <h3>Plan de estudios</h3>
        </div>
        
        <div className={styles.description}>
          <p>A web application build with React, to helps UNSAAC Computer Science students to check their progress and plan for graduation</p>
        </div>
        <div className={styles.techs}>
          {['React', 'JavaScript', 'CSS'].map(item => <p key={item}>{item}</p>)}
        </div>
    </div>
  )
}

export default Info