import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import reducers from './reducers'
import App from 'containers/App'

// Store
import { httpMiddleware } from 'middlewares'
const middlewares = [
  httpMiddleware,
]

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

render(
  <Provider store={ store }>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
)
