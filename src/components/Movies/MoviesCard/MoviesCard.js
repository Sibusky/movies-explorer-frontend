import React from 'react';
import './MoviesCard.css';
import { moviesApi } from '../../../utils/MoviesApi.js';

export default function MoviesCard({ movie, formatTime }) {
  return (
    <li className='movie__item'>
      <div className='movie__description'>
        <div className='movie__description-container'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          <p className='movie__duration'>{formatTime(movie.duration)}</p>
        </div>
        <button
          className='movie__like-btn movie__like-btn_active button'
          //   onClick={handleLikeClick}
          type='button'
        ></button>
      </div>
      <a
        className='movie__trailer-link link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movie__image'
          alt={movie.nameRU}
          src={moviesApi._baseUrl + movie.image.url}
        />
      </a>
    </li>
  );
}
