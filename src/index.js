import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// Вопросы
// Сделать правильно кнопку "Узнать больше" на лендинге
// Сделать меню
// Прелоадер

// Доработать моменты на будущее
// Сделать анимацию svg https://habr.com/ru/post/450924/