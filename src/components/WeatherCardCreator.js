import React, { useState } from 'react';
import { Card, Typography, makeStyles, TextField, Button, Grid } from '@material-ui/core';
import axios from '../axios';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        border: "solid",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        background: "#E1DFB3"
    },
    textField: {
        alignSelf: 'stretch',
        width: '100%',
        padding: 10
    },
    buttonGrid: {
        alignItems: 'center',
    }
}));

const WeatherCardCreator = () => {
    const classes = useStyles();
    const [cityName, setCityName] = useState();
    var weatherWidgetData = {
        "city": cityName,
        "userId": 1
    }
    const CreateHandler = () => {
        console.log(weatherWidgetData);
        axios.post("/WeatherWidget", weatherWidgetData)
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    }
    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField placeholder="City Name" className={classes.textField} onChange={event => setCityName(event.target.value)}></TextField>
                </Grid>
                <Grid item xs/>
            <Button className={classes.buttonGrid} onClick={CreateHandler}>Create</Button>
            </Grid>
        </Card>
    )
}

export default WeatherCardCreator;