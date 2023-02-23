import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const projectDir = join(process.cwd(), 'content/projects')

export function getProjects(){
  const fileNames = readdirSync('content/projects');
  let allProjects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = join('content/projects', fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents)

    return{
      id,
      ...matterResult
    }    
  })

  allProjects = allProjects.filter((project) => project.data.display);
  
  return allProjects
    .map((project) => {
      return {
        id: project.id, 
        data: {
          title: project.data.title,
          description: project.data.description,
          p_type: project.data.p_type,
          img: project.data.img,
          techs: project.data.techs,
          gh: project.data.gh,
          url: project.data.url,
          display: project.data.display,
          num: project.data.num
        }}
    }).sort((a, b) => {
      return a.data.num < b.data.num ? -1 : 1
    })
}