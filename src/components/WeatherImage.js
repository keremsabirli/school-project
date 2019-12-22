import * as React from 'react';
import cloudy from '../img/cloudy.png';
import rainy from '../img/rainy.png';
import snowy from '../img/snowy.png';
import stormy from '../img/stormy.png';
import sunny from '../img/sunny.png';
// import darkcloud from '../img/darkcloud.png';

export default function WeatherImage(mainWeather) {
    const weatherToImg = {
        "Thunderstorm": stormy,
        "Drizzle": rainy,
        "Rain": rainy,
        "Snow": snowy,
        "Clear": sunny,
        "Clouds": cloudy
    }
        return(
            <img src={weatherToImg[mainWeather["mainWeather"]]} alt={mainWeather["mainWeather"]}></img>
        )
}