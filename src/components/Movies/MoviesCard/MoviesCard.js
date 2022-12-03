import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie }) {
  // Определяю, есть ли у карточки лайк, поставленный текущим пользователем
  //   const isLiked = card.likes.some((i) => i === currentUser.id);
  // Пока что просто ставлю и убираю лайк

  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__description'>
        <div className='movies-cards__description-container'>
          <h3 className='movies-cards__title'>{movie.name}</h3>
          <p className='movies-cards__duration'>{movie.duration}</p>
        </div>
        <button
          className='movies-cards__like-btn movies-cards__like-btn_active button'
        //   onClick={handleLikeClick}
          type='button'
        ></button>
      </div>
      <img className='movies-cards__image' alt={movie.name} src={movie.link} />
    </li>
  );
}
