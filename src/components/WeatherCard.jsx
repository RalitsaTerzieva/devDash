import React, { useEffect, useState } from 'react';
import './WeatherCard.css';


const WeatherCard = ({ city = 'London' }) => {
    const [weather, setWeather] = useState(null);

    const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
   console.log('KEY', apiKey)
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.log('Failed to fetch weather', error);
            }
        };

        fetchWeather();
    }, [city, apiKey]);

    if(!weather) return <div className="weather-card">Loading...</div>;

    return (
        <div className="weather-card">
            <h3>{weather.name}</h3>
            <p className="weather-description">{weather.weather[0].description}</p>
            <p className="weather-text">Temp: {weather.main.temp}</p>
            <p className="weather-text">Wind: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;