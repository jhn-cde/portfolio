import React from 'react'

const GetInTouch = () => {
  return (
    <section className="flex items-center" id='getintouch'>
      <div className="md:max-w-2xl m-auto px-4 pt-0 py-16 lg:flex items-center sm:px md:px-20 lg:h-96 lg:my-4">
        <div className="text-center">
          <h2 className='mb-10 text-4xl text-center lg:text-6xl'>Get in Touch</h2>
          <p className='mb-10'>Thanks for taking the time to review my portfolio. I'm happy to connect with colleagues or employers in the industry. I look forward to hearing from you.</p>
          <div>
            <a className="text-accent-dark underline" href="mailto:toe.johan@gmail.com" rel="noopener noreferrer" target="_blank">toe.johan@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch