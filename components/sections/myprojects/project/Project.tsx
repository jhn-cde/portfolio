import { getTechIcon } from 'lib/getIcon';
import Image from 'next/image'
import React from 'react'

interface Props{
  title: string,
  description: string,
  p_type: string,
  techs: string,
  img: string,
  type: 'r'|'l',
  gh: string,
  url: string
}

const Project = ({title, description, p_type, techs, img, gh, url, type}: Props) => {
  
  return (
    <div 
      className='relative rounded-md md:h-80 lg:h-96'
    >
      <div 
        className={'hidden absolute h-full w-full overflow-hidden md:block md:w-7/12 md:h-full'.concat(
          type==='r' ? '':' right-0'
        )}
      >
        <Image
          src={'/'+img}
          width={900}
          height={600}
          alt='project img'
          className='object-cover h-full w-auto rounded-md'
        />
        <div 
          className="hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-primary-dark bg-opacity-50 backdrop-blur-sm rounded-md duration-500 hover:backdrop-blur-0 hover:bg-opacity-0 md:block"
        />
      </div>
      <div 
        className={'relative z-10 h-full bg-primary-dark text-secondary-dark my-auto bg-opacity-100 rounded-md py-10 md:py-0 md:backdrop-blur-sm flex items-center md:w-5/12 md:bg-opacity-0'.concat(
          type==='r' ? ' md:ml-auto md:text-right' : ''
        )}
      >
        <div className='w-full'>
          <p className={'px-10 font-normal text-accent-dark'.concat(type==='r' ? ' md:pl-0' : '')}>{p_type}</p>
          <h3 className={'px-10 mb-4 text-secondary-dark-3 md:text-secondary md:pb-0 md:dark:text-secondary-dark-3'.concat(type==='r' ? ' md:pl-0' : '')}>{title}</h3>
          <div className={'relative mb-4 md:absolute'.concat(
            type==='r' ? ' md:-left-full lg:-left-3/4' : ' md:-right-full lg:-right-1/2'
          )}>
            <p 
              className={'bg-primary-dark-1 bg-opacity-0 md:py-6 md:bg-opacity-95 md:rounded-md md:backdrop-blur-xl md:bg-primary-dark px-10 mb-2 pb-4'.concat(
                type==='r' ? '' : ' md:pl-10'
              )}>{description}</p>
            <div 
              className={'flex items-center flex-wrap px-10 font-mono text-2xl text-secondary-dark-1 md:text-secondary-1 md:dark:text-secondary-dark-1'.concat(
                type==='r' ? ' md:justify-end' : ''
            )}>
              {techs.split(', ').map(item => (
              <div className='flex items-center mr-3' key={item}>
                {getTechIcon(item)}
              </div>))}
              {url || gh && '|'}
              {gh&&(
                <a 
                  className={'relative text-secondary-dark-3 md:text-secondary-3 md:dark:text-secondary-dark-3 ml-1 p-1.5 rounded-md hover:-translate-y-1'.concat(
                    type==='r' ? ' md:mr-0 md:ml-1' : ''
                  )} 
                  href={gh} 
                  target={'_blank'}
                  aria-label={`github link`}
                >
                  {getTechIcon('GitHub')}
                </a>
              )}
              {url && (
                <a 
                  className='relative text-xl text-secondary-dark-3 md:text-secondary-3 md:dark:text-secondary-dark-3 ml-3 p-1.5 rounded-md hover:-translate-y-1' 
                  href={url} 
                  target={'_blank'}
                  aria-label={`url`}
                >
                  {getTechIcon('ExternalLink')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project