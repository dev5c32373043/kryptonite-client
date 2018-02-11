import React, { Component } from 'react';

export default class Table extends Component {
  renderCurrencies(){
    const { currencies } = this.props;
    return currencies.map((currency)=>(
      <tr key={currency.id}>
        <td>{currency.rank}</td>
        <td>{currency.name}</td>
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
      </tr>
    ))
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
