#developAWeatherDashboard

  import React, { useState, useEffect } from 'react';
import './App.css';

interface WeatherData {
  name: string;
  main: {
  temp: number;
  humidity: number;
  pressure: number;
  };
  weather: {
  description: string;
  icon: string;
  }[];
  wind: {
  speed: number;
  };
}

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; //replace with actual API oey from https://openweathermap.org/

const App:React.FC = () => {
  const [city, setCity] = useState<string>('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<bookean>(false);
  const [error, setError] = useState<string>('');

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error('City not found');
      const data: WeatherData = await response.json();
      setWeather(data);
    } catch (err) {
      setError((err as Error).message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  },[]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="app">
    <h1>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)}
          placeholder="Enter city name"
          />
        <button type="submit">Get Weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>
        {weather && (
      <div className="weather-info">
        <h2>
          {weather.name}
        </h2>
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}

          alt={weather.weather[0].description}
          />
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Description: {weather.weather[0].description}°</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Pressure: {weather.main.pressure}hPa</p>
        <p>Wind Speed: {weather.wind.speed}m/s</p>
      </div>
      )}
    </div>
    );
};

export default App;
