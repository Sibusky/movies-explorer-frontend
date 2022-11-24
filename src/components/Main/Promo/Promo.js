import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './Promo.css';

export default function Promo() {
  return (
    <div className='promo'>
      <div className='promo__top'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='promo__auth-buttons'>
          <Link to='/signup' className='promo__auth-signup link'>
            Регистрация
          </Link>
          <Link to='/signin' className='promo__auth-signin'>
            <button className='promo__auth-signin-button button'>Войти</button>
          </Link>
        </div>
      </div>
      <div className='promo__container'>
        <div className='promo__container-text'>
          <h1 className='promo__container-title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='promo__container-caption'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className='promo__container-button button'>
            Узнать больше
          </button>
        </div>
        <div className='promo__container-img'></div>
      </div>
    </div>
  );
}
