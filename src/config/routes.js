import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Contact from '../containers/contact'
import Read from '../containers/read'
import Navigation from '../containers/navigation'
import NotFound from '../components/not-found'

export default (
  <Route>
    <Route path="/" component={Navigation}>
      <IndexRoute component={Read}/>
      <Route path="contact" component={Contact}/>
    </Route>

    <Route path="*" status={404} component={NotFound} />
  </Route>
)
