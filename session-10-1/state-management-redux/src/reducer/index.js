import { INCREMENT, DECREMENT } from '../action/contants'
const initialState = 0

const counterFunc = (currState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return currState + action.payload
    case DECREMENT:
      return currState - action.payload
    default:
      return currState
  }
}

export default counterFunc
