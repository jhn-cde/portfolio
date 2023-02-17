import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, selectTheme } from 'store'

const truescroll = 70

const NavBar = () => {
  const dispatch = useDispatch()
  const darkTheme = useSelector(selectTheme)

  const [logo, setLogo] = useState('/logo.svg')
  const [scroll, setScroll] = useState(0)
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      const isUp = scrollY < lastScrollY
      if((!scrollUp && isUp)||(scrollUp && !isUp) || scrollY===0){
        setScrollUp(isUp && scrollY!==0);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }

      setScroll(window.scrollY)

      if (window.scrollY>=truescroll)
        setLogo('/logo_scroll.svg')
      else
        setLogo('/logo.svg')
    };

    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollUp])

  return (
    <nav className={(!scrollUp && scroll>=truescroll?' hidden':'flex py-5 px-4 sm:px-10 w-screen justify-between items-center fixed top-0 z-50').concat(scroll>=truescroll?' shadow-md shadow-primary bg-opacity-80 bg-primary backdrop-blur-md dark:bg-primary-dark dark:bg-opacity-70 dark:shadow-primary-dark':'')}>
      <div className='shrink-0'>
        <Image
          src={logo}
          width={50}
          height={50}
          alt='plan de estudios'
          className={'w-auto '.concat(scroll>=truescroll?'h-6 sm:h-10':'h-8 sm:h-12')}
        />
      </div>
      <ul className='flex items-center text-secondary dark:text-secondary-dark-3'>
        <li><BsFillMoonStarsFill className='cursor-pointer text-lg mr-6' onClick={() => dispatch(changeTheme(!darkTheme))}/></li>
        <li className='hidden sm:block mr-6 font-semibold'><a href="#aboutme">About Me</a></li>
        <li className='hidden sm:block mr-6 font-semibold'><a href="#myprojects">My Projects</a></li>
        <li className='hidden sm:block mr-6 font-semibold'><a href="#getintouch">Get In Touch</a></li>
        <li><a className='bg-transparent border-accent-dark border-2 px-4 py-2 text-accent-dark font-mono rounded-md' href="https://drive.google.com/file/d/12iWLUDr5dVg6LVbezBlF1Ao7bJnpIX63/view?usp=share_link" target={'_blank'}>Resume</a></li>
      </ul>
    </nav>
  )
}

export default NavBar