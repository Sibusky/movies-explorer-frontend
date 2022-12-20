import React from 'react';
import './MoviesCard.css';
import { moviesApi } from '../../../utils/MoviesApi.js';

function MoviesCard({
  movie,
  formatTime,
  onCardSave,
  onCardDelete,
  savedMovies,
  pathname,
}) {
  // Проверяю, находится ли фильм в сохранённых,
  // чтобы изменить кнопку лайка
  const isLiked = savedMovies
    ? savedMovies.some((item) => item.movieId === movie.id)
    : false;

  // Обработчик клика лайка
  const handleLikeClick = () => {
    onCardSave(movie);
  };

  // Обработчик клика удаления
  const handleDeleteClick = () => {
    onCardDelete(movie);
  };

  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__description'>
        <div className='movies-cards__description-container'>
          <h3 className='movies-cards__title'>{movie.nameRU}</h3>
          <p className='movies-cards__duration'>{formatTime(movie.duration)}</p>
        </div>
        {pathname === '/saved-movies' ? (
          <button
            className='movies-cards__delete-btn button'
            onClick={handleDeleteClick}
          ></button>
        ) : (
          <button
            className={
              isLiked
                ? 'movies-cards__like-btn movies-cards__like-btn_active button'
                : 'movies-cards__like-btn button'
            }
            onClick={handleLikeClick}
            type='button'
          ></button>
        )}
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
          src={
            movie.image.url ? moviesApi._baseUrl + movie.image.url : movie.image
          }
        />
      </a>
    </li>
  );
}

export default React.memo(MoviesCard);
