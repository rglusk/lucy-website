import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Cover from './Cover'
import Overview from './Overview'
import AboutMe from './AboutMe'

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Cover}/>
      <Route path="/overview" component={Overview}/>
      <Route path="/contact" component={AboutMe}/>
    </div>
  </Router>
)

export default Routes