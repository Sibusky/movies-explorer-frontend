import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderNavigation.css';

export default function HeaderNavigation() {
  return (
    <div className='top'>
      <nav className='top__navigator'>
        <ul className='top__navigator-list'>
          <li className='top__navigator-list-item'>
            <NavLink
              to='/movies'
              className={({ isActive }) =>
                isActive
                  ? 'top__navigator-link top__navigator-link_active link'
                  : 'top__navigator-link link'
              }
            >
              Фильмы
            </NavLink>
          </li>
          <li className='top__navigator-list-item'>
            <NavLink
              to='/saved-movies'
              className={({ isActive }) =>
                isActive
                  ? 'top__navigator-link top__navigator-link_active link'
                  : 'top__navigator-link link'
              }
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className='top__navigator-list-item'>
            <NavLink to='/profile' className='top__account-btn-link'>
              <div className='top__account-btn button'></div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
