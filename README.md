# generator-hy-mean [![NPM version][npm-image]][npm-url]
> very minimalistic generator for a MeanStack Application

## Installation

First, install [Yeoman](http://yeoman.io) and generator-hy-mean using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-hy-mean
```

Then generate your new project:
Start Developing
```bash
yo hy-mean
```
## Start Developing

To Start Developing on the generated project move to it's directory:
```bash
cd <your-project-name>
```

Open a Terminal, One terminal that will act as your app's server (Express.js server):
```bash
npm run dev-server
```
>This server will automaticly restart when changes are introduced

then open second Terminal, One terminal that will act as your File Watcher (Using Gulp):
```bash
npm run dev
```

>This server will automaticly Concat and minify when changes are introduced to your Front end Code

## Installing new Bower dependencies

All new Bower Javascript dependencies have to be included in gulpfile.js in the libs section
This process is required for gulp to read those libraries

### IMPORTANT!
Adding javascript files outised of the components/pages/assets folders will not be visible to Gulp.
Any file outside of javascript (like CSS) will have to be added in manually into index.html

>reason is I don't write my own css so it's not in my build system

## Run your Application

To run your Application you simply Use:
```bash
npm start
```



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [heiyukidev](http://github.com/heiyukidev)


[npm-image]: https://badge.fury.io/js/generator-hy-mean.svg
[npm-url]: https://npmjs.org/package/generator-hy-mean
