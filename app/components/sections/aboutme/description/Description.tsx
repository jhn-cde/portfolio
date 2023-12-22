import { getTechIcon } from '@/lib/getIcon'
import React from 'react'

interface Props{
  skills: string[],
  content: string
}

const Description = ({skills, content}: Props) => {
  return (
    <div className=''>
      <div 
        className='space-y-4 mb-4'
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <h3 className='text-accent-dark'>Core Skills</h3>
      <div className='flex flex-wrap justify-around text-6xl'>
        {skills.map(skill => 
          <div key={skill} className='text-secondary-1  dark:text-secondary-dark-1 m-4'>
            {getTechIcon(skill)}
          </div>)
        }
      </div>
    </div>
  )
}

export default Description
