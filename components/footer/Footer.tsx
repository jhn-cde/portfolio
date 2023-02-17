import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className="text-center p-2 w-screen z-50 bg-primary-1 -mt-1 dark:bg-primary-dark-3">
      <p className='text-sm text-secondary-1 dark:text-secondary-dark-1'>
        <a className="pl-2 pr-2 mr-2 border-r-2 border-secondary-1 font-bold dark:border-secondary-dark-1" href="https://github.com/jhn-cde">jhn-cde - 2023</a>
        Made with <a className='font-bold' href="https://github.com/jhn-cde/portfolio" target={'_blank'}>next.js</a>
      </p>
    </div>
  )
}

export default Footer