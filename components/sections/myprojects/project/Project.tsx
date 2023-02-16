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
      className='relative overflow-hidden rounded-md md:h-80 lg:h-96'
    >
      <div 
        className={'absolute h-full'.concat(
          type==='r' ? '':' right-0'
        )}
      >
        <Image
          src={'/'+img}
          width={900}
          height={600}
          alt='johan photo'
          className='h-full w-auto rounded-md'
        />
        <div 
          className="hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-primary-dark bg-opacity-50 backdrop-blur-sm rounded-md duration-500 hover:backdrop-blur-0 hover:bg-opacity-0 md:block"
        />
      </div>
      <div 
        className={'relative z-10 h-full bg-primary-dark py-6 text-secondary-dark my-auto bg-opacity-95 flex items-center md:w-8/12 md:bg-opacity-0 '.concat(
          type==='r' ? ' md:ml-auto md:text-right' : ''
        )}
      >
        <div className=''>
          <h4 className='px-10'>{p_type}</h4>
          <h3 className='px-10 mb-4 text-secondary-dark-3 md:text-secondary md:dark:text-secondary-dark-3'>{title}</h3>
          <div className='mb-4 py-6 bg-primary-dark-1 bg-opacity-10 md:bg-opacity-80 md:rounded-md md:backdrop-blur-xl md:bg-primary-dark'>
            <p 
              className={'px-10'.concat(
                type==='r' ? '' : ' md:pl-10'
              )}>{description}</p>
          </div>
          <div
            className={'flex flex-wrap px-10 mb-2 text-accent-dark font-mono'.concat(
              type==='r' ? ' md:justify-end' : ''
          )}>
            {techs.split(', ').map(item => (
              <p 
                key={item} 
                className={'mr-2'.concat(
                  type==='r' ? ' md:mr-0 md:ml-2' : ''
              )}>{item}</p>
            ))}
          </div>
          <div 
            className={'flex flex-wrap px-10 text-accent font-mono md:text-secondary md:dark:text-accent'.concat(
              type==='r' ? ' md:justify-end' : ''
          )}>
            {gh&&(
              <a 
                className={'mr-3 text-xl'.concat(
                  type==='r' ? ' md:mr-0 md:ml-3' : ''
                )} 
                href={gh} 
                target={'_blank'}
              >
                <FaGithub />
              </a>
            )}
            {url&& (
              <a 
                className='ml-3 text-xl' 
                href={url} 
                target={'_blank'}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project