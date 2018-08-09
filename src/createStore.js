// External
import { createStore, applyMiddleware } from 'redux'

import { httpMiddleware } from 'middlewares'
import reducers from './reducers'

export default function(){

  const middlewares = [
    httpMiddleware,
  ]

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )

  return store
}
