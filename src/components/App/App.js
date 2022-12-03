// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Header from '../Header/Header';
import { moviesApi } from '../../utils/MoviesApi.js';

function App() {
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchButtonClick = (e) => {
    e.preventDefault();
    setIsMoviesLoading(true);
    moviesApi
      .getInitialMovies() // Загружаю данные карточек
      .then((res) => {
        const moviesList = res.map((movie) => {
          let { nameRU, duration, trailerLink, image, id } = movie;
          return { nameRU, duration, trailerLink, image, id };
        });
        setMovies(
          moviesList.filter((movie) =>
            movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setIsMoviesLoading(false);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

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

  let user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
    password: '12345678',
  };

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route element={<Header />}>
              <Route
                path='movies'
                element={
                  <Movies
                    movies={movies}
                    formatTime={formatTime}
                    isMoviesLoading={isMoviesLoading}
                    searchQuery={searchQuery}
                    setSearchQuery={(e) => setSearchQuery(e.target.value)}
                    searchButtonClick={searchButtonClick}
                  />
                }
              />
              <Route
                path='saved-movies'
                element={<SavedMovies formatTime={formatTime} />}
              />
            </Route>
          </Route>
          <Route element={<Header />}>
            <Route path='profile' element={<Profile user={user} />} />
          </Route>
          <Route path='signin' element={<Login user={user} />} />
          <Route path='signup' element={<Register user={user} />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
