import { combineReducers } from 'redux'

import counter from './counter'
import todo from './todo'

const reducer = combineReducers({
  counter,
  todo
})

export default reducer
