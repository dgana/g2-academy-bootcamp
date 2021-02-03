import { ADD_TODO } from './contants'

export const addtodo = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}
