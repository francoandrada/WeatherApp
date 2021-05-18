import React, { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className={style.container}>
      <form onSubmit={(e) => {
        // esto es para que no se refresque la pagina al apretar el boton
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={e => setCity(e.target.value)}
          className={style.input}
        />
        <input type="submit" value="Agregar" className={style.btn}/>
      </form>
    </div>
  );
}