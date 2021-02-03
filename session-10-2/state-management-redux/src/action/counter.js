import { INCREMENT, DECREMENT, RESET_COUNTER } from './contants'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const reset = () => {
  return {
    type: RESET_COUNTER
  }
}
