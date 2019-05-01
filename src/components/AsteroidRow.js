import React, { Component } from 'react';

class AsteroidRow extends Component {

  render() {
    return(
      <button 
        type='button'
        className='list-group-item list-group-item-action'
        onClick={ () => this.props.handleRowBtnClick (this.props.id) }  
      >
        <h5>Asteroid - {this.props.name}</h5>
        <p>Date - {this.props.date}</p>
      </button>
    )
  }
}

export default AsteroidRow;
