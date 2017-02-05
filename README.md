# London Air Quality React App 

This is a pilot application I made just to learn a bit of ES6, React, Redux, Webpack and testing in JavaScript.
The application displays air pollution data for London.

The bundler I used is [Webpack](https://webpack.github.io/) which packages up resources like JavaScript files and CSS to a single page application.

[React.js](https://facebook.github.io/react/) is used for the view components, React makes it easy to separate parts of your UI into components and 
 to deal with only rendering. React embraces that the state of the components is immutable.

Which leads us to [Redux](http://redux.js.org/), which acts as a store for the state. Redux embraces immutability too, the state of the store
 can only be changed via actions and reducers. This makes it very easy to see how data changes over time, makes it easier
 to debug, and even to "time-travel" (go back and forth in the history how data changed).

Testing is done with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/). Mocha to describe the test specifications in a BDD fashing and Chai act 
as the assertion framework.

CSS is being built from SASS with node-sass. The base styles are provided by [MaterializeCSS](http://materializecss.com/)

## Prerequisites

 - node.js
 - yarn

## Setup

```
yarn install
```

## Run the tests
```
yarn test
```

## Run the application in dev server

```
yarn start
```

## Package for production

```
yarn build

```

The built application will be under ./dist

Then navigate to the URL displayed on out terminal output.
## Licences

The application uses air quality data from [London Air](http://www.londonair.org.uk/LondonAir/API/) which is licenced under the [Open Goverment Licence v2](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/)  