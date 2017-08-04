React kickoff template
==========================

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In [this file](docs/README.md) you will find useful documentation about setting up, running and extending this project.
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Folder Structure

The component division and files/folders structure is created following [this proposal](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346)

## Config

You need a file named `.env` in the project rootpath with the following variables:

```
REACT_APP_API_BASE_URL=xxxxxx
```

## Styles

We use scoped styles per component, powered by [Radium](https://github.com/FormidableLabs/radium) library.

This makes us write inline styles using JS objects and 0% of css. This is an important decision that has a high impact in the project development and is mainly based on the pros and cons exposed in [this talk](https://speakerdeck.com/vjeux/react-css-in-js).

## Performance debugging

This project also supports performance debugging using [react-addons-perf](https://www.npmjs.com/package/react-addons-perf).  

To use it, open a browser console within your project. Then,
```
// Start measurement
Perf.start()

// Do stuff in your project

// Stop measurement
Perf.stop()

// Prints changes count on Virtual DOM that doesn't impact on render()
Perf.printWasted()
```

It's recommended to check official reference [here](https://facebook.github.io/react/docs/perf.html).

## Dev tools

This project is already configured to take advantadge of the following tools:
- [React Dev Tools](https://github.com/facebook/react-devtools)
- [Redux Dev Tools](https://github.com/gaearon/redux-devtools)

We strongly recommended installing the browser extensions and use them during development.
