import React, { Component } from 'react'
import HeaderStyle from './Header.module.css'

import Img from 'ui-kit/Atom/Image'
import ActionButton from 'ui-kit/Molecule/ActionButton'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    const { src } = this.props
    return (
      <header className={HeaderStyle.container}>
        <Img src={src} alt="dummy" className="w3" />
        <ActionButton primary="Submit" secondary="Cancel" />
      </header>
    )
  }
}

export default Header
