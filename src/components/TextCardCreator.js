import React, {useState} from 'react';
import { Card, makeStyles, TextField, Button, Grid } from '@material-ui/core';
import axios from '../axios';

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

const TextCardCreator = () => {
    const [text, setText] = useState();
    var textWidgetData = {
        "text": text,
        "userId": 1,
    }
    const CreateHandler = () => {
        // axios.get("/TextWidget/1").then(res => {
        //     res.data.text = text;
        //     obj = res.data;
        //     axios.post("/TextWidget", {obj}).then(res => {
        //         console.log(res);
        //     })
        // })
        axios.post("/TextWidget", textWidgetData).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <TextField multiline className={classes.textField} onChange={event => setText(event.target.value)}></TextField>
            <Button className={classes.buttonGrid} onClick={CreateHandler}>Create</Button>
        </Card>

    );
}

export default TextCardCreator;