import React, { useContext, useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Profile.css';

export default function Profile({
  handleLogOut,
  handleEditProfile,
  isFetching,
  setIsFetching,
}) {
  const [values, errors, isValid, handleChange, setValues] =
    useFormWithValidation();

  useEffect(() => {
    setIsFetching(false);
  }, [setIsFetching]);

  // Подписываюсь на контекст CurrentUserContext
  const { currentUser } = useContext(CurrentUserContext);

  // Устанавливаю данные currentUser в инпуты
  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser.name, currentUser.email]);

  // Обработчик формы
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = values;
    handleEditProfile({ name, email });
  }

  const isButtonAble =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__greetings'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__form-fieldset'>
            <ul className='profile__input-list'>
              <li className='profile__input-item'>
                <label
                  className='profile__input-label'
                  htmlFor='profile__input-name'
                >
                  Имя
                </label>
                <input
                  className={
                    errors.name
                      ? 'profile__input profile__input_error'
                      : 'profile__input'
                  }
                  readOnly={isFetching && true}
                  id='profile__input-name'
                  type='text'
                  required
                  minLength='2'
                  maxLength='30'
                  placeholder={currentUser.name}
                  pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
                  name='name'
                  onChange={handleChange}
                  value={values.name ? values.name : ''}
                />
                <span id='error-profile-name' className='profile__error'>
                  {errors.name}
                </span>
              </li>
              <li className='profile__input-item'>
                <label
                  className='profile__input-label'
                  htmlFor='profile__input-email'
                >
                  E-mail
                </label>
                <input
                  className={
                    errors.email
                      ? 'profile__input profile__input_error'
                      : 'profile__input'
                  }
                  readOnly={isFetching && true}
                  id='profile__input-email'
                  type='email'
                  placeholder={currentUser.email}
                  pattern='^.+@.+\..+$'
                  name='email'
                  onChange={handleChange}
                  value={values.email ? values.email : ''}
                  required
                />
                <span id='error-profile-name' className='profile__error'>
                  {errors.email}
                </span>
              </li>
            </ul>
          </fieldset>
          <div className='profile__btns'>
            <button
              disabled={!isButtonAble || isFetching ? true : false}
              className={
                !isButtonAble || isFetching
                  ? 'profile__btn-edit profile__btn-edit_disabled'
                  : 'profile__btn-edit button'
              }
              onClick={handleSubmit}
            >
              Редактировать
            </button>
            <button
              className='profile__btn-logout button'
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
