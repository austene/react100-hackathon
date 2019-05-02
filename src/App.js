import React, { Component } from 'react';
import Header from './components/layout/Header'
import Sidebar from './components/Sidebar'
import Display from './components/layout/Display'
import axios from 'axios';

import './App.css';

const API_KEY = process.env.REACT_APP_NASA_API_KEY

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
  }

  componentDidMount() {
    //axios APOD call
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => this.setState({ APOD: res.data, APODhdurl: res.data.hdurl }))
      .catch(err => { console.log(err)});

    //axios asteroid approach call
      axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.date}&end_date=${this.state.date}&api_key=${API_KEY}`)
      .then(res => this.setState({ asteroids: res.data.near_earth_objects[this.state.date] }))
      .catch(err => { console.log(err)});
  }

  render() {
    return (
      <div className='app fluid'>
        <Header />
        <div className='row'>
          <div className='col-md-4'>
            <Sidebar 
              asteroids={ this.state.asteroids }
              handleRowBtnClick={ this.handleRowBtnClick }
              listDate={ this.state.date }
            />
          </div>
          <div className='col-md-8'>
            <Display 
              asteroids={ this.state.asteroids }
              idSelected={ this.state.idSelected }
              APODhdurl={ this.state.APODhdurl}
            />
          </div>
        </div>
        <footer>
          <h5 style={footerStyle}>SDCS - React Hackathon</h5>
        </footer>
      </div>
    );
  }
}

const footerStyle = {
  background: 'black',
  color: 'white',
  textAlign: 'center',
  padding:'5px'
}

export default App;
