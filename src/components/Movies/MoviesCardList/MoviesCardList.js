import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, formatTime }) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {movies.length === 0 ? (
          <p className='movies-cards__found-nothing-text'>Ничего не найдено</p>
        ) : (
          movies.map((movie) => (
            <MoviesCard movie={movie} key={movie.id} formatTime={formatTime} />
          ))
        )}
      </ul>
    </section>
  );
}

export default React.memo(MoviesCardList);
