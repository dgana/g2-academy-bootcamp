import React from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

const App = () => {
  const [authorized, setAuthorized] = React.useState(
    !!localStorage.getItem('auth')
  )

  const login = () => {
    localStorage.setItem('auth', '12345')
    setAuthorized(true)
  }

  const logout = () => {
    localStorage.removeItem('auth')
    setAuthorized(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row mb4">
          <button className="mr2" onClick={login}>
            Login
          </button>
          <button onClick={logout}>Logout</button>
        </div>
        {authorized && <Home />}
      </header>
    </div>
  )
}

const axios_saya = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ` }
})

function Home() {
  const [users, setUsers] = React.useState([])
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    axios_saya.get(`users`).then(res => setUsers(res.data))
  }, [])

  const onChange = e => {
    setValue(e.target.value)
  }

  const onClick = () => {
    if (value) {
      axios_saya
        .post(`users`, { name: value })
        .then(res => setUsers(state => [...state, res.data]))
    }
  }

  const onDelete = id => {
    axios_saya
      .delete(`users/${id}`)
      .then(res => setUsers(state => state.filter(x => x.id !== id)))
  }

  return (
    <>
      <div className="row">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onClick}>Submit</button>
      </div>
      <ul className="container">
        {users.map(x => (
          <div key={x.id} className="row">
            <li key={x.id}>{x.name}</li>
            <p onClick={() => onDelete(x.id)}>delete</p>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
