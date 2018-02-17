import React from 'react';
import { Route } from 'react-router';

import Layout from './components/Layout';

const RouteWithLayout = ({component: Component, ...props })=>(
  <Route {...props}
    render={()=> <Layout {...props}><Component /></Layout> } />
)

export default RouteWithLayout;
