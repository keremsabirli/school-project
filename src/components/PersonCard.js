import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid } from '@material-ui/core';
import boyImg from '../img/boy.svg';
import girlImg from '../img/girl.svg';
const useStyles = makeStyles(theme => ({
    root: {
        border: "solid 2px",
        borderRadius: 10,
        padding: "10px",
        margin: "10px"
    }
}))

export default function MyCard(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={6}>
                <Paper className={classes.root}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid container item xs>
                            {/* <PersonImage /> */}
                            {(props.gender === "boy") ? <img src={boyImg} alt="Boy"></img> : <img src={girlImg} alt="Girl"></img>}
                        </Grid>
                        <Grid container item xs>
                            <Grid item >
                                <Typography>
                                    Name : {props.personName}
                                </Typography>
                                <Typography>
                                    Phone Number : {props.phoneNumber}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}