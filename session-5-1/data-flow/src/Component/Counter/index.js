import React, { Component } from 'react'
import './styles.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 10
    }
  }

  onAdd = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  onSubtract = () => {
    this.setState(state => ({ counter: state.counter - 1 }))
  }

  render() {
    const { counter } = this.state
    return (
      <>
        <div className="flex">
          <button onClick={this.onSubtract}>-</button>
          <button onClick={this.onAdd}>+</button>
        </div>
        <p>{counter}</p>
      </>
    )
  }
}

export default Counter
