import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header'
import Sidebar from './components/Sidebar'
import Display from './components/layout/Display'
import About from './components/pages/About'
import axios from 'axios';

import './App.css';

// const mockData = 
// [
//   {
//     "links":{
//       "self":"https://api.nasa.gov/neo/rest/v1/neo/3726710?api_key=DEMO_KEY"
//     },
//       "id":"3726710",
//       "neo_reference_id":"3726710",
//       "name":"(2015 RC)",
//       "nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726710",
//       "absolute_magnitude_h":24.3,
//       "estimated_diameter":{
//         "kilometers":{
//           "estimated_diameter_min":0.0366906138,
//           "estimated_diameter_max":0.0820427065
//         },
//         "meters":{
//           "estimated_diameter_min":36.6906137531,
//           "estimated_diameter_max":82.0427064882
//         },
//         "miles":{
//           "estimated_diameter_min":0.0227984834,
//           "estimated_diameter_max":0.0509789586
//         },
//         "feet":{
//           "estimated_diameter_min":120.3760332259,
//           "estimated_diameter_max":269.1689931548
//         }
//       },
//       "is_potentially_hazardous_asteroid":false,
//       "close_approach_data":[{
//         "close_approach_date":"2015-09-08",
//         "epoch_date_close_approach":1441695600000,
//         "relative_velocity":{
//           "kilometers_per_second":"19.4850295284",
//           "kilometers_per_hour":"70146.106302123",
//           "miles_per_hour":"43586.0625520053"
//         },
//         "miss_distance":{
//           "astronomical":"0.0269230459",
//           "lunar":"10.4730644226",
//           "kilometers":"4027630.25",
//           "miles":"2502653.5"
//         },
//         "orbiting_body":"Earth"
//       }],
//       "is_sentry_object":false
//   },
//   {
//     "links":{
//       "self":"https://api.nasa.gov/neo/rest/v1/neo/3359445?api_key=DEMO_KEY"
//     },
//     "id":"3359445",
//     "neo_reference_id":"3359445",
//     "name":"(2006 WO1)",
//     "nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3359445",
//     "absolute_magnitude_h":19.2,
//     "estimated_diameter":{
//       "kilometers":{
//         "estimated_diameter_min":0.3841978911,
//         "estimated_diameter_max":0.8590926012
//       },
//       "meters":{
//         "estimated_diameter_min":384.1978910643,
//         "estimated_diameter_max":859.0926012318
//       },
//       "miles":{
//         "estimated_diameter_min":0.2387294278,
//         "estimated_diameter_max":0.5338152287
//       },
//       "feet":{
//         "estimated_diameter_min":1260.4918089193,
//         "estimated_diameter_max":2818.5453698252
//       }
//     },
//     "is_potentially_hazardous_asteroid":false,
//     "close_approach_data":[{
//       "close_approach_date":"2015-09-08",
//       "epoch_date_close_approach":1441695600000,
//       "relative_velocity":{
//         "kilometers_per_second":"3.809928817",
//         "kilometers_per_hour":"13715.7437412038",
//         "miles_per_hour":"8522.4297707497"
//       },
//       "miss_distance":{
//         "astronomical":"0.346012174",
//         "lunar":"134.598739624",
//         "kilometers":"51762684",
//         "miles":"32163842"
//       },
//       "orbiting_body":"Earth"
//     }],
//     "is_sentry_object":false
//   }
// ]

 
// const apiKey = `${process.env.REACT_APP_NASA_APPROACH_API_KEY}`;

//Today's Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asteroids: [],
      idSelected: '',
      date: today,
      APOD: '',
      APODhdurl: ''
    };
    this.handleRowBtnClick = this.handleRowBtnClick.bind(this);
  }

  handleRowBtnClick(id) {
    this.setState({ idSelected: id })
    // return console.log(`this is handleRowBtnClick id ${id}`);
  }

  componentDidMount() {
    //axios APOD call
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => this.setState({ APOD: res.data, APODhdurl: res.data.hdurl }))
      .catch(err => { console.log(err)});

    //axios asteroid approach call
    // axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-07&api_key=${process.env.REACT_APP_NASA_APPROACH_API_KEY}`)
      axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.date}&end_date=${this.state.date}&api_key=${apiKey}`)
      // .then(res => console.log(`res.data is ${JSON.stringify(res.data)}`))
      .then(res => this.setState({ asteroids: res.data.near_earth_objects[this.state.date] }))
      .catch(err => { console.log(err)});
  }

  render() {
    return (
      <Router>
        <div className='app fluid'>
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <div className='row'>
                <div className='col-md-4'>
                  <Sidebar 
                    asteroids={ this.state.asteroids }
                    handleRowBtnClick={ this.handleRowBtnClick }
                  />
                </div>
                <div className='col-md-8'>
                  <Display 
                    asteroids={ this.state.asteroids }
                    idSelected={ this.state.idSelected }
                    APODhdurl={ this.state.APODhdurl }
                  />
                </div>
              </div>
              <footer>

              </footer>
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
