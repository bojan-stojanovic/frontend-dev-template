# FRONTEND DEVELOPMENT TEMPLATE


This is basic template for frontend development. In this template for SASS, 7-1 pattern is used.

Javascript should be written in **src/functions.js**.

Vite is used for compiling **.scss** files and handling ES module imports.  


# Getting started  
Download repository as zip file, and unpack it to desired place  


# Installing necessary dependencies
To install necessary development dependecies, you will need to have installed nodeJS and npm packages, then navigate to root folder and type `npm install` command in terminal.  

# Important - before you start  
Vite by default (when in dev mode) is not outputing **css** and **js** files, it keeps them in memory for HMR (hot module replacement). And because of that it is not designed to be used in CMS systems which rely on generated **css** and **js** files during development. Those files are generated only when application is built.

# Folder structure
- **public** folder - files from this folder won't be touched by **Vite**, they will be copied over to **dist** folder when you build app. If you are accessing images in **index.html** file, you must do it by omitting **/public/** from path, instad you need to treat static assets as if they are located in root folder, i.e. **/img/_icn/some-icon.svg**. When you build application, **Vite** will set correct paths.  

# Output folder structure  
- **dist** folder - this is folder which will be created once you run **build** command  
- **dist/css** folder - in this folder generated **css** file will be placed  
- **dist/js** folder - in this folder generated **js** files will be placed

# Runing tasks  
- **npm run dev** - This task will spin up dev server on **http://localhost:5173**, it will auto reload when changes are made in **.scss** or in **.js** files  
- **npm run build** - This task will build our application for production into **dist** folder. Name of output folder can be changed in **vite.config.mjs** file  
- **npm run serve** - Locally preview production build  

# Configuration  
Configuration file is located in **vite.config.mjs** file. Most interesting option for us is **base**, it is necessary to set correct name as string when serving application on server. For complete list of options, please refer to documentation for available options (link is in config file).  

# Using Sass variables
Sass is slowly migrating towards @use rule instead of @import. Because of that, I have migrated our setup to reflect this change.  

## How to import partials with new Sass syntax?
You can import partials same way as you did before, just instead of   
`@import 'path-to-scss-file'` use   
`@use 'path-to-scss-file'`  

## How to use variables, mixins and functions with new Sass syntax?
You have noticed that `_variables.scss` file is no longer globaly included in `main.scss` file. In order to use variables, mixins and functions, you must include them in file where you want to use them. On top of your file where you want to use them.  
`@use '../utils/variables' as *` - wildcard selector will enable you to use variables as you have used to `$variable-name`  
If you don't provide "**as**" value, in order to call you variable, you will use `variables.$variable-name`  

For more informations about @use, @import please check:  
https://sass-lang.com/documentation/at-rules/import  
https://sass-lang.com/documentation/at-rules/use  