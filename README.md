# Sass and Sass with Create-React-App

### What is Sass?

Sass, Syntactically Awesome Style Sheets, is a CSS preprocessor. What is a CSS preprocessor? 
- A scripting language that extends CSS and gets complied into regular CSS syntax so it can be read by your browser.

There are many different CSS preprocessors so what are some of the benefits of using one?
- Cleaner code with reusable pieces
- Nesting, more straight forward
- It is compiled to one big file and reduces the HTTP requests to get multiple CSS files
- Mixins
- Functions (whether created or built in… example lighten(blue, 10%))
- Math (example, color: pink - 50)

### Sass vs SCSS

This can often be confusing as to what the difference is. They are in fact both Sass... the language that is. But in this case, they are different syntaxes of the language Sass.

Sass or style.sass is an older form of Sass syntax also known as *the indented syntax*. It doesn't use curly braces but instead uses indenting to show nesting. It also doesn't use semicolons. It also has some shorter syntax than SCSS such as = instead of @mixin. 

SCSS or style.scss is more similar to regular CSS syntax plus some extras. Unlike Sass, it uses curly braces and valid CSS syntax can be easily converted to SCSS by simply changing the file extension. 

SCSS has become more of the norm than Sass and that's what we'll be using in this demo. It's really preference. Use what you'd like.

### Installing Sass with Create-React-App

Create-React-App has great documentation that's really straight forward on implementing Sass with your React app. I'll put the summary below. Feel free to look at their docs for further reading.

**1.** Install the command-line interface for Sass:

```npm install node-sass-chokidar```


**2.** In ```package.json```, add the following lines 

 ```
"build-css": "node-sass-chokidar src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
``` 

to ```scripts```:

  ```
  "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
  }
```   


**3.** Change ```App.css``` to ```App.scss```.


**4.** Remove all CSS files from the source control by adding ```src/**/*.css``` to your ```.gitignore``` file.


**5.** In order to run our two scripts (build-CSS and watch-css) simultaneously, install the package:

 ```npm install npm-run-all```


**6.** Include the CSS preprocessor commands by changing the start and build scripts to be

```
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build": "npm run build-css && react-scripts build",
```

in your ```package.json```

```
"scripts": {
  "build-css": "node-sass-chokidar src/ -o src/",
  "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
  "start-js": "react-scripts start",
  "start": "npm-run-all -p watch-css start-js",
  "build": "npm run build-css && react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
```


**7.** Now when running ```npm start``` your Sass files will be included.

### Tips and tricks for using Sass files in your React app

When your CSS files are compiled, there will be a CSS file for every .scss file you have created. This can become messy and you can end up with a whole lot of CSS files. A good way to avoid this is to use partials. A partial is a chunk of code that can be imported wherever it's needed. You can create a partial by adding an underscore before the name of your file. This underscore means that this file will be ignored when compiling happens. Example:

```_style.scss```

Okay, so we have a lot of files that are not being complied into CSS files. Now how do we use this?
You can create a *main.scss*. This does not have an underscore so it *will* be compiled. The benefit of this is that you can import all of your partials into the main file and they all will be compiled in one big CSS file that only needs to be imported once. Example:

```
@import 'variables';
@import 'globals';
@import 'mixins';

// Etc...
```

Now you will have two files ```main.scss``` and ```main.css```. One your browser can't read, and one it can.

From here, simply import your *CSS* file into your ```index.js```. Example:

```import './styles/main.css';```

You only need one import with one stylesheet to worry about. The rest of your style sheets are modularized and organized and clean. It's the best of both worlds. 