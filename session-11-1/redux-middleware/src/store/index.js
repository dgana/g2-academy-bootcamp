import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from 'reducer'

const middleware = applyMiddleware(logger, thunk)

const store = createStore(reducer, middleware)

export default store
