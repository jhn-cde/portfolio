import { SiCplusplus, SiGit, SiGooglecolab, SiKeras, SiLinux, SiMicrosoftsqlserver, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative, TbCSharp } from 'react-icons/tb';
import { DiMysql } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

export const getTechIcon = (name: string) => {
  switch (name) {
    case 'JavaScript':
      return <IoLogoJavascript title="JavaScript"/>
    case 'TypeScript':
      return <SiTypescript title="TypeScript" />
    case 'React':
      return <SiReact title="React"/>
    case 'ReactNative':
      return <TbBrandReactNative title="React Native"/>
    case 'SQLServer':
      return <SiMicrosoftsqlserver title="Microsoft SQL Server"/>
    case 'SQLLite':
      return <DiMysql title="MySQL"/>
    case 'Python':
      return <SiPython title="Python"/>
    case 'Cpp':
      return <SiCplusplus title="C++"/>
    case 'CSharp':
      return <TbCSharp title="C#"/>
    case 'Keras':
      return <SiKeras title="Keras"/>
    case 'Colab':
      return <SiGooglecolab title="Google Colab"/>
    case 'Express':
      return <SiKeras title='Keras'/>
    case 'Linux':
      return <SiLinux title='Linux'/>
    case 'Git':
      return <SiGit title='Git'/>
    default:
      console.log(`"${name}" not found!!!`)
      break;
  }
}