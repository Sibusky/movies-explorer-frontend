import React, { useCallback } from 'react';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies({
  movies,
  formatTime,
  setSearchQuery,
  isShort,
  setIsShort,
  inputValue,
  setInputValue,
  onCardDelete,
}) {
  // Записываю данные инпута в поисковый запрос
  const handleSearchButtonClick = useCallback(
    (input) => {
      setSearchQuery(input);
    },
    [setSearchQuery]
  );

  return (
    <main className='saved-movies'>
      <SearchForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        isShort={isShort}
        setIsShort={setIsShort}
        onSearch={handleSearchButtonClick}
      />
      {!movies ? null : (
        <MoviesCardList
          movies={movies}
          formatTime={formatTime}
          // pathname={pathname}
          onCardDelete={onCardDelete}
        />
      )}
    </main>
  );
}
