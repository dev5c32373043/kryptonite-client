import React, { Component } from 'react';

const icons = require('../icons.json');

export default class Table extends Component {
  constructor(props){
    super(props)
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }
  componentDidMount(){
    document.body.onresize = this.loadMoreHandler;
    this.loadMoreHandler()
  }
  componentWillUnmount(){
    const target = (innerWidth <= 992 ? 'tbody' : 'html');
    document.querySelector(target)
    .removeEventListener('scroll', this.loadMoreHandler)
  }
  loadMoreHandler(){
    if(location.pathname == '/'){
      const target = (innerWidth <= 992 ? 'tbody' : 'html'),
      element = document.querySelector(target);
      (element.nodeName == 'TBODY' ? element : document)
      .addEventListener('scroll', (e)=>{
        const { loading, loadMore } = this.props,
        isVerticalScroll = (target == 'html'),
        options = {
          dimension: isVerticalScroll ? 'Height' : 'Width',
          scroll: isVerticalScroll ? 'Top' : 'Left'
        };
        const currentPosition = Math.round(
          element[`scroll${options.dimension}`] - element[`scroll${options.scroll}`]
        );
        if(!loading && currentPosition == element[`client${options.dimension}`]) loadMore()
      })
    }
  }
  renderCurrencies(){
    const { currencies } = this.props;
    return currencies.map((currency)=>{
      return (
        <tr key={currency.id}>
          <td>{currency.rank}</td>
          <td>
            {icons.includes(currency.symbol) && <i className={`cc ${currency.symbol}`} />}
            {currency.name}
          </td>
          <td>{currency.symbol}</td>
          <td>{currency.price_usd}</td>
          <td>{currency.price_btc}</td>
          <td>{currency["24h_volume_usd"]}</td>
          <td>{currency.market_cap_usd}</td>
          <td>{currency.available_supply}</td>
          <td>{currency.total_supply}</td>
          <td>{`${currency.percent_change_1h}%`}</td>
          <td>{`${currency.percent_change_24h}%`}</td>
          <td>{`${currency.percent_change_7d}%`}</td>
        </tr>)
    })
  }
  render(){
    return (
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>USD price</th>
            <th>BTC count</th>
            <th>24h volume USD</th>
            <th>Market cap USD</th>
            <th>Available supply</th>
            <th>Total supply</th>
            <th>Change 1h</th>
            <th>Change 24h</th>
            <th>Change 7d</th>
          </tr>
        </thead>
        <tbody>
          {this.renderCurrencies.call(this)}
        </tbody>
      </table>
    )
  }
}
