import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const NavBar = () => {
  const [logo, setLogo] = useState('/images/logo.svg')
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY>=70)
    if (window.scrollY>=70)
      setLogo('/images/logo_scroll.svg')
    else
      setLogo('/images/logo.svg')
  }

  return (
    <nav className={'py-5 px-4 sm:px-10 w-screen flex justify-between items-center fixed top-0 z-50'.concat(scroll?' shadow-md shadow-blue-500/40 bg-opacity-50 bg-white backdrop-blur-md':'')}>
      <div className='shrink-0'>
        <Image
          src={logo}
          width={50}
          height={50}
          alt='plan de estudios'
          className={'w-auto '.concat(scroll?'h-6 sm:h-10':'h-8 sm:h-12')}
        />
      </div>
      <ul className='flex items-center'>
        <li><BsFillMoonStarsFill className='cursor-pointer text-lg mr-6 text-secondary' /></li>
        <li className='hidden sm:block mr-6 font-semibold text-secondary'><a href="#">About Me</a></li>
        <li className='hidden sm:block mr-6 font-semibold text-secondary'><a href="#">My Projects</a></li>
        <li className='hidden sm:block mr-6 font-semibold text-secondary'><a href="#">Contact Me</a></li>
        <li><a className='bg-transparent border-accent border-2 px-4 py-2 text-accent font-mono rounded-md' href="#">Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar