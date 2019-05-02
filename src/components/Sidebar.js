import React, { Component } from 'react';
import AsteroidRow from './AsteroidRow';

class Sidebar extends Component {
  
  render() {
    console.log(this.props.asteroids);
    return(
      <div className='card m-4'>
        <div className='card-header'>
          <h4><i>List for {this.props.listDate}</i></h4>
        </div>
        <ul className='list-group list-group-flush'>
            { this.props.asteroids.map(asteroid => (
              <AsteroidRow 
              key={ asteroid.id }
              id={ asteroid.id }
              name={ asteroid.name } 
              date={ asteroid.close_approach_data[0].close_approach_date }
              handleRowBtnClick={ this.props.handleRowBtnClick }
            />
            ))} 
        </ul>
      </div>
    )
  }
}

export default Sidebar;
