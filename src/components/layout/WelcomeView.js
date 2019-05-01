import React from 'react';

function WelcomeView(props) {
  console.log(props.APODhdurl);

  return (
    <div className='card'>
      <div className='card-body'>
        <p>Welcome to the Asteroid site!</p>
        <p>Please select an asteroid on the left.</p>
      </div>
      <img 
        src={props.APODhdurl} 
        className='card-img-top' 
        alt="NASA's APOD" //replace with Astronomy Picture of the Day 
        // defaultSource={'https://apod.nasa.gov/apod/ap190430.html'} 
        defaultSource={require('../../images/M33Meteor_Chokshi_960.jpg')} 
      />
    </div>
  )
}

export default WelcomeView;
