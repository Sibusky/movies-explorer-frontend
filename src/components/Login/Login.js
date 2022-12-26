import React from 'react';
import Logo from '../Logo/Logo';
import './Login.css';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function Login({ handleLogin, isLoggedIn, isFetching }) {
  const [values, errors, isValid, handleChange, resetForm] =
    useFormWithValidation();

  let location = useLocation();

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    handleLogin({ email, password });
    resetForm();
  }

  if (isLoggedIn) {
    return <Navigate to='/movies' state={{ from: location }} replace />;
  }

  return (
    <main className='login'>
      <div className='login__container'>
        <div className='login__top'>
          <Logo />
          <h2 className='login__welcome'>Рады видеть!</h2>
        </div>
        <form className='login__form' onSubmit={handleSubmit}>
          <fieldset className='login__form-fieldset'>
            <ul className='login__input-list'>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-email'
                >
                  E-mail
                </label>
                <input
                  className={
                    errors.email
                      ? 'login__input login__input-error'
                      : 'login__input'
                  }
                  id='login__input-email'
                  type='email'
                  placeholder=''
                  name='email'
                  onChange={handleChange}
                  value={values.email ? values.email : ''}
                  required
                />
                <span id='error-login-email' className='login__error'>
                  {errors.email}
                </span>
              </li>
              <li className='login__input-item'>
                <label
                  className='login__input-label'
                  htmlFor='login__input-password'
                >
                  Пароль
                </label>
                <input
                  className={
                    errors.password
                      ? 'login__input login__input-error'
                      : 'login__input'
                  }
                  id='login__input-password'
                  type='password'
                  placeholder=''
                  name='password'
                  minLength='8'
                  onChange={handleChange}
                  value={values.password ? values.password : ''}
                  required
                />
                <span id='error-login-password' className='login__error'>
                  {errors.password}
                </span>
              </li>
            </ul>
          </fieldset>
          <button
            disabled={isValid ? false : true}
            className={
              isValid
                ? 'login__submit-btn button'
                : 'login__submit-btn login__submit-btn_disabled'
            }
            type='submit'
          >
            {isFetching ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
        <p className='login__signin'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='login__signin-link link'>
            &nbsp;Регистрация
          </Link>
        </p>
      </div>
    </main>
  );
}
