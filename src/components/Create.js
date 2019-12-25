import React, { useState, useEffect } from 'react';
import { Typography, Grid, makeStyles, Select, MenuItem } from '@material-ui/core';
import CharacterCreator from './CharacterCreator';
import TextCardCreator from './TextCardCreator';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        border: "solid 3px",
        borderRadius: 10,
        padding: "10px",
        margin: "10px",
        background: "#E1DFB3",
    },
    header: {
        textAlign: "center"
    },
    selectWidget: {
        paddingBottom: 10,
    }
}));

const Create = () => {
    const handleSelect = (event) => {
        setSelectedWidget(event.target.value);
        renderCreator(selectedWidget);
    }
    const renderCreator = () => {
        return (<CharacterCreator></CharacterCreator>)
    }
    const classes = useStyles();
    const [selectedWidget, setSelectedWidget] = useState("");
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} >
                <Typography variant="h4" className={classes.header}>Create Widgets</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h6">Select Widget Type :</Typography>
            </Grid>
            <Grid item xs={3}>
                <Select onChange={event => handleSelect(event)}>
                    <MenuItem value="PersonCard">Person Card</MenuItem>
                    <MenuItem value="WeatherCard">Weather Card</MenuItem>
                    <MenuItem value="TextCard">Text Card</MenuItem>
                    <MenuItem value="ImageCard">Image Card</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={12}>
                {(selectedWidget === "PersonCard") ? <CharacterCreator /> : null}
                {(selectedWidget === "WeatherCard") ? <Typography>Weather Card Creator</Typography> : null}
                {(selectedWidget === "TextCard") ? <TextCardCreator /> : null}
            </Grid>
        </Grid>
    );
}

export default Create;