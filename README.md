# gradegrade
[![Build Status](https://travis-ci.org/ezhang7423/vuegrades.svg?branch=master)](https://travis-ci.org/ezhang7423/vuegrades)
> calc ur grades bruh

## Deployment

On push to master, travis ci runs `npm run generate` which creates static html with nuxt. These files are then pushed to `gh-pages`, where github then
hosts the static files. There is also a back4app project setup.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
