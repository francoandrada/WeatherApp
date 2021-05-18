import React from 'react';
import Card from './Card';
import style from './Cards.module.css';


export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities){
    return (
      <div className={style.cards}>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}

      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
};
