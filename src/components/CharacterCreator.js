import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@material-ui/core';
import MyCard from './CharacterCard.js'

const useStyles = makeStyles(theme => ({
    root: {
        border: "solid 3px",
        borderRadius: 10,
        padding: "10px",
        margin: "10px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}))

const CharacterCreator = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} >
            <Typography variant="h5">
                Create Character
        </Typography>
            <Grid container spacing={1}>
                <Grid item xs>
                    <form>
                        <Grid container direction="column">
                            <Grid item xs>
                                <Grid container spacing={1}>
                                    <Grid item xs>
                                        <TextField id="name" label="Name" />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
                                            <Select>
                                                <MenuItem value={"Knight"}>Knight</MenuItem>
                                                <MenuItem value={"Wizard"}>Wizard</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Button variant="contained">Create</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs>
                    <MyCard name="" class=""></MyCard>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CharacterCreator;