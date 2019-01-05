# React simple start kit
![React](https://img.shields.io/badge/Seed%20project-react-%2364d0ee.svg)
![Webpack](https://img.shields.io/badge/bundler-webpack-%231e72b3.svg)

Want to start the new project with React and looking for project seed? You on the right page! Why you should use this configuration:

:point_right: **100% pure React seed**

:point_right: **100% applicable for starting any project on React**

:point_right: **Including the dev server with hot reloading for components**

No test library/state manager included, I'm not gone to force you to use some specific technology, choose it by yourself.

## Getting started

Install this repo as npm package:

```npm i react-simple-start-kit```

or clone/download it from the Github:

```https://github.com/AModin/react-simple-start-kit.git```

Go to project root directory and install all dependencies: 

```npm i```

 Start the dev server:

```npm run start```

Then check out ```http://localhost:3000/```, you should see the page:

![schemamockpost](https://user-images.githubusercontent.com/15379788/50691613-4e5b4100-1042-11e9-88d8-4dbda6c25a84.png)

## Files structure:

```
app
├── node_modules
├── src
│     ├── assets
|     |      └── images
|     |            └── react.png
|     ├── components
|     |      ├── index.js
|     |      └── ImportedComponent.js
|     ├── App.js
|     ├── index.css
|     └── index.js
├── babel.config
├── index.html
├── package.json
├── package-lock.json
├── server.js
├── webpack.config.dev
├── webpack.config
└── webpack.config.prod
```

## How to

 - Add new absolute path: open ```webpack.config.js``` find 
```javascript
resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
    }
  }
```
and add new property in alias object
