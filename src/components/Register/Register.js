import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import './Register.css';
import { Link } from 'react-router-dom';

export default function Register({ handleRegister }) {
  // Объявляю переменные состояния через хук useState
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  // // Универсальный обработчик полей
  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister({ name, email, password });
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
                  className='register__input'
                  id='register__input-name'
                  type='text'
                  placeholder=''
                  name='user-name'
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  value={values.name}
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
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  value={values.email}
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
                  className='register__input'
                  id='register__input-password'
                  type='password'
                  placeholder=''
                  name='password'
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  value={values.password}
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
    </main>
  );
}
