import React, { Component } from 'react'
import './App.css'

import Input from 'ui-kit/Atom/Input'
import Space from 'ui-kit/Atom/Space'
import Button from 'ui-kit/Atom/Button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ name: '', age: '' })
  }

  render() {
    const { name, age } = this.state
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <Input
            label="Nama"
            type="text"
            value={name}
            placeholder="Input Nama Anda"
            name="name"
            onChange={this.onChange}
          />
          <Space space="3" />
          <Input
            label="Umur"
            type="number"
            value={age}
            placeholder="Input Umur Anda"
            name="age"
            onChange={this.onChange}
          />
          <Space space="3" />
          <Button>Submit</Button>
        </form>
        <p>{name}</p>
        <p>{age}</p>
      </div>
    )
  }
}

export default App
