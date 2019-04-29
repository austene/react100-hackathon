import React, { Component } from 'react';
import AsteroidRow from './AsteroidRow';

class Sidebar extends Component {
  render() {
    return(
      <div className='card'>
        <div className='card-header'>
          Sidebar-header
        </div>
        <ul className='list-group list-group-flush'>
          {/* <li> */}
            <AsteroidRow />
          {/* </li> */}
        </ul>
      </div>
    )
  }
}

export default Sidebar;