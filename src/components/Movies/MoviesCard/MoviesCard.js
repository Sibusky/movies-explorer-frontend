import React from 'react';
import './MoviesCard.css';

export default function MoviesCard({ movie, onCardClick, onCardLike }) {
  // Определяю, есть ли у карточки лайк, поставленный текущим пользователем
  //   const isLiked = card.likes.some((i) => i === currentUser.id);
  // Пока что просто ставлю и убираю лайк

  return (
    <li className='movie__item'>
      <div className='movie__description'>
        <div className='movie__description-container'>
          <h3 className='movie__title'>{movie.name}</h3>
          <p className='movie__duration'>{movie.duration}</p>
        </div>
        <button
          className='movie__like-btn movie__like-btn_active button'
        //   onClick={handleLikeClick}
          type='button'
        ></button>
      </div>
      <img className='movie__image' alt={movie.name} src={movie.link} />
    </li>
  );
}
