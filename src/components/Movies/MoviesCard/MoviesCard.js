import React from 'react';
import './MoviesCard.css';
import { moviesApi } from '../../../utils/MoviesApi.js';

export default function MoviesCard({ movie, formatTime }) {
  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__description'>
        <div className='movies-cards__description-container'>
          <h3 className='movies-cards__title'>{movie.nameRU}</h3>
          <p className='movies-cards__duration'>{formatTime(movie.duration)}</p>
        </div>
        <button
          className='movies-cards__like-btn movie__like-btn_active button'
          //   onClick={handleLikeClick}
          type='button'
        ></button>
      </div>
      <a
        className='movies-cards__trailer-link link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies-cards__image'
          alt={movie.nameRU}
          src={moviesApi._baseUrl + movie.image.url}
        />
      </a>
    </li>
  );
}
