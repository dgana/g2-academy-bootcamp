import React, { Component } from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: 1
    }
  }

  onChangeRoute = () => {
    const route = this.state.route === 1 ? 2 : 1
    this.setState({ route })
  }

  render() {
    const { route } = this.state

    return (
      <>
        <button onClick={this.onChangeRoute}>Ganti Komponen</button>
        {route === 1 ? <AboutUs /> : <ContactUs />}
      </>
    )
  }
}

export class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    console.log('componentDidMount dipanggil')
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount dipanggil')
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  render() {
    const { date } = this.state
    return (
      <div>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

function ContactUs() {
  return <p>Contact Us</p>
}

export default Home
