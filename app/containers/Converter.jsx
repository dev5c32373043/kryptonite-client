import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Converter from '../components/Converter';
import Loader    from '../components/Loader';

import converterActions from '../actions/Converter';

class ConverterContainer extends Component{
  componentWillMount(){
    const { dataReceived, getKeys } = this.props;
    if(!dataReceived) getKeys()
  }
  componentDidMount(){
    const { dataReceived } = this.props;
    if(dataReceived) this.initSelect();
  }
  componentDidUpdate(prevProps){
    if(!prevProps.dataReceived) this.initSelect();
  }
  initSelect(){
    let elements = document.querySelectorAll('select');
    for(let elem of elements){
      M.Select.init(elem)
    }
  }
  render(){
    const { dataReceived } = this.props;
    return dataReceived ? <Converter {...this.props} /> : <Loader />
  }
}

const mapStateToProps = (store)=>({
  keys: store.converterState.keys,
  result: store.converterState.result,
  dataReceived: store.converterState.dataReceived
})

const mapDispatchToProps = (dispatch)=>({
  getKeys(){
    dispatch(converterActions.getKeys())
  },
  convert(payload){
    dispatch(converterActions.convert(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConverterContainer);
