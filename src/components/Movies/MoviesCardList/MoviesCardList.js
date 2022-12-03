import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, formatTime }) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {movies.map((movie) => (
          <MoviesCard movie={movie} key={movie.id} formatTime={formatTime}/>
        ))}
      </ul>
    </section>
  );
}
