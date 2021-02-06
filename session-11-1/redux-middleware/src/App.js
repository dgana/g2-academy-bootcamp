import React from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { fetchPeople, addPeople } from 'action'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      height: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.props.fetch()
  }

  onSubmit() {
    const { name, height } = this.state
    const payload = { name, height: Number(height) }
    this.props.add(payload)
    this.setState({ name: '', height: '' })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { data } = this.props
    const { name, height } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            placeholder="input your name"
            value={name}
            onChange={this.onChange}
            name="name"
          />
          <input
            type="number"
            placeholder="input your height"
            value={height}
            onChange={this.onChange}
            name="height"
          />
          <button onClick={this.onSubmit}>Add</button>
          {data.isLoading ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama</th>
                  <th>Tinggi</th>
                </tr>
              </thead>
              <tbody>
                {data.result.map((x, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{x.name}</td>
                    <td>{x.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {data.errorMessage && <p>{data.errorMessage}</p>}
        </header>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  data: store.people
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchPeople()),
  add: payload => dispatch(addPeople(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
