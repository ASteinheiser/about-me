import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import About      from '../containers/about';
import Projects   from '../containers/projects';
import Navigation from '../containers/navigation';
import NotFound   from '../components/not-found';

export default (
  <Route>
    <Route path="/" component={Navigation}>
      <IndexRoute component={Projects}/>
      <Route path="about" component={About}/>
    </Route>

    <Route path="*" status={404} component={NotFound} />
  </Route>
)
