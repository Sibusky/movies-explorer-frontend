import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../UI/Preloader/Preloader';

function Movies({
  movies,
  formatTime,
  searchQuery,
  setSearchQuery,
  isShort,
  setIsShort,
  isLoading,
  searchError,
  windowSize,
  inputValue,
  setInputValue,
  onCardSave,
  savedMovies,
}) {
  const [defaultMoviesCards, setDefaultMoviesCards] = useState(0);

  // Определяю количество карточек на странице в зависимости от ширины.
  const moviesCards = useCallback(() => {
    if (windowSize > 420) {
      setDefaultMoviesCards(7);
    } else {
      setDefaultMoviesCards(5);
    }
  }, [windowSize]);

  // Устанавливаю определённое выше количество карточек на страницу
  // Делаю через useEffect с добавлением данных поисковой строки и
  // переключателя, чтобы происходил сброс значения defaultMoviesCards
  // после нового запроса.
  useEffect(() => {
    if (searchQuery.length || isShort) {
      moviesCards();
    }
  }, [searchQuery, isShort, moviesCards]);

  // Логика нажатия на кнопку "ещё".
  const showMoreMovies = () => {
    if (windowSize > 420) {
      setDefaultMoviesCards(defaultMoviesCards + 7);
    } else {
      setDefaultMoviesCards(defaultMoviesCards + 5);
    }
  };

  // Логика исчезновения кнопки "ещё"
  const isButtonMoreHidden = useMemo(() => {
    if (movies === null) {
      return false;
    }
    if (defaultMoviesCards >= movies.length) {
      return false;
    } else {
      return true;
    }
  }, [movies, defaultMoviesCards]);

  // Записываю данные инпута в поисковый запрос
  const handleSearchButtonClick = useCallback(
    (input) => {
      setSearchQuery(input);
    },
    [setSearchQuery]
  );

  return (
    <main className='movies'>
      <SearchForm
        isShort={isShort}
        setIsShort={setIsShort}
        onSearch={handleSearchButtonClick}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {searchError && (
        <p className='movies__search-error-text'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      )}
      {isLoading ? (
        <Preloader />
      ) : (
        <div className='movies__container'>
          {!movies ? null : (
            <div className='movies__card-list-and-button'>
              <MoviesCardList
                movies={movies.slice(0, defaultMoviesCards)}
                formatTime={formatTime}
                onCardSave={onCardSave}
                savedMovies={savedMovies}
              />
              {isButtonMoreHidden && (
                <button
                  className='movies__more-btn button'
                  onClick={showMoreMovies}
                >
                  Ещё
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default React.memo(Movies);
