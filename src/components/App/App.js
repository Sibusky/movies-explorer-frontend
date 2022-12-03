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

// import MoviePic1 from '../../images/movie-pic.png';
// import MoviePic2 from '../../images/movie-pic2.png';
// import MoviePic3 from '../../images/movie-pic3.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);

  useEffect(() => {
    setIsMoviesLoading(true);
    moviesApi
      .getInitialMovies() // Загружаю данные карточек
      .then((res) => {
        const moviesList = res.map((movie) => {
          let { nameRU, duration, trailerLink, image, id } = movie;
          return { nameRU, duration, trailerLink, image, id };
        });
        setMovies(moviesList);
        setIsMoviesLoading(false);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

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
                element={<Movies movies={movies} formatTime={formatTime} isMoviesLoading={isMoviesLoading} />}
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
