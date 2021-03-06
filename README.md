## Build Status
[![linux build](https://api.travis-ci.org/iroy2000/react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/iroy2000/react-redux-boilerplate)

### Preface

React Redux Boilerplate is a full fledged __PRODUCTION READY__ workflow boilerplate for building complex React / Redux application.

The technologies used in this workflow boilerplate shows case a `subset of technologies` we are currently using within our team ( __we put this project in github mainly as recruiting purpose for our team__ ),  and we are trying to give our candidates confidence that by working with us, they will be using decent technologies as well as staying relevant to the industry.  And that is what our team strongly believed in - __technology innovation and promoting developers' relevancy in the industry__.  

If you are interested in working with us, feel free to send a message to [iroy2000](https://www.linkedin.com/in/iroy2000).

__Note:__ This boilerplate is not to show case how to code in React / Redux, it is a boilerplate that hook everything up for you to develop a complex React / Redux project. And if you just want to learn React, we don't have complicated code example here and this boilerplate might be too complicated for your need.

![React Redux Workflow Boilerplate Logo](http://res.cloudinary.com/search-engine/image/upload/v1501696716/logo-rrb-002_zxvml0.png)

# React Redux Boilerplate

`React Redux Boilerplate` is a workflow boilerplate that make life easier for developers by providing a virtual development environment and production ready build process framework out of the box.

`React Redux Boilerplate` is for developing React client side application. So,  if you are looking for:

* `Isomorphic (Universal) support`, feel free to add server side support to it, or you can use something like [Next.js](https://github.com/zeit/next.js/), [react-server](https://github.com/redfin/react-server) or [electrode](http://www.electrode.io/)



### Features / Benefits

Development

* React
* Redux
* ES6 / ES7
* ImmutableJS
* PostCSS ( it support CSS modules, and we recommended B.E.M style )
* Webpack 3
* Reselect
* Type Checking with Babel Type Check ( Flow syntax )
* ESLint for syntax check
* Jest and Enzyme for Unit testing
* Storybook for UI testing / documentation

Workflow

* Hot Module Reload during development
* CSS / HTML / JS minification / Image optimization when built
* JS code duplication removal during built ( tree shaking capability )
* Built-in fancy cli dashboard for reporting run time compile status
* Built-in lightweight config system
* Highly configurable build and workflow system ( webpack )
* Minimal setup time and allow you to invest into things that matters
* Everything automatic, you just care about development, nothing else \o/ Yeah ?!

If you are interested, please read the `package.json` for all installed modules and plugins.

## Table of Contents

Basic
1. [Installation](#installation)
1. [Initialize your project](#initialize-your-project)
1. [Suggested Workflow](#suggested-workflow)
1. [Production Readiness](#production-readiness)
1. [Configuration](#configuration)

Advanced
1. [Writing Unit Test](#writing-unit-test)
1. [Multiple Device Concurrent Debugging](#multiple-device-concurrent-debugging)
1. [Developing Template](#developing-template)
1. [Production Optimization and Bundle Analysis](#production-optimization-and-bundle-analysis)
1. [Integration Note](#integration-note)
1. [QA](#qa)

Other
1. [Knowledge Base Reading](#knowledge-base-reading)
1. [How to Contribute](#how-to-contribute)
1. [Updates](#updates)

# Basic

## Installation


### Prerequisite

You need to have Node.js installed.

### Post Installation

If you would like to have Redux debug capabilities, you can download this Chrome extension [Redux DevTool](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

![Redux DevTool](https://www.dropbox.com/s/wni425e3d4xiy85/redux-devtool.png?raw=1)


## Initialize your project

Now run the following commands in your terminal

**NOTE: You only need to run this once!**

```sh
$ npm install # This will install the necessary packages to use the app
```

**That's it!**


### To run the app in Development Mode

```sh
$ npm run dev
```

Wait about 5 - 10 seconds for your development environment to initialize.

When it finishes, open your browser and go to `http://localhost:8080/`

If you see the landing page, it means you have set up everything successfully.


### List of NPM Commands


```sh
$ npm run dev       # build and watch, but javascript not minified
$ npm run build     # build a minified production version
$ npm run lint      # linting
$ npm run test      # run test
$ npm run clean     # it runs before each build, so you don't need to
$ npm run storybook # it starts storybook server
```


## Suggested Workflow


After you check out the repo, I will usually do the following :

0. Go to your project root in your host machine  ( e.g. your Mac )
1. Run `npm run dev`
2. Go to your browser and go to `localhost:8080`
3. Make code changes
4. Watch your code changes reflect on browser without refreshing
5. Repeat your development steps

That's very easy, isn't it?

## Production Readiness

React Redux Boilerplate supports production preview, which means that you can run the production build job and see how it looks like in production.

1. Run `npm run build` and wait until it is done
2. Go to the project `docroot`, you will see a `index.html`  (template is customizable, please read `Developing Template` section)
3. Open that `index.html` in your browser, and that is the build version that just got generated

That's very easy, isn't it?

### Difference between `npm run dev` v.s. `npm run build`

`npn run dev` is best to do JS / CSS only changes, and it comes with live reload functionality

`npm run build` is for testing what happen if your frontend assets are optimized ( production level code )

Please let me know if you have better work flow suggestion!!

## Configuration
React Redux Boilerplate has two configuration strategies, one is for normal configuration, the other one is for sensitive information that you don't want others to know.

### Configuring application

If you look at folder `config`, there are four files

`default.json` - all default configuration
`development.json` - when you run `npm run dev`, it will pull configuration from that file
`release.json` - when you run `npm run build:release`, it will use this configuration
`production.json` - when you run `npm run build`, it will use this configuration

We are using [node-config](https://github.com/lorenwest/node-config), they have a pretty easy to understand documentation.


And in your config file ( json config file ), whatever you put inside the `app`, it will be injected into the client application and you can access to your `app` config data by using `__CONFIG__` variables.

Let's say you have a config like the following

```
{
  "app": {
    "apiURL": "http://foo.bar/"
  }
}

```

In your React application, you can access this variables

```
__CONFIG__.apiURL

```

### Configuring secret key/value pair

There are times you may want to put in `secret information` you don't want to check into the source code.  In this boilerplate, you just need to create a file called `.env` in your `PROJECT_ROOT`, and you can put your secret over there ( we have put that into `.gitignore` just in case ). For example, in order to use the feature to deploy to S3, you need to provide the following information.

```
AWS_ACCESS_KEY=YOUR_AWS_ACCESS_KEY
AWS_SECRET_KEY=YOUR_AWS_SECRET_KEY
AWS_BUCKET=YOUR_AWS_BUCKET
AWS_CDN_URL=YOUR_AWS_CDN_URL

```

And your in node application or webpack config, those key/value pair will inject into `process.env` ( e.g. `process.env.AWS_ACCESS_KEY` ).

__Note__: Using `.env` file is optional, it meant to keep secret and inject information into environment variables, if you are using Jenkin or alike type of tools, you can inject environment variables there.

However, with `.env`, you can create a ready to use list of environment variables for your different environment.  You can even have another service to generate the `.env` file before building the project, but in terms of how to achieve that, it is out of scope of this documentation.

__Just remember__, `.env` file suppose to keep your secret, and prevent your from saving sensitive secret into source code repository \0/ !! `DO NOT` check in `.env` into your source repo !!

We are using [dotenv](https://github.com/motdotla/dotenv) for the `.env` feature, they have pretty good documentation.

# Advanced

## Writing Unit Test

We are using Jest and Enzyme for unit testing, please refer to the Knowledge Base section below for more information.

In order to add unit test, the current setup requires you to put your test under `__tests__` directory, and suffix the filename with `spec` or `test`.

For example, `MyFancyComponent.test.js` or `whatever_folder/AnotherComponent.spec.js`.  

We also have two folders `__fixtures` and `__mocks__` in the repo, those are just handy example folders for you to put different type of test related files separately, these two folders are safe to delete if you don't need them.

## Developing Template

The `docroot/index.html` is a generated artifact. If look at our sample template at `src/assets/template/_default.html`, the `docroot/index.html` is generated from that file.

We are using [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) to generate the `docroot/index.html`.

* If you are developing a single page application, you probably can reuse that file or customize it.
* If you are building multiple pages application, please read the [HTML Webpack Plugin](https://github.com/ampedandwired/html-webpack-plugin) documentation for template development and how to configure it.

**[Note]** - Most of the use case of the html template system so far is for testing purpose for your dev and build enviornment before you start integration.  If all you need is a static template, you are good; but if your application requires a server side processing, you will need to integrate the artifacts with the language of your choice. Please read `Diagrams` section for how to integrate with other server side language.


## Integration Note


### How to integrate with other server side framework ?

When you run `npm run build`, it will generate a meta data file `assets.json` with the list of generated frontend artifacts.  Think about that as a contract / interface for your server side framework.

And your framework just need to consume that meta information as integration point.

And this boilerplate has a process integrated to upload artifacts ( assets.json and generated client ifacts ) to S3 / cloudfront.  One of the integration path is the `consumer` can query against s3 for the assets.json, and use the information in assets.json to get the artifacts which is uploaded to S3 / cdn.


## QA

* __What is our standard to control our npm module dependencies ?__
    * We are using `^version`, it means "Compatible with version". The reason we are using `^version` is simply we want the ability for us to roll back to previous working version together with the source code.

* __How to add javascript unit test ?__
    * All React JS test are under \__tests__ directory and this tool will find all the test, you don't need to do anything besides putting your test in, but please use a structure that mimic your source location that you are testing, or it will create confusion.


* __What is B.E.M style  ?__
    * B.E.M is short for `Block, Element, Modifier` and is a naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS and make our code base more maintainable. Please read the links below for getting deeper insight of it.

# Other

## Knowledge Base Reading

* [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
* [Synchronization of props with state is an anti-pattern](https://github.com/JedWatson/react-select/issues/70)
* [Redux](http://redux.js.org/)
* [Redux without profanity](https://www.gitbook.com/book/tonyhb/redux-without-profanity/details)
* [Learned from reading the Redux source code](https://medium.freecodecamp.com/what-i-learned-from-reading-the-redux-source-code-836793a48768?gi=4bdf3c9f3396#.rjwu6x9sc)
* [Redux Saga](https://redux-saga.js.org/)
* [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)
* [ES6 Compatible Table](http://kangax.github.io/compat-table/es6/)
* [ImmutableJS for beginners](https://github.com/iroy2000/immutablejs-for-beginners)
* [Webpack how-to](https://github.com/petehunt/webpack-howto)
* [Webpack - The Confusing Part](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
* [Lazy Loading and Code Split for React Route](https://github.com/webpack/react-proxy-loader)
* [Learning PostCSS](https://github.com/postcss/postcss)
* [Jest = Awesome JS Testing Framework](https://facebook.github.io/jest/docs/tutorial-react.html)
* [B.E.M 101](https://css-tricks.com/bem-101/)
* [B.E.M: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
* [Isomorphic JavaScript, The Future of Web Apps](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
* [React Responsive](https://github.com/contra/react-responsive)
* [Storybook.JS](https://storybook.js.org/)

## How to Contribute

We welcome anyone to send us __pull request__ to improve this boilerplate, the goal is to make it better from time to time and we all can learn from it.

This boilerplate will be maintained separately.  So please do not check in any business logic to it unless it is for example purpose.

## Updates

__9 / 14 / 2017__

For those of you seeing the following error

`mozjpeg pre-build test failed ...`

There is a bug in `imagemin` with Node 6 or above, and [here is the discussion](https://github.com/imagemin/imagemin/issues/168)

If you are using mac, you can fix that by doing this

`brew install automake autoconf libtool dpkg pkgconfig nasm libpng`

__7 / 15 / 2017__

We integrated Storybook into this project, now you can create your UI testing and documentation with awesomeness!

We also added Enzyme to make React unit testing easier :)

__6 / 20 / 2017__

Webpack 3 just announced yesterday, we are so excited about it, thus we also upgraded this boilerplate to use `Webpack 3`.

If you encounter issues related to `Webpack 3`, it is good to report that back so the community can benefit from it.


## License
In theory, knowledge should be free, so please visit [wtfpl](http://www.wtfpl.net/) for this boilerplate license if you really care.
