import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

interface Props{
  url: string,
  children: JSX.Element,
  onHover: (hover: boolean) => void
}

const CustomLi = ({url, children, onHover}: Props) => {
  return(
    <li className='mb-2 rounded-md p-1 backdrop-blur-sm bg-primary dark:bg-primary-dark bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-90 dark:hover:bg-opacity-90 hover:-translate-y-1 sm:mb-4 transition text-secondary hover:text-secondary-3 dark:text-secondary-dark hover:dark:text-secondary-dark-3 duration-75' onMouseEnter={()=>onHover(true)} onMouseLeave={()=>onHover(false)}>
      <a 
        href={url} 
        className='text-xl' 
        target={'_blank'}
        aria-label={`social link ${url}`}
      >
        {children}
      </a>
    </li>
  )
}

const Social = () => {
  const [hover, setHover] = useState(false)
  const onHover = (hover: boolean) => {
    setHover(hover)
  }
  return (
    <div className='fixed right-3 bottom-0 z-50 sm:left-6 sm:right-auto lg:left-8'>
      <ul>
        <CustomLi url={"https://github.com/jhn-cde"} onHover={onHover}>
          <FaGithub />
        </CustomLi>
        <CustomLi url={"https://www.instagram.com/johan.cde/"} onHover={onHover} > 
          <FaInstagram />
        </CustomLi>
        <CustomLi url={"https://www.linkedin.com/in/johanwilla/"} onHover={onHover}>
          <FaLinkedinIn />
        </CustomLi>
        <li>
          <div className={'border-r-2 h-12 w-0 m-auto sm:h-32 '.concat(hover?' border-primary-3 dark:border-primary-dark-1':' border-primary dark:border-primary-dark')}></div>
        </li>
      </ul>
    </div>
  )
}

export default Social