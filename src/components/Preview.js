import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import axios from '../axios';
import PersonCard from './PersonCard';
import TextCard from './TextCard';
import { XMasonry, XBlock } from "react-xmasonry";
import WeatherCard from './WeatherCard';
import Loader from 'react-loader-spinner';

const Preview = () => {
    const [PersonWidgets, setPersonWidgets] = useState();
    const [isPersonWidgetsLoaded, setIsPersonWidgetsLoaded] = useState(false);
    const [TextWidgets, setTextWidgets] = useState();
    const [isTextWidgetsLoaded, setIsTextWidgetsLoaded] = useState(false);
    const [WeatherWidgets, setWeatherWidgets] = useState();
    const [isWeatherWidgetsLoaded, setIsWeatherWidgetsLoaded] = useState(false);
    const useMountEffect = (fun) => useEffect(fun, [])
    useMountEffect(() => {
        try {
            axios.get("/PersonWidget").then(res => {
                setPersonWidgets(res.data);
                console.log(res.data);
            });
            setIsPersonWidgetsLoaded(true);
            console.log("person widgets loaded.");
        }
        catch {
            console.log("There was a problem loading Person widgets.");
        }
        try {
            axios.get("/TextWidget").then(res => {
                setTextWidgets(res.data);
                console.log(res.data);
            })
            setIsTextWidgetsLoaded(true);
            console.log("text widgets loaded.");
        }
        catch {
            console.log("There was a problem loading Text widgets.");
        }
        try {
            axios.get("/WeatherWidget").then(res => {
                setWeatherWidgets(res.data)
            })
            setIsWeatherWidgetsLoaded(true);
            console.log("weather widgets loaded.");
        }
        catch {
            console.log("There was a problem loading Weather widgets.");
        }
        
    })
    return (PersonWidgets && TextWidgets && WeatherWidgets) ? (
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
            {WeatherWidgets.map(weatherWidget => (
                <XBlock>
                    <div>
                        <WeatherCard 
                            city={weatherWidget.city}
                        />
                    </div>
                </XBlock>
            ))}
            </XMasonry>
    ) : (<div style="">
    <Loader 
        type="ThreeDots"
        color="#792F36"
        height={100}
        width={100}
        timeout={10000}
    />
    </div>)
}

export default Preview;
