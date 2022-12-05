import React, { useState, useMemo, useEffect, useCallback } from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../UI/Preloader/Preloader';

export default function Movies({ movies, formatTime, isMoviesLoading, searchQuery, setSearchQuery, searchButtonClick }) {

  const [visible, setVisible] = useState(2);
  const showMoreMovies = () => {
    setVisible((prevValue) => prevValue + 2)
  }

  console.log(movies.length, visible)



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
        <MoviesCardList movies={movies} formatTime={formatTime} visible={visible} />
      )}
      {!movies.length && <h1>Ничего не найдено</h1>}
      {/* {isZeroResult && <h1>Ничего не найдено</h1>} */}
      {visible < movies.length && (
        <button className='movies__more-btn button' 
        onClick={showMoreMovies}
        >
          Ещё</button>
      )}
    </main>
  );
}
