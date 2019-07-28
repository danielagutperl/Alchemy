import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from './Auth'

const ProtectedRoute = (props) => {
  const isAuthorised = Auth.isAuthorised()
  return isAuthorised ? <Route {...props}/> : <Redirect to="/" />
}

export default ProtectedRoute
