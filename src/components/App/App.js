// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import { moviesApi } from '../../utils/MoviesApi.js';
// import Header from '../Header/Header';

function App() {
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [isZeroResult, setIsZeroResult] = useState(false)

  //При нажатии на кнопку поиска вывожу результаты
  const searchButtonClick = (e) => {
    e.preventDefault();
    setIsMoviesLoading(true);
    moviesApi
      .getInitialMovies() // Загружаю данные всех фильмов
      .then((res) => {
        const moviesList = res.map((movie) => {
          let { nameRU, duration, trailerLink, image, id } = movie;
          return { nameRU, duration, trailerLink, image, id };
        });
        setMovies(moviesList);
        setIsMoviesLoading(false);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };
  

  const filtredMovies = useMemo(() => {
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()))
}, [searchQuery, movies])

  // useEffect(() => {
  //   setIsMoviesLoading(true);
  //   moviesApi
  //     .getInitialMovies() // Загружаю данные карточек
  //     .then((res) => {
  //       const moviesList = res.map((movie) => {
  //         let { nameRU, duration, trailerLink, image, id } = movie;
  //         return { nameRU, duration, trailerLink, image, id };
  //       });
  //       setMovies(moviesList);
  //       setIsMoviesLoading(false);
  //     })
  //     .catch((err) => console.log(`Ошибка: ${err}`));
  // }, []);

  // Изменяю формат времени
  const formatTime = (minutes) => {
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    return `${hour}ч ${min}м`;
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route
                path='movies'
                element={
                  <Movies
                    movies={filtredMovies}
                    formatTime={formatTime}
                    isMoviesLoading={isMoviesLoading}
                    searchQuery={searchQuery}
                    setSearchQuery={(e) => setSearchQuery(e.target.value)}
                    searchButtonClick={searchButtonClick}
                    // handleShowMoreMovies={handleShowMoreMovies}
                    // isZeroResult={isZeroResult}
                  />
                }
              />
             <Route
                path='saved-movies'
                element={<SavedMovies formatTime={formatTime} />}
              />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


  // //При нажатии на кнопку поиска вывожу результаты
  // const searchButtonClick = (e) => {
  //   e.preventDefault();
  //   setIsMoviesLoading(true);
  //   moviesApi
  //     .getInitialMovies() // Загружаю данные всех фильмов
  //     .then((res) => {
  //       const moviesList = res.map((movie) => {
  //         let { nameRU, duration, trailerLink, image, id } = movie;
  //         return { nameRU, duration, trailerLink, image, id };
  //       });
  //       setMovies(
  //         moviesList.filter((movie) =>
  //           movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
  //         )
  //       );
  //       setIsMoviesLoading(false);
  //     })
  //     .catch((err) => console.log(`Ошибка: ${err}`));
  // };