import React from 'react';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies({
  movies,
  formatTime,
  pathname,
  onCardDelete,
}) {

  return (
    <main className='saved-movies'>
      <SearchForm />
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
