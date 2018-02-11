import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import homeActions from '../actions/Home';

class HomeContainer extends Component{
  componentWillMount(){
    const { dataReceived, getCurrencies } = this.props;
    if(!dataReceived) getCurrencies()
  }
  render(){
    return <Home {...this.props} />
  }
}

const mapStateToProps = (store)=>({
  currencies: store.homeState.currencies,
  dataReceived: store.homeState.dataReceived
})

const mapDispatchToProps = (dispatch)=>({
  getCurrencies(){
    dispatch(homeActions.getCurrencies())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
