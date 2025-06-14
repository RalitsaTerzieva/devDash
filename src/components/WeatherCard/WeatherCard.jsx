import React, { useEffect, useState } from 'react';
import { useWebSocket } from '../../hooks/useWebSocket';
import './WeatherCard.css';

const WeatherCard = ({ city = 'London' }) => {
  const [weather, setWeather] = useState(null);
  const { messages } = useWebSocket();  // Get messages from WebSocket context

  const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.log('Failed to fetch weather', error);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (!weather) return <div className="weather-card">Loading...</div>;

  return (
    <div className="weather-card">
      <h3>{weather.name}</h3>
      <p className="weather-description">{weather.weather[0].description}</p>
      <p className="weather-text">Temp: {weather.main.temp}°C</p>
      <p className="weather-text">Wind: {weather.wind.speed} m/s</p>

      <div style={{ marginTop: '1rem' }}>
        <h4 className="weather-text">WebSocket Messages</h4>
        <ul style={{ maxHeight: 100, overflowY: 'auto', paddingLeft: 20 }} className="weather-text">
          {messages.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherCard;
