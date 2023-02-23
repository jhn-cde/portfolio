import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'

export async function getInTouch(){
  const filepath = 'content/getintouch/getInTouch.md';
  const id = 'getintouch';
  const fileContents = readFileSync(filepath, 'utf8');
  const matterResult = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return{
    id,
    title: matterResult.data.title,
    email: matterResult.data.email,
    content: contentHtml
  }
}