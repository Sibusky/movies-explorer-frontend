import React from 'react';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies() {

  return (
    <div className='saved-movies'>
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}
