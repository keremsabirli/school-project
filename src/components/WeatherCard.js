import { Component } from 'react';
import * as React from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

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
            error: null,
            isLoaded: false,
            mainweather: "",
            descriptionweather: ""
        }
    }

    // async makeRequest() {
    //     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //     const weatherApiUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=İstanbul,Turkey&appid=1881222ceafd222eb7f5212f0f0adaa7';
    //     const response = await fetch(proxyUrl + weatherApiUrl);
    //     console.log(response);
    //     const data = response.json();
    //     console.log(data);
    //     this.setState({
    //         isLoaded: true,
    //         mainweather: data.weather.main,
    //         descriptionweather: data.weather.description
    //     });
        
    //     return data;
    // }
    // componentDidMount() {
    //     this.makeRequest();
    // }
    render() {
        const { classes } = this.props;
        if(this.state.isLoaded) {
            return (
                <Paper className={classes.root}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid container item xs>
                        <img src=""></img>
                        </Grid>
                        <Grid container item xs>
                            <Grid item xs>
                            
                                <Typography>
                                    {/* Weather: {this.state.mainweather} */}
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
            )
        }
        else {
            return (
                <Paper className={classes.root}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid container item xs>
                        </Grid>
                        <Grid container item xs>
                            <Grid item xs>
                                <Typography>
                                    Weather: {this.state.mainweather}
                                </Typography>
                                <Typography>
                                    Description: {this.state.descriptionweather}
                                </Typography>
                                <Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            )
        }
    }

}

export default withStyles(styles)(WeatherCard);