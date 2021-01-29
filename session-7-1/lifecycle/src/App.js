import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount dipanggil')
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(res => {
        this.setState({ people: res.results })
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate dipanggil state sebelumnya = ', prevState)
    console.log('componentDidUpdate dipanggil state sekarang = ', this.state)
  }

  render() {
    const { people } = this.state
    return (
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Tinggi</th>
            <th>Berat</th>
          </tr>
        </thead>
        <tbody>
          {people.map((x, i) => (
            <tr key={i}>
              <td>{x.name}</td>
              <td>{x.height}</td>
              <td>{x.mass}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default App
