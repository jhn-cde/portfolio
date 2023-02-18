import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiExpress, SiGooglecolab, SiJavascript, SiKeras, SiMysql, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiMsqlServer, DiMysql } from 'react-icons/di';

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
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case 'JavaScript':
        return <SiJavascript className='mr-3'/>
      case 'TypeScript':
        return <SiTypescript className='mr-3'/>
      case 'React':
        return <SiReact className='mr-3'/>
      case 'ReactNative':
        return <TbBrandReactNative className='mr-3'/>
      case 'SQLServer':
        return <DiMsqlServer className='mr-3'/>
      case 'SQLLite':
        return <DiMysql className='mr-3'/>
      case 'Python':
        return <SiPython className='mr-3'/>
      case 'Cpp':
        return <SiCplusplus className='mr-3'/>
      case 'CSharp':
        return <SiCsharp className='mr-3'/>
      case 'Keras':
        return <SiKeras className='mr-3'/>
      case 'Colab':
        return <SiGooglecolab className='mr-3'/>
      case 'Express':
        return <SiExpress className='mr-3'/>
      default:
        break;
    }
  }

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
        className={'relative z-10 h-full bg-primary-dark text-secondary-dark my-auto bg-opacity-100 rounded-md py-10 md:py-0 md:backdrop-blur-sm flex items-center md:w-5/12 md:bg-opacity-0'.concat(
          type==='r' ? ' md:ml-auto md:text-right' : ''
        )}
      >
        <div className='w-full'>
          <p className={'px-10 font-normal text-accent-dark'.concat(type==='r' ? ' md:pl-0' : '')}>{p_type}</p>
          <h3 className={'px-10 text-secondary-dark-3 md:text-secondary pb-5 md:pb-0 md:dark:text-secondary-dark-3'.concat(type==='r' ? ' md:pl-0' : '')}>{title}</h3>
          <div className={'relative mb-4 bg-primary-dark-1 bg-opacity-0 md:py-6 md:bg-opacity-95 md:rounded-md md:backdrop-blur-xl md:bg-primary-dark md:absolute'.concat(
            type==='r' ? ' md:-left-3/4' : ' md:-right-1/2'
          )}>
            <p 
              className={'px-10 mb-2 pb-4'.concat(
                type==='r' ? '' : ' md:pl-10'
              )}>{description}</p>
            <div 
              className={'flex items-center flex-wrap px-10 font-mono'.concat(
                type==='r' ? ' md:justify-end' : ''
            )}>
              {techs.split(', ').map(item => (
              <div className='flex items-center text-lg text-white' key={item}>
                {getTechIcon(item)}
              </div>))}
              {url || gh && '|'}
              {gh&&(
                <a 
                  className={'ml-3 text-xl text-accent hover:text-accent-light hover:text-2xl'.concat(
                    type==='r' ? ' md:mr-0 md:ml-3' : ''
                  )} 
                  href={gh} 
                  target={'_blank'}
                  aria-label={`github link`}
                >
                  <FaGithub />
                </a>
              )}
              {url && (
                <a 
                  className='ml-3 text-xl text-accent hover:text-accent-light hover:text-2xl' 
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