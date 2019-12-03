import React from 'react';
import './App.css';
import {Grid} from '@material-ui/core';
import MyCard from './components/CharacterCard';
import CharacterCreator from './components/CharacterCreator'
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="App">
    <CharacterCreator></CharacterCreator>
      <Grid container spacing={1}>
        <Grid item xs>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <MyCard heroName="Kerem" heroHp="100" heroDmg= "10" heroClass="knight"></MyCard>
        </Grid>
        <Grid item xs>
          <MyCard heroName="İrem" heroHp="150" heroDmg= "12" heroClass="witch"></MyCard>
        </Grid>
        <Grid container spacing={1}>
          <WeatherCard></WeatherCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
