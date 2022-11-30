import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, onCardClick, onCardLike }) {
  return (
    <li className='movie__item'>
      <div className='movie__description'>
        <h3 className='movie__title'>{movie.name}</h3>
        <p className='movie__duration'>{movie.duration}</p>
        <button className='movie__like-btn movie__like-btn_active button' type='button'></button>
      </div>
      <img className='movie__image' alt={movie.name} src={movie.link} />
    </li>
  );
}
