## Sass and Sass with Create-React-App

### What is Sass?

Sass, Syntactically Awesome Style Sheets, is a css preprocessor. What is a css preprocessor? 
- A scripting language that extends CSS and gets complied into regular CSS syntax so it can be read by your browser.

There are many different css preprocessors so what are some of the benefits of using one?
- Cleaner code with reusable pieces
- Nesting, more straight forward
- It is compiled to one big file and reduces the http requests to get multiple CSS files
- Mixins
- Functions (whether created or built in… example lighten(blue, 10%))
- Math (example, color: pink - 50)

### Sass vs SCSS

This can often be confusing as to what the difference is. They are in fact both Sass... the language that is. But in this case, they are different syntaxes of the language Sass.

Sass or style.sass is an older form of Sass syntax also known as the indented syntax. It doesn't use curly braces but instead uses indenting to show nesting. It also has some shorter syntax than SCSS such as = instead of @mixin. 

SCSS or style.scss is more similar to regular CSS syntax plus some extras. Unlike Sass, it uses curly braces and valid CSS syntax can be easily converted to SCSS by simply changing the file extension. 

SCSS has become more of the norm than Sass and that's what we'll be using in this demo. It's really preference. Use what you'd like.