import React, { Component } from 'react';

const NotFound = ()=>(
  <div className='not_found_container'>
    <div className='c'>
      <div className='_error_code'>404</div>
      <hr />
      <div className='_1'>THE PAGE</div>
      <div className='_2'>WAS NOT FOUND</div>
      <a className='back-button' href='/'>COME BACK HOME</a>
    </div>
  </div>
)

export default NotFound;
