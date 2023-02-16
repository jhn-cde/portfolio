import Image from 'next/image'
import React from 'react'
import styles from './project.module.css'

interface Props{
  title: String,
  description: String,
  p_type: String,
  techs: String,
  img: String,
  type: 'r'|'l'
}

const Project = ({title, description, p_type, techs, img, type}: Props) => {
  return (
    <div className='overflow-hidden flex items-center sm:h-60 sm:mx-28 md:mx-0 md:h-96 drop-shadow-xl bg-secondary rounded-md py-6 md:py-0 md:bg-transparent'>
      <div className={"hidden md:block w-full relative z-0 md:absolute overflow-hidden md:w-6/12".concat(type==='l' ? ' md:right-0':'')}>
        <Image
          src={'/'+img}
          width={900}
          height={600}
          alt='johan photo'
          className='object-contain w-auto h-auto md:w-full md:h-full p-1'
        />
        <div className="bg-secondary-light absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed backdrop-blur-sm hover:backdrop-blur-none rounded-md bg-opacity-60 hover:bg-transparent duration-500   dark:backdrop-blur-sm dark:bg-opacity-60 dark:hover:bg-opacity-0 dark:hover:backdrop-blur-0 dark:bg-secondary"></div>
      </div>
      <div className={'relative z-10 top-0 left-0 w-full h-full flex items-center bg-opacity-80 px-3 sm:px-16 sm:bg-opacity-25 sm:backdrop-blur-sm md:w-8/12  md:px-0 md:bg-transparent md:backdrop-blur-0 lg:items-end lg:mb-10 rounded-md'.concat(type==='r' ? ' ml-auto' : ' mr-atuo')}>
        <div className={'text-left'.concat(type==='r' ? ' md:text-right' : '')}>
          <h4 className='md:px-4 lg:px-10 dark:text-accent'>{p_type}</h4>
          <h3 className='md:px-4 lg:px-10 pb-2 text-primary md:text-secondary dark:text-accent-light'>{title}</h3>
          <p className={'py-3 md:py-6 md:border-0 md:p-6 lg:pl-20 lg:px-10 md:bg-secondary text-primary-dark md:rounded-md'.concat(type==='r' ? '' : ' lg:pl-10')}>{description}</p>
          <div className={'md:p-4 lg:px-10 flex justify-end'.concat(type==='r' ? '' : ' md:justify-start')}>
            {techs.split(', ').map(item => <p key={item} className={'text-accent-dark dark:text-accent-light'.concat(type==='r' ? ' pl-6' : ' pr-6')}>{item}</p>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project