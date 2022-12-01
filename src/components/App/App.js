// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Main from '../Main/Main';
import Header from '../Header/Header';

function App() {
  let user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru'
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route element={<Header />}>
              <Route path='movies' element={<Movies />} />
              <Route path='saved-movies' element={<SavedMovies />} />
            </Route>
          </Route>
          <Route element={<Header />}>
            <Route path='profile' element={<Profile user={user}/>} />
          </Route>
          <Route path='signin' element={<Login user={user}/>} />
          <Route path='signup' element={<Register user={user}/>} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
