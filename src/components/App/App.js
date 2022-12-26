import './App.css';
import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { auth } from '../../utils/Auth';
import RequireAuth from '../../utils/RequireAuth';
import debounce from 'lodash.debounce';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Tooltip from '../UI/Tooltip/Tooltip';
import { moviesApi } from '../../utils/MoviesApi.js';
import { mainApi } from '../../utils/MainApi';
import fetchIsFail from '../../images/fetch-is-fail.svg';
import fetchIsOk from '../../images/fetch-is-ok.svg';

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = useState(null);
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );
  const [beatFilmsIsShort, setBeatFilmsIsShort] = useState(
    JSON.parse(localStorage.getItem('beatFilmsIsShort')) ?? false
  );
  const [beatFilmsInputValue, setBeatFilmsInputValue] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  ); // Двустороннее связывание для инпута

  const [savedMovies, setSavedMovies] = useState(null);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState('');
  const [savedMoviesIsShort, setSavedMoviesIsShort] = useState(false);
  const [savedMoviesInputValue, setSavedMoviesInutValue] = useState('');

  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMenuActvite, setIsMenuActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  const [isInfoTooltipMessage, setIsInfoTooltipMessage] = useState({
    image: '',
    caption: '',
  });

  let { pathname } = useLocation();

  // Отслеживаю ширину окна
  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, 100);

  // Устанавливаю слушатель событий на размер окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // Изменяю формат времени
  const formatTime = (minutes) => {
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

  // Обработчик клика лайка
  const handleLikeClick = (movie) => {
    const isMovieSaved = savedMovies.some((item) => item.movieId === movie.id);
    if (!isMovieSaved) {
      mainApi
        .saveMovie({
          movieId: movie.id,
          nameRU: movie.nameRU,
          image: moviesApi._baseUrl + movie.image.url,
          trailerLink: movie.trailerLink,
          duration: movie.duration,
          country: movie.country,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          thumbnail: moviesApi._baseUrl + movie.image.formats.thumbnail.url,
          owner: movie.owner,
          nameEN: movie.nameEN,
        })
        .then((savedMovie) => setSavedMovies([savedMovie, ...savedMovies]))
        .catch((err) => console.log(err, err.status, err.message));
    } else {
      const savedMovieId = savedMovies.find(
        (item) => item.movieId === movie.id
      )._id;
      mainApi
        .deleteMovie(savedMovieId)
        .then(() => {
          setSavedMovies((state) =>
            state.filter((item) => item.movieId !== movie.id)
          );
        })
        .catch((err) => console.log(err, err.status, err.message));
    }
  };

  // Удаляю карточку из сохранённых фильмов
  const handleDeleteClick = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((err) => console.log(err, err.status, err.message));
  };

  // Получаю сохранённые фильмы
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((movies) => setSavedMovies(movies.reverse()))
        .catch((err) => setSearchError(err));
    }
  }, [isLoggedIn]);

  // Сохраняю данные запроса и чекбокса в localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('beatFilmsSearchQuery', beatFilmsSearchQuery);
      localStorage.setItem(
        'beatFilmsIsShort',
        JSON.stringify(beatFilmsIsShort)
      );
    }
  }, [isLoggedIn, beatFilmsSearchQuery, beatFilmsIsShort]);

  // Загружаю фильмы с сервера BeatFilms
  useEffect(() => {
    if (
      !beatFilmsMovies &&
      beatFilmsSearchQuery.length > 0 // Убрал из условия beatFilmsIsShort
    ) {
      if ('beatFilmsMovies' in localStorage) {
        setBeatFilmsMovies(JSON.parse(localStorage.getItem('beatFilmsMovies')));
        setBeatFilmsSearchQuery(localStorage.getItem('beatFilmsSearchQuery'));
        setBeatFilmsIsShort(
          JSON.parse(localStorage.getItem('beatFilmsIsShort'))
        );
      } else {
        setIsLoadingBeatFilms(true);
        moviesApi
          .getMovies()
          .then((movies) => {
            setBeatFilmsMovies(movies);
            localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
          })
          .catch((err) => setSearchError(err))
          .finally(() => setIsLoadingBeatFilms(false));
      }
    }
  }, [beatFilmsMovies, beatFilmsSearchQuery, beatFilmsIsShort]);

  // Фильтрую фильмы по поисковому запросу и переключателю
  const filtredMovies = useCallback((movies, searchQuery, isShort) => {
    if (!movies) {
      return null;
    }
    return movies.filter(
      (movie) =>
        (isShort ? movie.duration <= 40 : movie) &&
        movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, []);

  // Функция проверки токена
  const handleCheckToken = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      auth
        .getCurrentUser(jwt)
        .then((res) => {
          const { _id, name, email } = res;
          setIsLoggedIn(true);
          setCurrentUser({ _id, name, email });
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.log(`Ошибка: ${err}`);
        });
    }
  };

  // Проверяю выполнял ли пользователь вход ранее
  useEffect(() => {
    handleCheckToken();
  }, []);

  // Функция регистрации пользователя
  function handleRegister({ name, email, password }) {
    setIsFetching(true);
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsInfoTooltipMessage({
          image: '',
          caption: '',
        });
        setIsTooltipActive(true);
        if (err === 409) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Пользователь с указанной почтой уже существует',
          });
        }
        if (err === 500) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Ошибка сервера, попробуйте ещё раз чуть позже',
          });
        }
      })
      .finally(() => setIsFetching(false));
  }

  // Функция входа на сайт
  function handleLogin({ email, password }) {
    setIsFetching(true);
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          handleCheckToken();
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsInfoTooltipMessage({
          image: '',
          caption: '',
        });
        setIsTooltipActive(true);
        if (err === 401) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Почта или пароль не верные',
          });
        }
        if (err === 400) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Пользователя с такой почтой не существует',
          });
        }
        if (err === 500) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Ошибка сервера, попробуйте ещё раз чуть позже',
          });
        }
      })
      .finally(() => setIsFetching(false));
  }

  // Функция редактирования данных профиля
  const handleEditProfile = ({ name, email }) => {
    mainApi
      .editProfile(name, email)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
        setIsInfoTooltipMessage({
          image: '',
          caption: '',
        });
        setIsTooltipActive(true);
        setIsInfoTooltipMessage({
          image: fetchIsOk,
          caption: 'Данные успешно изменены',
        });
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsInfoTooltipMessage({
          image: '',
          caption: '',
        });
        setIsTooltipActive(true);
        if (err === 409) {
          setIsInfoTooltipMessage({
            image: fetchIsFail,
            caption: 'Пользователь с указанной почтой уже существует',
          });
        }
      });
  };

  // Функция выхода пользователя
  function handleLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('beatFilmsMovies');
    localStorage.removeItem('beatFilmsSearchQuery');
    localStorage.removeItem('beatFilmsIsShort');
    setBeatFilmsMovies(null);
    setBeatFilmsSearchQuery('');
    setBeatFilmsIsShort(false);
    setBeatFilmsInputValue('');
    setSavedMovies(null);
    setSavedMoviesSearchQuery('');
    setSavedMoviesIsShort(false);
    setSavedMoviesInutValue('');
    setIsLoggedIn(false);
    setCurrentUser({
      _id: '',
      name: '',
      email: '',
    });
  }

  // Открытие меню в хедере
  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  // Закрытие модальных окон
  const closeModal = () => {
    setIsMenuActive(false);
    setIsTooltipActive(false);
  };

  // Функция закрытия окон по esc
  useEffect(() => {
    function closeByEsc(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        closeModal();
      }
    }
    document.addEventListener('keydown', closeByEsc);
    return () => document.removeEventListener('keydown', closeByEsc);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className='App'>
        <Routes>
          <Route path='/'>
            <Route
              element={
                <Layout
                  isMenuActvite={isMenuActvite}
                  onOpenMenu={handleOpenMenu}
                  onClose={closeModal}
                  windowSize={windowSize}
                  isLoggedIn={isLoggedIn}
                />
              }
            >
              <Route index element={<Main />} />

              <Route
                path='movies'
                element={
                  <RequireAuth isLoggedIn={isLoggedIn}>
                    <Movies
                      movies={filtredMovies(
                        beatFilmsMovies,
                        beatFilmsSearchQuery,
                        beatFilmsIsShort
                      )}
                      formatTime={formatTime}
                      windowSize={windowSize}
                      isLoading={isLoadingBeatFilms}
                      searchQuery={beatFilmsSearchQuery}
                      setSearchQuery={setBeatFilmsSearchQuery}
                      isShort={beatFilmsIsShort}
                      setIsShort={setBeatFilmsIsShort}
                      searchError={searchError}
                      inputValue={beatFilmsInputValue}
                      setInputValue={setBeatFilmsInputValue}
                      savedMovies={savedMovies}
                      onCardSave={handleLikeClick}
                    />
                  </RequireAuth>
                }
              />
              <Route
                path='saved-movies'
                element={
                  <RequireAuth isLoggedIn={isLoggedIn}>
                    <SavedMovies
                      movies={filtredMovies(
                        savedMovies,
                        savedMoviesSearchQuery,
                        savedMoviesIsShort
                      )}
                      formatTime={formatTime}
                      windowSize={windowSize}
                      pathname={pathname}
                      setSearchQuery={setSavedMoviesSearchQuery}
                      isShort={savedMoviesIsShort}
                      setIsShort={setSavedMoviesIsShort}
                      inputValue={savedMoviesInputValue}
                      setInputValue={setSavedMoviesInutValue}
                      onCardDelete={handleDeleteClick}
                    />
                  </RequireAuth>
                }
              />
              <Route
                path='profile'
                element={
                  <RequireAuth isLoggedIn={isLoggedIn}>
                    <Profile
                      handleLogOut={handleLogOut}
                      handleEditProfile={handleEditProfile}
                      isLoggedIn={isLoggedIn}
                    />
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path='signin'
              element={
                <Login
                  handleLogin={handleLogin}
                  isLoggedIn={isLoggedIn}
                  isFetching={isFetching}
                />
              }
            />
            <Route
              path='signup'
              element={
                <Register
                  handleRegister={handleRegister}
                  isLoggedIn={isLoggedIn}
                  isFetching={isFetching}
                />
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
        <Tooltip
          isTooltipActive={isTooltipActive}
          onOpenMenu={handleOpenMenu}
          onClose={closeModal}
          caption={isInfoTooltipMessage.caption}
          image={isInfoTooltipMessage.image}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
