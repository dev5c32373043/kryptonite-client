import React, { Component, Fragment } from 'react';

import Table from './Table';
import Loader from './Loader';
import Header from './Header';

export default class Home extends Component{
  isCurrenciesReceived(){
    const { dataReceived, currencies } = this.props;
    if(dataReceived){
      return <Table currencies={currencies} />
    }else{
      return <Loader />
    }
  }
  render(){
    const { loading } = this.props;
    return (
      <Fragment>
        <Header />
        {this.isCurrenciesReceived.call(this)}
        {loading && <Loader />}
      </Fragment>
    )
  }
}
