import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/app'
import Home from '../containers/home'
import Projects from '../containers/projects'
import Guides from '../containers/guides'
import NotFound from '../components/NotFound/NotFound'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="projects" component={Projects} />
      <Route path="guides" component={Guides} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
