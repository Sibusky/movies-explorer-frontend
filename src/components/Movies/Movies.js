import React from 'react'
import './Movies.css'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'


export default function Movies({ movies, formatTime, isMoviesLoading }) {
  return (
    <div className='movies'>
        <SearchForm />
        {isMoviesLoading
          ? <Preloader />
          : <MoviesCardList movies={movies} formatTime={formatTime}/>
        }
        {isMoviesLoading
          ? null
          : <button className='movies-cards__more-btn button'>Ещё</button>
        }
        
    </div>
  )
}
