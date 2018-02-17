import React, { Component, Fragment } from 'react';

export default class Converter extends Component{
  constructor(props){
    super(props)
    this.onAmountChange = this.onAmountChange.bind(this);
  }
  onAmountChange(e){
    const { convert } = this.props;
    const from = document.getElementById('from'),
    to = document.getElementById('to');
    if(from.value != to.value){
      convert({
        from: from.value,
        to: to.value,
        amount: e.target.value
      })
    }
  }
  renderSelect(label){
    const { keys } = this.props;
    return(
      <div className="input-field col s12">
        <select id={label.toLowerCase()}>
          <option value="" disabled defaultValue>Choose your option</option>
          {keys.map((key, index)=> <option key={index} value={key.symbol}>{key.symbol}</option>)}
        </select>
        <label>{label}</label>
      </div>
    )
  }
  render(){
    const { result } = this.props;
    return (
      <Fragment>
        <div className='valign-wrapper'>
        <form className='converter-form hoverable'>
        {this.renderSelect('From')}
        {this.renderSelect('To')}
        <div className="input-field col s12">
          <input onChange={this.onAmountChange} id="amount" type="number" />
          <label className="active" htmlFor="amount">Amount</label>
        </div>
        {result && <div id='result' className='flow-text'>{result}</div>}
        </form>
        </div>
      </Fragment>
    )
  }
}
