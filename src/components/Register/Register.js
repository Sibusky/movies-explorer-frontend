import React from 'react';
import Logo from '../Logo/Logo';
import './Register.css';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Register({ handleRegister, isLoggedIn, isFetching }) {
  const [values, errors, isValid, handleChange] =
    useFormWithValidation();

  let location = useLocation();

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister({ name, email, password });
  }

  if (isLoggedIn) {
    return <Navigate to='/movies' state={{ from: location }} replace />;
  }

  return (
    <main className='register'>
      <div className='register__container'>
        <div className='register__top'>
          <Logo />
          <h2 className='register__welcome'>Добро пожаловать!</h2>
        </div>
        <form className='register__form' onSubmit={handleSubmit}>
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
                  className={
                    errors.name
                      ? 'register__input register__input-error'
                      : 'register__input'
                  }
                  readOnly={isFetching && true}
                  id='register__input-name'
                  type='text'
                  required
                  minLength='2'
                  maxLength='30'
                  placeholder=''
                  pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
                  name='name'
                  onChange={handleChange}
                  value={values.name ? values.name : ''}
                />
                <span id='error-register-name' className='register__error'>
                  {errors.name}
                </span>
              </li>
              <li className='register__input-item'>
                <label
                  className='register__input-label'
                  htmlFor='register__input-email'
                >
                  E-mail
                </label>
                <input
                  className={
                    errors.email
                      ? 'register__input register__input-error'
                      : 'register__input'
                  }
                  readOnly={isFetching && true}
                  id='register__input-email'
                  type='email'
                  placeholder=''
                  pattern='^.+@.+\..+$'
                  name='email'
                  onChange={handleChange}
                  value={values.email ? values.email : ''}
                  required
                />
                <span id='error-register-name' className='register__error'>
                  {errors.email}
                </span>
              </li>
              <li className='register__input-item'>
                <label
                  className='register__input-label'
                  htmlFor='register__input-password'
                >
                  Пароль
                </label>
                <input
                  className={
                    errors.password
                      ? 'register__input register__input-error'
                      : 'register__input'
                  }
                  readOnly={isFetching && true}
                  id='register__input-password'
                  type='password'
                  required
                  minLength='8'
                  placeholder=''
                  name='password'
                  onChange={handleChange}
                  value={values.password ? values.password : ''}
                />
                <span id='error-register-password' className='register__error'>
                  {errors.password}
                </span>
              </li>
            </ul>
          </fieldset>
          <button
            disabled={!isValid || isFetching ? true : false}
            className={
              !isValid || isFetching
                ? 'register__submit-btn register__submit-btn_disabled'
                : 'register__submit-btn button'
            }
            type='submit'
          >
            {' '}
            {isFetching ? 'Загрузка...' : 'Зарегистрироваться'}
          </button>
        </form>
        <p className='register__signin'>
          Уже зарегистрированы?
          <Link to='/signin' className='register__signin-link link'>
            &nbsp;Войти
          </Link>
        </p>
      </div>
    </main>
  );
}
