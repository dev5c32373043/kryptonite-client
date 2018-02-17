import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push }  from 'react-router-redux';
import Home from '../components/Home';
import homeActions from '../actions/Home';

class HomeContainer extends Component{
  componentWillMount(){
    const { dataReceived, getCurrencies, loadMore } = this.props;
    if(!dataReceived) getCurrencies()
  }
  render(){
    return <Home {...this.props} />
  }
}

const mapStateToProps = (store)=>({
  currencies: store.homeState.currencies,
  currentPage: store.homeState.currentPage,
  maxPage: store.homeState.maxPage,
  loading: store.homeState.loading,
  dataReceived: store.homeState.dataReceived
})

const mapDispatchToProps = (dispatch)=>({
  getCurrencies(){
    dispatch(homeActions.getCurrencies())
  },
  loadMore(){
    dispatch(homeActions.loadMore(true))
  },
  goToHome(){
    dispatch(push('/'))
  },
  goToConverter(){
    dispatch(push('/converter'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
