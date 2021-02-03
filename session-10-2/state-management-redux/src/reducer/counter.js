import { INCREMENT, DECREMENT } from '../action/contants'
const initialState = 0

const counterFunc = (currState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return currState + 1
    case DECREMENT:
      return currState - 1
    default:
      return currState
  }
}

export default counterFunc
