import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Cover from './Cover'
import Portfolio from './Portfolio'
import AboutMe from './AboutMe'

const Routes = () => (
  <Router>
    <div>

      <Route exact path="/" component={Cover}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={AboutMe}/>
    </div>
  </Router>
)

export default Routes