import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button, Divider } from '@material-ui/core';
import MuiPhoneInput from 'material-ui-phone-number';
import PersonCard from './PersonCard.js'
import color from '@material-ui/core/colors/amber';
import SuccessSnackbar from './SuccessSnackbar';
import Header from '../Paperbase/Header';
import axios from '../axios';
const useStyles = makeStyles(theme => ({
    root: {
        border: "solid 3px",
        borderRadius: 10,
        padding: "10px",
        margin: "10px",
        background: "#E1DFB3"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        background: "#CBB67D",
        marginTop: "10px"
    },
    hr: {
        background: "#792F36"
    }
}));



const CharacterCreator = () => {
    const [status, setStatusBase] = React.useState("");
    const [personWidgets, setPersonWidgets] = React.useState({});
    const classes = useStyles();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("Male");
    var personWidgetData = {
        "name": name,
        "phoneNumber": phoneNumber,
        "gender": gender,
        "userId": 1,
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(personWidgetData);
        axios.post("/PersonWidget", personWidgetData)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return (
        <div>
            <Paper className={classes.root} >
                <Typography variant="h5">
                    Create Person Info Card
        </Typography>
                <Divider />
                <Grid container spacing={1}>
                    <Grid item xs>
                        <form onSubmit={submitHandler}>
                            <Grid container direction="column">
                                <Grid item xs>
                                    <Grid container>
                                        <Grid item xs>
                                            <TextField id="name" label="Name" onChange={event => setName(event.target.value)} />
                                            {/* <TextField id="phoneNumber" label="Phone Number" onChange={event => setPhoneNumber(event.target.value)} /> */}
                                            <MuiPhoneInput
                                                defaultCountry='tr'
                                                regions={'europe'}
                                                onChange={setPhoneNumber}
                                            />
                                        </Grid>
                                        <Grid item xs >
                                            <FormControl className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select defaultValue="Male" onChange={event => setGender(event.target.value)}>
                                                    <MenuItem value={"Male"}>Male</MenuItem>
                                                    <MenuItem value={"Female"}>Female</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <Button onClick={submitHandler} className={classes.button} variant="contained">Create</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs alignItems="right">
                        <PersonCard gender={gender} personName={name} phoneNumber={phoneNumber}></PersonCard>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default CharacterCreator;