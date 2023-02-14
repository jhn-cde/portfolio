// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''
let images = {}

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`

  images = {
    images: {
      loader: 'imgix',
      path: 'https://jhn-cde.github.io/portfolio/'
    }
  }
}

module.exports = {
  ...images,
  assetPrefix: assetPrefix,
  basePath: basePath,
}