import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Login.css';
import { Link } from 'react-router-dom';


export default function Login({user}) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

    // Обработчик формы
    function handleSubmit(e) {
      e.preventDefault();
      // const { email, password } = values;
      // handleRegister({ email, password });
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
                <label className='login__input-label' htmlFor='login__input-email'>
                  E-mail
                </label>
                <input
                  className='login__input'
                  id='login__input-email'
                  type='text'
                  placeholder=''
                  name='user-email'
                  onChange={e => setValues({...values, email: e.target.value})}
                  value={values.email}
                  required
                />
                <span id='error-login-email' className='login__error'></span>
              </li>
              <li className='login__input-item'>
                <label className='login__input-label' htmlFor='login__input-password'>
                  Пароль
                </label>
                <input
                  className='login__input'
                  id='login__input-password'
                  type='password'
                  placeholder=''
                  name='user-password'
                  onChange={e => setValues({...values, password: e.target.value})}
                  value={values.password}
                  required
                />
                <span id='error-login-password' className='login__error'></span>
              </li>
            </ul>
          </fieldset>
          <button className='login__submit-btn button' type='submit'>
            Войти
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
