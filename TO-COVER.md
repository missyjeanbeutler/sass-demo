
### File Structure and Good Practice

- Partials
    - Underscore
    - Can't import with a non-partial of the same name
- @import
    - By default, looks for Sass files so .scss extension not necessary
- Files for: variables, mixins, globals, reset, functions, etc... import them all in your main.scss
- Split up in categories and use Table of Contents
- Naming
    - Specfic with site-wide convention

### Nested Properties

- Namespaces shortcut (ex: font-family, font-size, font-weight)
- General guidelines
    - No more than 3 levels deep
    - Use nesting when necessary and makes sense


### Variables

- $, set like CSS properties


### Mixins

- @mixin name { // styling }
- @include
- arguments
- default values with :


### Functions

- @function name() { @return //code }
- name() to return value
- Responsive design (target/context * 100%)


### Extend Directive

- inheriting styles @extend


### & With Pseudo Classes

- Nested &:hover, :active etc...



