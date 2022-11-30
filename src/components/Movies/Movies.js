import React from 'react'
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'


export default function Movies() {
  return (
    <div className='movies'>
        <SearchForm />
        <MoviesCardList />
        <button className='movies-cards__more-btn button'>Ещё</button>
    </div>
  )
}
