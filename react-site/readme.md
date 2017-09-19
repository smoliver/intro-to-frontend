# React
Content from this project builds off information from [Vanilla](../vanilla). 
### The project build on your understanding of
1. [Javascript ES6](http://es6-features.org/#Constants) 
2. [NPM Package Management](https://www.npmjs.com/) and package management
3. [webpack](https://webpack.js.org/) and precompilers
4. HTML + CSS
### The project will introduce
1. [React](https://facebook.github.io/react/) and web frameworks
### Further Reader
1. [React Router](https://reacttraining.com/react-router/web/guides/philosophy) to handle browser-side routing
2. [React Motion](https://github.com/chenglou/react-motion) to handle React animation

## Start the package
1. run `npm install` to download the websites dependencies

## Getting started with React
1. Install the react libraries `npm install --save react react-dom`
2. Install the babel react compiler `npm install --save-dev babel-preset-react`
3. Add the babel react compiler to webpack
    * In `module.rules` add `'react'` to the 'babel-loader' `opions.presets`
    * the completed rule should look like
    ```
    {
        test: /\.js$/,
        exclude: path.resolve('./node_modules'),
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react', 'stage-0'],
                plugins: ['transform-object-assign']
            }
        }],
    }
    ```
4. Create a file named `src/index.js`, and import the `react` and `react-dom` at the top of the file
    ```
    import React from 'react';
    import ReactDOM from 'react-dom'
    ```
5. You are now able to write JSx style components into your react app!

### *Task:* use [React.Component](https://facebook.github.io/react/docs/react-component.html) and [React DOM](https://facebook.github.io/react/docs/react-dom.html#render) to render your first react compoent to the screen 

### Adding style
1. Create a style file called `src/index.scss`
2. Link the style file to your build tree by importing it into your `src/index.js`
```require ('index.scss');```

### Including outside components
1. You can include outside components by using either `require ()` as we did with the style document or using `import` similar to how we imported React into our project.  
    * In both these cases, the directory location is going to be relative to `resolve.modules` in `webpack.config.js` if an absolute path is given.  
    * Read more about webpack's [resolve](https://webpack.js.org/configuration/resolve/) to learn how to alias include paths
2. You can include their style-sheets from your own using the sass `@import`;

### *Task:* Replace the component you wrote with the `<App>` component in `src/app` and include it's stylesheets into your `index.scss` using `@import`