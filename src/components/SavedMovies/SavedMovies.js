import React from 'react';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies({
  movies,
  formatTime,
  pathname,
  onCardDelete,
  inputValue,
  setInputValue,
}) {

  return (
    <main className='saved-movies'>
      <SearchForm setInputValue={setInputValue} inputValue={inputValue}/>
      {!movies ? null : (
        <MoviesCardList
          movies={movies}
          formatTime={formatTime}
          pathname={pathname}
          onCardDelete={onCardDelete}
        />
      )}
    </main>
  );
}
