import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero__top'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='hero__auth-buttons'>
          <Link to='/signup' className='hero__auth-signup link'>
            Регистрация
          </Link>
          <Link to='/signin' className='hero__auth-signin'>
            <button className='hero__auth-signin-button button'>Войти</button>
          </Link>
        </div>
      </div>

      <div className='hero__container'>
        <div className='hero__container-text'>
          <h1 className='hero__container-title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='hero__container-caption'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className='hero__container-button button'>Узнать больше</button>
        </div>
        <div className='hero__container-img'></div>
      </div>
    </div>
  );
}
