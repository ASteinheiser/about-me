import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from '../containers/layout'
import About from '../containers/about'
import Projects from '../containers/projects'
import Guides from '../containers/guides'
import NotFound from '../components/not-found'

export default (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={About} />
      <Route path="projects" component={Projects} />
      <Route path="guides" component={Guides} />
    </Route>
    <Route path="*" status={404} component={NotFound} />
  </Route>
)
