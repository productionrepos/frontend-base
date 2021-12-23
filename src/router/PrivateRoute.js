import React from 'react'
import propTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  component: propTypes.func.isRequired
}

export default PrivateRoute
