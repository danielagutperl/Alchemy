import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from './Auth'
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
      <nav>
        {Auth.isAuthorised() && <Link to="/drinks/new">Create New Drink</Link>}
        {!Auth.isAuthorised() && <Link to="/register">Register</Link>}
        {!Auth.isAuthorised() && <Link to="/login">Login</Link>}
        <a onClick={this.toggleNavbar}>
        </a>
        <Link to="/">Home</Link>
      </nav>
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
