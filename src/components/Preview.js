import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import axios from '../axios';
import PersonCard from './PersonCard';
import TextCard from './TextCard';
import { XMasonry, XBlock } from "react-xmasonry";

const Preview = () => {
    const [PersonWidgets, setPersonWidgets] = useState();
    const [TextWidgets, setTextWidgets] = useState();
    const useMountEffect = (fun) => useEffect(fun, [])
    useMountEffect(() => {
        axios.get("/PersonWidget").then(res => {
            setPersonWidgets(res.data);
            console.log(res.data);
        });
        axios.get("/TextWidget").then(res => {
            setTextWidgets(res.data);
            console.log(res.data);
        })
    })
    return PersonWidgets && TextWidgets ? (
        <XMasonry>
            {PersonWidgets.map(personWidget => (
                <XBlock>
                    <div>
                        <PersonCard
                            personName={personWidget.name}
                            phoneNumber={personWidget.phoneNumber}
                            gender={personWidget.gender} />
                    </div>
                </XBlock>
            )
            )}
            {TextWidgets.map(textWidget => (
                <XBlock>
                    <div>
                        <TextCard>{textWidget.text}</TextCard>
                    </div>
                </XBlock>
            ))}
            </XMasonry>
    ) : (<div>Loading</div>)
}

export default Preview;
