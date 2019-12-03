import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid } from '@material-ui/core';
import knightimg from '../img/knight.png';
import witchimg from '../img/witch.png';
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
        <Paper className={classes.root}>
            <Grid container spacing={1} alignItems="center">
                <Grid container item xs>
                    {(props.heroClass === "knight") ? <img src={knightimg} alt="Knight"></img> : <img src={witchimg} alt="Witch"></img>}
                </Grid>
                <Grid container item xs>
                    <Grid item xs>
                        <Typography>
                            Name : {props.heroName}
                        </Typography>
                        <Typography>
                            HP : {props.heroHp}
                        </Typography>
                        <Typography>
                            Damage : {props.heroDmg}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}