import './App.css';
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import { moviesApi } from '../../utils/MoviesApi.js';

function App() {
  const [beatFilmsMovies, setBeatFilmsMovies] = useState(null);
  const [beatFilmsSearchQuery, setBeatFilmsSearchQuery] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  );
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('beatFilmsSearchQuery') ?? ''
  ); // Двустороннее связывание для инпута
  const [beatFilmsIsShort, setBeatFilmsIsShort] = useState(
    JSON.parse(localStorage.getItem('beatFilmsIsShort')) ?? false
  );
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [isLoadingBeatFilms, setIsLoadingBeatFilms] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMenuActvite, setIsMenuActive] = useState(false);
  const refWidth = useRef(); // Реф для отслеживания ширины окна

  // При нажатии на кнопку поиска записываю значение инпута для загрузки фильмов,
  // устанавливаю ошибку пустого инпута,
  // записываю данные в localStorage
  const searchButtonClick = useCallback(() => {
    if (!inputValue) {
      setEmptyInputError(true);
    }
    if (inputValue) {
      setEmptyInputError(false);
      setBeatFilmsSearchQuery(inputValue);
    }
  }, [inputValue]);

  // Сохраняю данные запроса и чекбокса в localStorage
  useEffect(() => {
    localStorage.setItem('beatFilmsSearchQuery', beatFilmsSearchQuery);
    localStorage.setItem('beatFilmsIsShort', JSON.stringify(beatFilmsIsShort));
  }, [beatFilmsMovies, beatFilmsSearchQuery, beatFilmsIsShort]);

  // Загружаю фильмы
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
  const filtredMovies = useMemo(() => {
    if (!beatFilmsMovies) {
      return null;
    }
    return beatFilmsMovies.filter(
      (movie) =>
        (beatFilmsIsShort ? movie.duration <= 40 : movie) &&
        movie.nameRU.toLowerCase().includes(beatFilmsSearchQuery.toLowerCase())
    );
  }, [beatFilmsMovies, beatFilmsSearchQuery, beatFilmsIsShort]);

  // Отслеживаю ширину окна
  const resizeHandler = debounce(() => {
    const { clientWidth } = refWidth.current || {};
    setWindowSize(clientWidth);
  }, 100);

  // Устанавливаю слушатель событий на размер окна
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);

  // Изменяю формат времени
  const formatTime = (minutes) => {
    const min = minutes % 60;
    const hour = Math.floor(minutes / 60);
    return hour ? `${hour}ч ${min}м` : `${min}м`;
  };

  return (
    <div className='App' ref={refWidth}>
      <Routes>
        <Route path='/'>
          <Route
            element={
              <Layout
                isMenuActvite={isMenuActvite}
                setIsMenuActive={setIsMenuActive}
                windowSize={windowSize}
              />
            }
          >
            <Route index element={<Main />} />
            <Route
              path='movies'
              element={
                <Movies
                  movies={filtredMovies}
                  formatTime={formatTime}
                  beatFilmsSearchQuery={beatFilmsSearchQuery}
                  beatFilmsIsShort={beatFilmsIsShort}
                  setBeatFilmsIsShort={() => {
                    setBeatFilmsIsShort(!beatFilmsIsShort);
                  }}
                  isLoading={isLoadingBeatFilms}
                  windowSize={windowSize}
                  searchError={searchError}
                  searchButtonClick={(e) =>
                    searchButtonClick(e.preventDefault())
                  }
                  emptyInputError={emptyInputError}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
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
