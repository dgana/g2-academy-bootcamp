import React from 'react'
import { BasicRouting, NestedRouting } from './Component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      id: 2
    }
  }

  render() {
    const { id } = this.state

    if (id === 1) return <BasicRouting />
    if (id === 2) return <NestedRouting />
  }
}

export default App
