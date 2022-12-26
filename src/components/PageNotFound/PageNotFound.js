import React from 'react';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

  let navigate = useNavigate();
  const goBack = () => navigate(-1) // Возврат назад

  return (
    <main className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <p className='page-not-found__text'>Страница не найдена</p>
      <p className='page-not-found__link-back link' 
      onClick={goBack}
      >
        Назад
      </p>
    </main>
  );
}
