import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from './Auth'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        {!Auth.isAuthorised() && <Link to="/register">Register</Link>}
        {!Auth.isAuthorised() && <Link to="/login">Login</Link>}
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
