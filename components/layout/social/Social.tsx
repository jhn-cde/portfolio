import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

interface Props{
  url: string,
  children: JSX.Element
}

const CustomLi = ({url, children}: Props) => {
  return(
    <li className='mb-2 rounded-md p-1 backdrop-blur-sm bg-primary-light bg-opacity-20 hover:bg-opacity-90 sm:mb-4'>
      <a href={url} className='text-xl text-secondary transition duration-75 hover:text-secondary-dark' target={'_blank'}>
        {children}
      </a>
    </li>
  )
}

const Social = () => {
  return (
    <div className='fixed right-1 bottom-0 z-50 sm:left-6 sm:right-auto'>
      <ul>
        <CustomLi url={"https://github.com/jhn-cde"}>
          <FaGithub />
        </CustomLi>
        <CustomLi url={"https://www.instagram.com/johan.cde/"}> 
          <FaInstagram />
        </CustomLi>
        <CustomLi url={"https://www.linkedin.com/in/johanwilla/"}>
          <FaLinkedinIn />
        </CustomLi>
        <li>
          <div className='border-r-2 h-6 w-0 m-auto border-secondary-light sm:h-32'></div>
        </li>
      </ul>
    </div>
  )
}

export default Social