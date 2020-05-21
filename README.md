# Tutodiv (e-learning)

Tutodiv is a simple e-learning website based on video media that can be played on any device (using a browser).

With this application, you can learn online by registering first on the register page, then confirming the account via a message sent via email, after confirmation you can enter with the user password that you entered on the register page. Then you can learn from videos that have been prepared by the admin via the admin page (https://tutodiv-backoffice.netlify.com/)

This application supports PWA (Progressive Web App), and therefore is very optimal for use on mobile devices.

## Features
Authentication (Login / Register) with email verification<br />
Progressive Web App (Opimal for mobile devices)<br />
Cloudbase database (Firebase)

## Dependencies
```
"@nuxtjs/dotenv": "^1.4.0",
"@nuxtjs/pwa": "^3.0.0-0",
"bootstrap": "^4.1.3",
"bootstrap-vue": "^2.0.0",
"firebase": "^7.10.0",
"nuxt": "^2.0.0",
"nuxt-validate": "^1.0.1"
```
Or you can check on package.json file

## Build Setup

``` bash
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

## Try this!
If you want to see this project result on your local area, all you have to do is:
1. Download or clone this project in your local area
2. Open this directory (via terminal)
3. Type `npm install` to install all needed packages
4. Type `npm run dev` to see the result / view
5. Open `localhost: 3000` in your browser

## App Result
You can see this app result instantly at this page : https://tutodiv.netlify.com/
