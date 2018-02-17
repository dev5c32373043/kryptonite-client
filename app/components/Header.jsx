import React, { Component } from 'react';

export default class Header extends Component{
  constructor(props){
    super(props)
  }
  defineNavLink(){
    const { goToHome, goToConverter, location } = this.props;
    if(location.pathname == '/'){
      return <a href='javascript:void(false)' onClick={goToConverter}>Convertor</a>
    }else{
      return <a href='javascript:void(false)' onClick={goToHome}>Home</a>
    }
  }
  render(){
    const { goToHome } = this.props;
    return(
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper cyan darken-2">
            <a href='javascript:void(false)' onClick={goToHome} className="brand-logo center" />
            <ul id="nav-mobile">
              <li>
                {this.defineNavLink.call(this)}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
