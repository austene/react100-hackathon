import React, { Component } from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/Sidebar'
import Display from './components/layout/Display'

import './App.css';

const mockData = {
  "links":{"self":"https://api.nasa.gov/neo/rest/v1/neo/3359445?api_key=DEMO_KEY"},
  "id":"3359445",
  "neo_reference_id":"3359445",
  "name":"(2006 WO1)",
  "nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3359445",
  "absolute_magnitude_h":19.2,
  "estimated_diameter":{
    "kilometers":{
      "estimated_diameter_min":0.3841978911,
      "estimated_diameter_max":0.8590926012
    },
    "meters":{
      "estimated_diameter_min":384.1978910643,
      "estimated_diameter_max":859.0926012318
    },
    "miles":{
      "estimated_diameter_min":0.2387294278,
      "estimated_diameter_max":0.5338152287
    },
    "feet":{
      "estimated_diameter_min":1260.4918089193,
      "estimated_diameter_max":2818.5453698252
    }
  },
  "is_potentially_hazardous_asteroid":false,
  "close_approach_data":[{
    "close_approach_date":"2015-09-08",
    "epoch_date_close_approach":1441695600000,
    "relative_velocity":{
      "kilometers_per_second":"3.809928817",
      "kilometers_per_hour":"13715.7437412038",
      "miles_per_hour":"8522.4297707497"
    },
    "miss_distance":{
      "astronomical":"0.346012174",
      "lunar":"134.598739624",
      "kilometers":"51762684",
      "miles":"32163842"
    },
    "orbiting_body":"Earth"
  }],
"is_sentry_object":false
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asteroids: mockData
    };
  }


  render() {
    return (
      <div className='app fluid'>
        <Header />
        <div className='row'>
          <div className='col-md-4'>
            <Sidebar />
          </div>
          <div ClassName='col-md-8'>
            <Display />
          </div>
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
