import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <h2>Home</h2>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <Header />
      <h2>About</h2>
    </>
  )
}

function UsersPage() {
  return (
    <>
      <Header />
      <h2>Users</h2>
    </>
  )
}
