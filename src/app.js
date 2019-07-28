
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'
// import 'bulma'

import Home from './components/Home'
import NavBar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import DrinkNew from './components/DrinkNew'
import ProtectedRoute from './components/ProtectedRoute'
import DrinkShow from './components/DrinkShow'

const App = () => {
  return(
    <HashRouter>
      <main>
        <NavBar />
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/drinks/new" component={DrinkNew} />
          <Route exact path="/drink/:id" component={DrinkShow} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)