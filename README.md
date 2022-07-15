# Personal Portfolio Website

## :open_book: Project description

A portfolio website built with vue.js as frontend framework and express/sendGrid as backend mailing service hosted with node.js. My intent with this project is to build and host my own personal portfolio on my webhotel. This will serve as my online CV and place to showcase other projects and facts about myself.

During the initial face of the project my wife and I used figma to get going with some sort of design. Later on this design changed a bit but the underlying idea is still there. 

Some of the pages planed where removed to make room for links to other media sites, for example my art page on konst.se. It didn't feel neccessary to make my own when there's already another media to cover for art posts etc.


## :mag: Issues
I've had weird issues on IOS devices and Brave browser when opening the "Codefolio" page. The vue3 carousel slider will get stuck and the page needs to update before being able to move it correctly again. I have not found the root of the problem yet unfortunatly. 
### Solved
- :heavy_check_mark: Rebuilt vue-slider with new component.
- Feel free to contribute if you find anything to improve.

## 	:page_facing_up: Project setup

Make sure the backend server is up and running with your SendGrid API key activated and setup in the 'email.js' file. Also make sure to set the correct redirects.

Link to backend mailing service below.
### :gear: [Backend repository](https://github.com/olof-sky/personal-portfolio-backend)
After everything is setup you can go ahead and run the following commands.

```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```

##### Lints and fixes files
```
npm run lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
