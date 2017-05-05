import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Navigation from '../containers/navigation'
import About from '../containers/about'
import Blog from '../containers/blog'
import NotFound from '../components/not-found'

export default (
  <Route>
    <Route path="/" component={Navigation}>
      <IndexRoute component={About} />
      <Route path="blog" component={Blog} />
    </Route>

    <Route path="*" status={404} component={NotFound} />
  </Route>
)
