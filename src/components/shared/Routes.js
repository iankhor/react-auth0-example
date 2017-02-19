import React from 'react'
import auth from './../../auth/initAuth'

//Routes
import NotFound from './NotFound'
import App from './../App';
import PageOne from './../PageOne'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/NotFound" />
    )
  )}/>
)

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <PrivateRoute path="/PageOne" component={PageOne} />  
        <Route path="/NotFound" component={NotFound} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes