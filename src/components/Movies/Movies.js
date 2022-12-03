import React, { useState, useMemo } from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../UI/Preloader/Preloader';

export default function Movies({
  movies,
  formatTime,
  isMoviesLoading,
  searchQuery,
  setSearchQuery,
  searchButtonClick,
}) {
  // const [searchQuery, setSearchQuery] = useState('');

  // const searchedMovies = movies.filter(movie => movie.nameRU.includes(searchQuery));
  // const searchMovies = (movies) => {
  //   return movies.filter(movie => movie.nameRU.includes(searchQuery))
  // }

  // const searchButtonClick = (e) => {
  //   e.preventDefault();
  //   searchMovies();
  // }

  // const searchedMovies = useMemo(() => {
  //   return movies.filter(movie => movie.nameRU.includes(searchQuery))
  // }, [searchQuery, movies])

  return (
    <main className='movies'>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchButtonClick={searchButtonClick}
      />
      {isMoviesLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} formatTime={formatTime} />
      )}
      {!isMoviesLoading && (
        <button className='movies__more-btn button'>Ещё</button>
      )}
    </main>
  );
}
