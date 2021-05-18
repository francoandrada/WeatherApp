import React from 'react';
import style from './Card.module.css';

export default function Card({ min, max, name, img, onClose, id }) {
  // acá va tu código
  // position relative para card
  //position absolute para la x
  return (
    // <div className={style.container}>
    //   <div className={style.card, style.front}>
    //     <div className={style.btnClose}>
    //       <button onClick={onClose} >x</button>
    //     </div>
    //     <h4>{name}</h4>
    //     <div className={style.containerTemp}>
    //       <div className={style.temp}>
    //         <h5>Min</h5>
    //         <p>{min}°</p>
    //       </div>
    //       <div className={style.temp}>
    //         <h5>Max</h5>
    //         <p>{max}°</p>
    //       </div>
    //     </div>
    //     <div>
    //       <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
    //     </div>
    //   </div>
    //   <div className={style.card, style.back}>
    //     <div className={style.btnClose}>
    //       <button onClick={onClose} >x</button>
    //     </div>
    //     <h4>BACK</h4>
    //   </div>
    // </div>
    <div className={style.container}>
      <div className={style.card} className={style.front} >
        <div className={style.title}>
          <h4 >{name}</h4>
        </div>
        <div className={style.containerTemp}>
          <div className={style.temp}>
            <h5>Min</h5>
            <p>{min}°</p>
          </div>
          <div className={style.temp}>
            <h5>Max</h5>
            <p>{max}°</p>
          </div>
          <div>
            <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="60" height="60" alt="" />
          </div>
        </div>
      </div>
      <div className={style.card} className={style.back}>
        <div className={style.title}>
          <h4>BACK</h4>
        </div>
        <div className={style.btnClose}>
          <button onClick={onClose} >close</button>
        </div>

      </div>
    </div>
  );
};
