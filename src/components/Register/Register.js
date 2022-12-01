import React from 'react';
import Logo from '../Logo/Logo';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register({ user }) {
  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__top'>
          <Logo />
          <h2 className='register__welcome'>Добро пожаловать!</h2>
        </div>
        <form className='register__form'>
          <fieldset className='register__form-fieldset'>
            <ul className='register__input-list'>
              <li className='register__input-item'>
                <label
                  className='register__input-label'
                  htmlFor='register__input-name'
                >
                  Имя
                </label>
                <input
                  className='register__input'
                  id='register__input-name'
                  type='text'
                  placeholder=''
                  name='user-name'
                  // onChange={handleChange}
                  value={user.name}
                  required
                />
                <span
                  id='error-register-name'
                  className='register__error'
                ></span>
              </li>
              <li className='register__input-item'>
                <label
                  className='register__input-label'
                  htmlFor='register__input-email'
                >
                  E-mail
                </label>
                <input
                  className='register__input'
                  id='register__input-email'
                  type='email'
                  placeholder=''
                  name='user-email'
                  // onChange={handleChange}
                  value={user.email}
                  required
                />
                <span
                  id='error-register-name'
                  className='register__error'
                ></span>
              </li>
              <li className='register__input-item'>
                <label
                  className='register__input-label'
                  htmlFor='register__input-password'
                >
                  Пароль
                </label>
                <input
                  className='register__input register__input-error'
                  id='register__input-password'
                  type='password'
                  placeholder=''
                  name='password'
                  // onChange={handleChange}
                  value={'values.password'}
                  required
                />
                <span id='error-register-password' className='register__error'>
                  Что-то пошло не так...
                </span>
              </li>
            </ul>
          </fieldset>
          <button className='register__submit-btn button' type='submit'>
            Зарегистрироваться
          </button>
        </form>
        <p className='register__signin'>
          Уже зарегистрированы?
          <Link to='/signin' className='register__signin-link link'>
            &nbsp;Войти
          </Link>
        </p>
      </div>
    </section>
  );
}
