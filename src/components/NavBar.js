import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import Auth from '../../lib/Auth'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <a onClick={this.toggleNavbar}>
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </a>
      </nav>
    )
  }
}


export default withRouter(NavBar)
