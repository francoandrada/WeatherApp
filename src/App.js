import React, { useState } from 'react';
import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Card/Cards.jsx';
// import SearchBar from './components/Nav/SearchBar/SearchBar.jsx';
// import data, { Cairns } from './data.js';
import Nav from './components/Nav/Nav.jsx'

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    )
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (

    <div className="App">
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <Cards cities={cities} onClose={onClose} />
    </div>

  );
}

export default App;
