import React, { Component } from 'react';

class AsteroidInfo extends Component {
  render() {
    return(
      <div className='card'>
        <div className='card-header'>A. Header</div>
        <div class='card-body'>
          <h5 class='card-title'>title</h5>
          <p class='card-text'>text etc.  Add an a href if wanted!</p>
        </div>
        <div classs='card-footer'>footer</div>
      </div>
    )
  }
}

export default AsteroidInfo;
