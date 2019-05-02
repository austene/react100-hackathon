import React from 'react';

function WelcomeView(props) {
  return (
    <div className='card'>
      <div className='card-body text-center'>
        <h3 className='font-weight-bold'>Welcome to Today's Asteroid site!</h3>
        <p>Please select an asteroid on the left.</p>
      </div>
      <img 
        src={props.APODhdurl} 
        className='card-img-top' 
        alt="NASA's Astronomy Picture of the Day" //APOD 
      />
    </div>
  )
}

export default WelcomeView;
