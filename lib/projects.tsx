import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const projectDir = join(process.cwd(), 'content/projects')

export function getProjects(){
  const fileNames = readdirSync(projectDir);
  let allProjects = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = join(projectDir, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents)

    return{
      id,
      ...matterResult
    }    
  })

  allProjects = allProjects.filter((project) => project.data.display)
  return allProjects.sort((a, b) => {
    return a.data.num < b.data.num ? -1 : 1
  })
}