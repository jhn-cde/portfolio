import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className="text-center p-2 relative z-50" title='footer'>
      <p className='font-nor
      '>
        <a className="pl-2 pr-2 mr-2 border-r-2 border-gray-500 font-bold" href="https://github.com/jhn-cde">jhn-cde</a>
        Made with <a className='font-bold' href="https://github.com/jhn-cde/portfolio">next.js</a>
      </p>
    </footer>
  )
}

export default Footer