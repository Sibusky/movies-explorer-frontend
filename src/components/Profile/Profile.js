import React from 'react';
import './Profile.css';

export default function Profile({ user }) {
  return (
    <main className='profile'>
      <h2 className='profile__greetings'>Привет, {user.name}!</h2>
      <ul className='profile__contacts'>
        <li className='profile__contacts-item'>
          <p className='profile__contacts-item-name'>Имя</p>
          <p className='profile__contacts-user-name'>{user.name}</p>
        </li>
        <li className='profile__contacts-item'>
          <p className='profile__contacts-item-name'>E-mail</p>
          <p className='profile__contacts-user-name'>{user.email}</p>
        </li>
      </ul>
      <div className='profile__btns'>
        <button className='profile__btn-edit button'>Редактировать</button>
        <button className='profile__btn-logout button'>
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}
