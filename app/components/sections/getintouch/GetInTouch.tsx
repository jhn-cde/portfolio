import React from 'react'
import getintouch from '@/content/GetInTouch.json'

const GetInTouch = () => {
  const {title, email, content} = getintouch;

  return (
    <section className="flex items-center" id='getintouch'>
      <div className="md:max-w-2xl m-auto px-4 pt-0 py-16 lg:flex items-center sm:px md:px-20 lg:h-96 lg:my-4">
        <div className="text-center">
          <h2 className='mb-10 text-4xl text-center lg:text-6xl'>{title}</h2>
          <div 
            className='mb-10'
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div>
            <a className="text-accent-dark underline" href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">{email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch