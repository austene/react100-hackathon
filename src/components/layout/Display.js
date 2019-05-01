import React from 'react';
import WelcomeView from './WelcomeView';
import AsteroidInfo from '../AsteroidInfo';

function Display(props) {
  return (
    <div>
      {!props.idSelected 
      ? (<WelcomeView 
          APODhdurl={ props.APODhdurl }
        />) 
      : (<AsteroidInfo 
          asteroids={ props.asteroids }
          idSelected={ props.idSelected }
        />
        )
      }
    </div>
  )
}


export default Display;