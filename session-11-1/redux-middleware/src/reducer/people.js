import {
  FETCH_PEOPLE,
  ADD_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR
} from 'action/constant'

const initialState = {
  isLoading: true,
  result: [],
  errorMessage: ''
}

const people = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: action.payload
      }
    case FETCH_PEOPLE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    case ADD_PEOPLE:
      return {
        ...state,
        isLoading: false,
        result: [...state.result, action.payload]
      }
    default:
      return state
  }
}

export default people
