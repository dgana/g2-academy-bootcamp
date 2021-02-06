import {
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,
  ADD_PEOPLE
} from './constant'
import axios from 'axios'

const fetchPeopleSuccess = payload => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload
})

const fetchPeopleError = payload => ({
  type: FETCH_PEOPLE_ERROR,
  payload
})

const fetchPeopleRequest = () => ({
  type: FETCH_PEOPLE
})

export const fetchPeople = () => dispatch => {
  dispatch(fetchPeopleRequest())
  axios
    .get('https://swapi.dev/api/peopl')
    .then(res => dispatch(fetchPeopleSuccess(res.data.results)))
    .catch(err => dispatch(fetchPeopleError(err.message)))
}

export const addPeople = payload => ({
  type: ADD_PEOPLE,
  payload
})
