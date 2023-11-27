import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import APPT from './views/appt'
import About from './views/about'
import Contacts from './views/contacts'
import DoctorsListAndName from './views/doctors-list-and-name'
import SERVICES from './views/services'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={APPT} exact path="/appt" />
        <Route component={About} exact path="/about" />
        <Route component={Contacts} exact path="/contacts" />
        <Route
          component={DoctorsListAndName}
          exact
          path="/doctors-list-and-name"
        />
        <Route component={SERVICES} exact path="/services" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
