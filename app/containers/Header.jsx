import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push }  from 'react-router-redux';

import Header from '../components/Header';

class HeaderContainer extends Component{
  render(){
    return <Header {...this.props} />
  }
};

const mapDispatchToProps = (dispatch)=>({
  goToHome(){
    dispatch(push('/'))
  },
  goToConverter(){
    dispatch(push('/converter'))
  }
});

export default connect(null, mapDispatchToProps)(HeaderContainer);
