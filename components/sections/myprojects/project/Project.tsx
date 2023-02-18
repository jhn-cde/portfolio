import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import styles from './project.module.css'

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
        className={'absolute h-full w-full overflow-hidden md:w-7/12 md:h-full'.concat(
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
        className={'relative z-10 h-full bg-primary-dark py-6 text-secondary-dark my-auto bg-opacity-95 backdrop-blur-sm flex items-center md:w-5/12 md:bg-opacity-0'.concat(
          type==='r' ? ' md:ml-auto md:text-right' : ''
        )}
      >
        <div className='w-full'>
          <p className={'px-10 font-normal text-accent-dark'.concat(type==='r' ? ' md:pl-0' : '')}>{p_type}</p>
          <h3 className={'px-10 text-secondary-dark-3 md:text-secondary md:dark:text-secondary-dark-3'.concat(type==='r' ? ' md:pl-0' : '')}>{title}</h3>
          <div
            className={'flex flex-wrap px-10 mb-3 text-accent-dark font-mono md:px-0'.concat(
              type==='r' ? ' md:justify-end md:pl-0 md:pr-10' : ' md:pl-10 md:pr-0'
          )}>
            {techs.split(', ').map(item => (
              <p 
                key={item} 
                className={'mr-3'.concat(
                  type==='r' ? ' md:mr-0 md:ml-4' : ' md:mr-4'
              )}>{item}</p>
            ))}
          </div>
          <div className={'relative mb-4 bg-primary-dark-1 bg-opacity-0 md:py-6 md:bg-opacity-95 md:rounded-md md:backdrop-blur-xl md:bg-primary-dark md:absolute'.concat(
            type==='r' ? ' md:-left-3/4' : ' md:-right-1/2'
          )}>
            <p 
              className={'px-10 mb-2'.concat(
                type==='r' ? '' : ' md:pl-10'
              )}>{description}</p>
            <div 
              className={'flex flex-wrap px-10 text-accent font-mono'.concat(
                type==='r' ? ' md:justify-end' : ''
            )}>
              {gh&&(
                <a 
                  className={'mr-3 text-xl'.concat(
                    type==='r' ? ' md:mr-0 md:ml-3' : ''
                  )} 
                  href={gh} 
                  target={'_blank'}
                  aria-label={`github link`}
                >
                  <FaGithub />
                </a>
              )}
              {url&& (
                <a 
                  className='ml-3 text-xl' 
                  href={url} 
                  target={'_blank'}
                  aria-label={`url`}
                >
                  <FaExternalLinkAlt />
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