import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export function getIntro(){
  const filepath = 'content/intro/intro.md';
  const id = 'intro.md';
  const fileContents = readFileSync(filepath, 'utf8');
  const matterResult = matter(fileContents)

  return{
    id,
    data: {
      intro: matterResult.data.intro,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      description: matterResult.data.description,
    }
  }
}