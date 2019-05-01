import React, { Component } from 'react';
import AsteroidRow from './AsteroidRow';
// import PropTypes from '.prop-types';

class Sidebar extends Component {
  
  render() {
    console.log(this.props.asteroids);
    return(
      <div className='card'>
        <div className='card-header'>Sidebar-header</div>
        <ul className='list-group list-group-flush'>
            { this.props.asteroids.map(asteroid => (
              <AsteroidRow 
              key={ asteroid.id }
              id={ asteroid.id }
              name={ asteroid.name } 
              date={ asteroid.close_approach_data[0].close_approach_date }
              handleRowBtnClick={ this.props.handleRowBtnClick }
              // velocity={ asteroid.is_potentially_hazardous_asteroid }
              // magnitude={ asteroid.absolute_magnitude_h }
            />
            ))} 
        </ul>
      </div>
    )
  }
}

// Sidebar.propTypes = {
//   asteroids: PropTypes.object.isRequired
// }

export default Sidebar;