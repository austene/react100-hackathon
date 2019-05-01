import React, { Component } from 'react';

class AsteroidInfo extends Component {
  
  render() {
    let asteroidsArray = (this.props.asteroids);
    let id = (this.props.idSelected);
    let selectedAsteroid;
    for (let i = 0; i < asteroidsArray.length; i++) {
      if(asteroidsArray[i].id !== id) {
        continue;
      } else {
        selectedAsteroid = asteroidsArray[i];
      }
    }
    console.log(JSON.stringify(selectedAsteroid));
    
    return(
      <div className='card'>
        <div className='card-header'>{ selectedAsteroid.name }</div>
        <div className='card-body'>
          <h5 className='card-title'>Name: { selectedAsteroid.name }</h5>
          <p className='card-text'>
            <span>Approach Date: { selectedAsteroid.close_approach_data[0].close_approach_date }</span>
            <br />
            <span>Speed: { selectedAsteroid.close_approach_data[0].relative_velocity.miles_per_hour } miles per hour</span>
            <br />
            <span>Earth Miss Distance: { selectedAsteroid.close_approach_data[0].miss_distance.miles } miles</span>
            <br />
            <span>Hazardous asteroid:
            {selectedAsteroid.is_potentially_hazardous_asteroid ? " Yes" : " Nope.  We're good...for now!" } </span>
          </p>
          <p>Add an a href if wanted!</p>
        </div>
        <div className='card-footer'>ID: { selectedAsteroid.id }</div>
      </div>
    )
  }
}

export default AsteroidInfo;
