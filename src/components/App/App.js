// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Layout from '../Layout/Layout';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
          <Route path='profile' element={<Profile />} />
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
