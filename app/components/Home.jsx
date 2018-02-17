import React, { Component, Fragment } from 'react';

import Table from './Table';
import Loader from './Loader';

const Home = props =>(
  <Fragment>
    {props.dataReceived ? <Table {...props} /> : <Loader />}
    {props.loading && <Loader />}
  </Fragment>
)

export default Home;
