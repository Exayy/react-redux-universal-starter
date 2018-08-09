import fs from 'fs'
import express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router'
import favicon from 'serve-favicon'

import App from './src/containers/App'
import createStore from './src/createStore'
import routes from './src/routes'

// Find bundle.js file (universal-webpack library would be a better solution)
const publicFiles=fs.readdirSync('./public');
const filteredFiles = publicFiles.filter(filename => filename.slice(-9) === 'bundle.js')
const bundleFile = filteredFiles.length === 1 ? filteredFiles[0] : null
if (!bundleFile){
  console.log('Cant find bundle file, please npm run build:client');
}

const app = express();

app.use(favicon("./favicon.ico"))
app.use('/public', express.static('public'))

app.use(async (req, res) => {

  // Create store
  const store = createStore();

  // Match url and routes and call potential fetchData funcs
  const path = req.path || "/";
  const branches = matchRoutes(routes, path);
  const promises = branches
                    .filter(branch => branch.route.component.fetchData)
                    .map(filteredBranch => {
                          return filteredBranch.route.component.fetchData(store.dispatch, filteredBranch.match.params);
                    })

  // Wait all fetchData end before rendering app
  await Promise.all(promises);

  // Render
  const content = (
    <Provider store={ store }>
      <StaticRouter location={ path }>
        <App />
      </StaticRouter>
    </Provider>
  )
  const html = renderToString(
    <html>
      <head>
      </head>
      <body>
        <div id="root">{ content }</div>
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED_STATE__=${JSON.stringify(store.getState()).replace(/</g, '\\u003c')};`}} charSet="UTF-8"/>
        <script src={ '/public/' + bundleFile } charSet="UTF-8"/>
      </body>
    </html>
  )
  res
    .status(200)
    .send('<!doctype html>\n' + html);
})

const port = 3000;
app.listen(port, () => {
  console.log("Application ready, listening on port", port);
})
