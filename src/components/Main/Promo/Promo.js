import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './Promo.css';
import WebEarth from '../../../images/landing-logo.svg';

export default function Promo({ scrollHendler }) {

  return (
    <section className='promo'>
      <div className='promo__top'>
        <Logo />
        <div className='promo__auth-buttons'>
          <Link to='/signup' className='promo__auth-signup link'>
            Регистрация
          </Link>
          <Link to='/signin' className='promo__auth-signin link'>
            Войти
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
          <button
            className='promo__container-button button'
            onClick={scrollHendler}
          >
            Узнать больше
          </button>
        </div>
        <img
          className='promo__container-img'
          src={WebEarth}
          alt='Веб земной шар'
        />
      </div>
    </section>
  );
}
