import { combineReducers } from 'redux'

import counter from './counter'
import repo from './repo'

export default combineReducers({
  counter,
  repo,
})
