import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

interface Props{
  url: string,
  children: JSX.Element,
  onHover: (hover: boolean) => void
}

const CustomLi = ({url, children, onHover}: Props) => {
  return(
    <li className='mb-2 rounded-md p-1 backdrop-blur-sm bg-primary-light bg-opacity-20 hover:bg-opacity-90 hover:-translate-y-1 sm:mb-4' onMouseEnter={()=>onHover(true)} onMouseLeave={()=>onHover(false)}>
      <a href={url} className='text-xl text-secondary transition hover:-translate-y-6 hover:text-secondary-dark' target={'_blank'}>
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
    <div className='fixed right-1 bottom-0 z-50 sm:left-6 sm:right-auto'>
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
          <div className={'border-r-2 h-6 w-0 m-auto sm:h-32 '.concat(hover?'border-secondary-dark':'border-secondary-light')}></div>
        </li>
      </ul>
    </div>
  )
}

export default Social