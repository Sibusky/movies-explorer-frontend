import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({
  movies,
  formatTime,
  handleLikeClick,
  onCardSave,
  onCardDelete,
  savedMovies,
  pathname,
}) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {movies.length === 0 ? (
          <p className='movies-cards__found-nothing-text'>Ничего не найдено</p>
        ) : (
          movies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id ?? movie.movieId}
              formatTime={formatTime}
              handleLikeClick={handleLikeClick}
              onCardSave={onCardSave}
              onCardDelete={onCardDelete}
              savedMovies={savedMovies}
              pathname={pathname}
            />
          ))
        )}
      </ul>
    </section>
  );
}

export default React.memo(MoviesCardList);
