# react-redux-universal-starter (In progress)

This application provides an **universal** rendering (the ability to render on server-side too, improve the SEO and the UX in first render). The idea is to keep the stack **simple** and easy to maintain. The following technologies are used :

* [React](https://github.com/facebook/react)
* [React-router](https://github.com/ReactTraining/react-router) + [React-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
* [Redux](https://github.com/reduxjs/redux)
* [Styled-components](https://github.com/styled-components/styled-components)
* [Webpack](https://github.com/webpack)
* [Webpack-serve](https://github.com/webpack-contrib/webpack-serve) + [React-hot-loader](https://github.com/gaearon/react-hot-loader) : Client side development
* [Express](https://github.com/expressjs/express) : For the server side rendering
* [Axios](https://github.com/axios/axios) : Inside a custom http middleware
* [ESLint](https://github.com/eslint/eslint) : Inside a custom http middleware

## How it works

The main idea is you gonna use a classic client-side only for the development phase using webpack-sere combine to react-hot-loader to update components without complete reloading (especially keeping the state).

For a production mode, just build the client and the server. Then the server powered by express will provide a server side rendering and assets access. If there is no JS (some SEO engine for example), everything is fine, express will handle every routes access. Otherwise the bundle will be fetch, and React will take over the control.

## Usage

    git@github.com:Exayy/redux-fetch-middleware.git

###### Development

    npm run dev

###### Prod

    npm run build:client & npm run build:server
    npm run prod
