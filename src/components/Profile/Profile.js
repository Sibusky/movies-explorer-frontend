import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import './Profile.css';

export default function Profile({
  userData,
  handleLogOut,
  isLoggedIn,
}) {

  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return (
    <main className='profile'>
      <h2 className='profile__greetings'>Привет, {userData.name}!</h2>
      <ul className='profile__contacts'>
        <li className='profile__contacts-item'>
          <p className='profile__contacts-item-name'>Имя</p>
          <p className='profile__contacts-user-name'>{userData.name}</p>
        </li>
        <li className='profile__contacts-item'>
          <p className='profile__contacts-item-name'>E-mail</p>
          <p className='profile__contacts-user-name'>{userData.email}</p>
        </li>
      </ul>
      <div className='profile__btns'>
        <button className='profile__btn-edit button'>Редактировать</button>
        <button className='profile__btn-logout button' onClick={handleLogOut}>
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}
