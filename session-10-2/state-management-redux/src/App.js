import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { increment, decrement } from './action'
import Todo from './Todo'

function App({ currCounter, incrementCounter, decrementCounter }) {
  function localDecrement() {
    if (currCounter > 0) {
      decrementCounter()
    }
  }

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
        <button onClick={incrementCounter}>+</button>
        <button onClick={localDecrement}>-</button>
        <p>Current counter : {currCounter}</p>
        <Todo />
      </header>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currCounter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(increment()),
    decrementCounter: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
