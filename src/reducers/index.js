import { combineReducers } from 'redux'

import counter from './counter'
import repo from './repo'
import session from './session'

export default combineReducers({
  counter,
  repo,
  session,
})
