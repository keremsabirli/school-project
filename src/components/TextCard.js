import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        border: "solid",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        background: "#E1DFB3"
    }
}))
const TextCard = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            {props.children}
        </Card>
    );
}

export default TextCard;