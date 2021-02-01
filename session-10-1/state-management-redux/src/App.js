import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { increment, decrement } from './action'

function App({ currCounter, incrementCounter, decrementCounter }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => incrementCounter(1)}>+</button>
        <button onClick={() => decrementCounter(1)}>-</button>
        <p>Current counter : {currCounter}</p>
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currCounter: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: payload => dispatch(increment(payload)),
    decrementCounter: payload => dispatch(decrement(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
