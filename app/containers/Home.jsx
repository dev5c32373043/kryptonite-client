import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home';
import homeActions from '../actions/Home';

class HomeContainer extends Component{
  componentWillMount(){
    const { dataReceived, getCurrencies, loadMore } = this.props;
    if(!dataReceived) getCurrencies()
  }
  componentDidMount(){
    const html = document.querySelector('html');
    document.addEventListener('scroll', (e)=>{
      const { loading, loadMore } = this.props;
      const currentPosition = Math.round(html.scrollHeight  - html.scrollTop);
      if(!loading && currentPosition == html.clientHeight) loadMore()
    })
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
