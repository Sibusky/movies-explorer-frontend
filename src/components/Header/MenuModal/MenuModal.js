import React from 'react';
import './MenuModal.css';
import { NavLink } from 'react-router-dom';

export default function MenuModal({ isActvite, setIsActive }) {
  return (
    <div
      className={isActvite ? 'menu menu_opened' : 'menu'}
      onClick={() => setIsActive(false)}
    >
      <div
        className={
          isActvite ? 'menu__content menu__content_opened' : 'menu__content'
        }
        onClick={(e) => e.stopPropagation()}
      >
        <nav className='menu__navigator'>
          <ul className='menu__navigator-list'>
            <li className='menu__navigator-list-item'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'menu__navigator-link menu__navigator-link_active link'
                    : 'menu__navigator-link link'
                }
              >
                Главная
              </NavLink>
            </li>
            <li className='menu__navigator-list-item'>
              <NavLink
                to='/movies'
                className={({ isActive }) =>
                  isActive
                    ? 'menu__navigator-link menu__navigator-link_active link'
                    : 'menu__navigator-link link'
                }
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Фильмы
              </NavLink>
            </li>
            <li className='menu__navigator-list-item'>
              <NavLink
                to='/saved-movies'
                className={({ isActive }) =>
                  isActive
                    ? 'menu__navigator-link menu__navigator-link_active link'
                    : 'menu__navigator-link link'
                }
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className='menu__navigator-list-item'>
              <NavLink to='/profile' className='menu__account-btn-link'>
                <div className='menu__account-btn button'></div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className='menu__close-btn button'
          onClick={() => {
            setIsActive(false);
          }}
        ></button>
      </div>
    </div>
  );
}
