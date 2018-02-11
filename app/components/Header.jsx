import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper cyan darken-2">
            <a href="/" className="brand-logo center" />
            <ul id="nav-mobile">
              <li><a href='javascript:void(false)'>Convertor</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
