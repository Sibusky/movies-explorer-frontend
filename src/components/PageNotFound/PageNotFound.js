import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__text'>Страница не найдена</p>
      <Link to='/' className='page-not-found__link-back link'>
        Назад
      </Link>
    </main>
  );
}
