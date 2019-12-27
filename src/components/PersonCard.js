import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid } from '@material-ui/core';
import boyImg from '../img/boy.svg';
import girlImg from '../img/girl.svg';
const useStyles = makeStyles(theme => ({
    root: {
        border: "solid",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        background: "#E1DFB3"
    }
}))

export default function PersonCard(props) {
    const classes = useStyles();
    return (
        <Grid container alignItems="center">
            <Grid item>
                <Paper className={classes.root}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid container item>
                            {(props.gender === "Male") ? <img src={boyImg} alt="Boy"></img> : <img src={girlImg} alt="Female"></img>}
                        </Grid>
                        <Grid container item>
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