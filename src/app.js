// console.log('boo')
//
// fetch('localhost:5432/alchemy')
//   .then(res => res.json())
//   .then(drinks => console.log(drinks))
//   .catch(err => console.log(err))

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'
// import 'bulma'

import Home from './components/Home'
import NavBar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
// Register
//Login
// DrinkShow
//DrinkIndex
// DrinkNew
// SecureRoute

const App = () => {
  return(
    <BrowserRouter>
      <main>
        <NavBar />
        <Switch>
          {
          //
            // <Route path="/login" component={Login} />
          }
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Home />
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
