import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export default function MoviesCardList({ movies, formatTime, visible }) {

  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {movies.slice(0, visible).map((movie) => (
          <MoviesCard movie={movie} key={movie.id} formatTime={formatTime} />
        ))}
      </ul>
    </section>
  );
}
