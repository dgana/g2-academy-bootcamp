import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      isLoading: true,
      page: 1
    }
    this.onClickPrev = this.onClickPrev.bind(this)
    this.onClickNext = this.onClickNext.bind(this)
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    axios
      .get('https://swapi.dev/api/people')
      .then(res =>
        this.setState({ people: res.data.results, isLoading: false })
      )
      .catch(err => console.err(err))
  }

  componentDidMount() {
    console.log('Component Did Mount')
    this.fetch()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, 'Component Did Update')
  }

  onClickPrev() {
    if (this.state.page !== 1) {
      this.setState(state => ({ page: state.page - 1 }))
    }
  }

  onClickNext() {
    this.setState(state => ({ page: state.page + 1 }))
  }

  render() {
    const { people, isLoading, page } = this.state
    console.log('Render')

    if (isLoading) return <h1>Loading...</h1>

    return (
      <div className="container">
        <div className="flex justify-between">
          <button disabled={page === 1} onClick={this.onClickPrev}>
            Prev
          </button>
          <button onClick={this.onClickNext}>Next</button>
        </div>
        <ul>
          {people.map((x, i) => (
            <li key={i}>{x.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
