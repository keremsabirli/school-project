import React from 'react';
import './App.css';
import {Button, Grid, Typography} from '@material-ui/core';
import MyCard from "./components/MyCard"

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs>
          <MyCard name="Kerem" hp="100" damage= "10" class="knight"></MyCard>
        </Grid>
        <Grid item xs>
          <MyCard name="İrem" hp="150" damage= "12"></MyCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
