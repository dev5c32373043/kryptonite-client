import React, { Component, Fragment } from 'react';

import Loader from './Loader';
import Header from '../containers/Header';

const Layout = props =>(
  <Fragment>
    <Header location={props.location} />
    {props.children}
    {props.loading && <Loader />}
  </Fragment>
)

export default Layout;
