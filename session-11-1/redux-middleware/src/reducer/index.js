import { combineReducers } from 'redux'

import people from './people'

const reducer = combineReducers({
  people
})

export default reducer

/*
STORE = {
  people: [
    {

    }
  ],
  cart: [],
  product: [],
  auth: {}
}

*/
