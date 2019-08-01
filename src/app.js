
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.scss'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'



import Home from './components/Home'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import DrinkNew from './components/DrinkNew'
import ProtectedRoute from './components/ProtectedRoute'
import DrinkShow from './components/DrinkShow'

const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <BrowserRouter>
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
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
