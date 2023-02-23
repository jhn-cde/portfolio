import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'

export async function getAboutMe(){
  const filepath = 'content/aboutme/aboutme.md';
  const id = 'aboutme';
  const fileContents = readFileSync(filepath, 'utf8');
  const matterResult = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return{
    id,
    title: matterResult.data.title,
    skills: matterResult.data.skills,
    content: contentHtml
  }
}