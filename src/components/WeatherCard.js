import { Component } from 'react';
import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import WeatherImage from './WeatherImage';
const styles = theme => ({
    root: {
        border: "solid 2px",
        borderRadius: 10,
        padding: "10px",
        margin: "10px"
    }
});


class WeatherCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    async makeRequest() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const weatherApiUrl = 'https://samples.openweathermap.org/data/2.5/weather?id=745042&appid=1881222ceafd222eb7f5212f0f0adaa7';
        const response = await fetch(proxyUrl + weatherApiUrl);
        const data = response.json().then((data) => {
            console.log(data);
            this.setState({
                isLoaded: true,
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                mainMessage: data.weather[0].main
            });
        });
        return data;
    }
    componentDidMount() {
        this.makeRequest();
    }
    render() {
        const { temp, city, country, isLoaded, mainMessage } = this.state;
        const { classes } = this.props
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Paper className={classes.root}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid container item xs>
                        <WeatherImage mainWeather={mainMessage}/>
                        </Grid>
                        <Grid container item xs>
                            <Grid item xs>
                                <Typography>
                                    City: {city}
                                </Typography>
                                <Typography>
                                    Country: {country}
                                </Typography>
                                <Typography>
                                    Temperature: {((temp - 32) / 1,8)}
                                </Typography>
                                <Typography>
                                    {/* Description: {this.state.descriptionweather} */}
                                </Typography>
                                <Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>

            );
        }
    }
}

export default withStyles(styles)(WeatherCard);