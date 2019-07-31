import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from './Auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
//
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

class NavBar extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <AppBar position="static">
        <Toolbar>

          {Auth.isAuthorised() && <Button color="inherit"><Link to="/drinks/new" className="link-font">Create New Drink</Link></Button>}
          {!Auth.isAuthorised() && <Button color="inherit"><Link to="/register" className="link-font">Register</Link></Button>}
          {!Auth.isAuthorised() && <Button color="inherit"><Link to="/login" className="link-font">Login</Link></Button>}
          <a onClick={this.toggleNavbar}>
          </a>
          <Button color="inherit" size="large"><Link to="/" className="link-font">HOME <FontAwesomeIcon icon={faCocktail} /></Link></Button>
        </Toolbar>
      </AppBar>
    )
  }
}





export default withRouter(NavBar)

//
// class NavBar extends PureComponent {
//   state = {
//     selectedTab: 0
//   };
//
//   render() {
//     const { selectedTab } = this.state
//     return (
//       <Paper square>
//         <Tabs
//           value={selectedTab}
//           indicatorColor="primary"
//           textColor="primary"
//           onChange={(e, newValue) => this.setState({ selectedTab: newValue })}
//           aria-label="disabled tabs example"
//         >
//           <Tab label="First" />
//           <Tab label="Second" />
//           <Tab label="Third" />
//         </Tabs>
//       </Paper>
//     )
//   }
// }
