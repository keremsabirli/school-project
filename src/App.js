import React, { Component } from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import PersonCard from './components/PersonCard';
import CharacterCreator from './components/CharacterCreator'
import WeatherCard from './components/WeatherCard';
import Widgets from './components/Widgets';

class App extends Component {
  render() {
    return(
      <div className="App">
      <CharacterCreator></CharacterCreator>
        <Grid container spacing={1}>
          <Grid item xs>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Widgets></Widgets>
          {/* <Grid item xs>
            <PersonCard personName="Kerem" phoneNumber="05551234567"gender="boy"/>
          </Grid>
          <Grid container spacing={1}>
            <WeatherCard></WeatherCard>
          </Grid> */}
        </Grid>
      </div>
    )
  }
}

export default App;