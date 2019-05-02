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
    
    return(
      <div className='card'>
        <div className='card-header'>Asteroid - { selectedAsteroid.name }</div>
        <div className='card-body'>
          <h4 className='card-title'><u>Asteroid Statistics</u></h4>
          <dl className='card-text row'>
            <dt className='col-sm-3'>Approach Date</dt>
            <dd className='col-sm-9'>{ selectedAsteroid.close_approach_data[0].close_approach_date }</dd>
            <dt className='col-sm-3'>ID</dt>
            <dd className='col-sm-9'>#{ selectedAsteroid.id }</dd>
            <dt className='col-sm-3'>Speed</dt>
            <dd className='col-sm-9'>{ selectedAsteroid.close_approach_data[0].relative_velocity.miles_per_hour } miles per hour</dd>
            <dt className='col-sm-3'>Earth miss distance</dt>
            <dd className='col-sm-9'>{ selectedAsteroid.close_approach_data[0].miss_distance.miles } miles</dd>
            <dt className='col-sm-3'>Hazardous asteroid?</dt>
            <dd className='col-sm-9'>{selectedAsteroid.is_potentially_hazardous_asteroid ? " Yes...uh-oh..." : " Nope.  We're good...for now!" }</dd>
          </dl>
        </div>
        <div className='card-footer '>
          <dl className='row'>
            <dt className='col-sm-3'>What more details?</dt>
            <dd classname='col-sm-9 text-primary'><a href={ selectedAsteroid.nasa_jpl_url }>Click Here</a></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default AsteroidInfo;
