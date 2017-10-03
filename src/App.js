import React, { Component } from 'react';
import CardContainer from './CardContainer';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: new DistrictRepository(kinderData)
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        {/* <Controls />
        <Compare /> */}
        <CardContainer districtData={this.state.districts} />
      </div>
    );
  }
}

export default App;
