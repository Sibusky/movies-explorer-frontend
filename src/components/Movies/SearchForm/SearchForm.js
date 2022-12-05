import React, { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ searchQuery, setSearchQuery, setIsShort, beatFilmsIsShort }) {

  const [value, setValue] = useState(''); // Двустороннее связывание для инпута

  // При нажатии на кнопку поиска записываю значение инпута для загрузки фильмов
  const searchButtonClick = (e) => {
    e.preventDefault()
    setSearchQuery(value)
  }
 
  return (
    <form className='search-form'>
      <fieldset className='search-form__fieldset'>
        <div className='search-form__input-and-button'>
          <input
            className='search-form__input-query'
            type='text'
            placeholder='Фильм'
            onChange={(e) => setValue(e.target.value)}
            value={value}
            required
          />
          <button className='search-form__button button'
          onClick={searchButtonClick}></button>
        </div>
        <div className='search-form__short-movies-switch'>
          <label className='search-form__switch'>
            <input className='search-form__checkbox' type='checkbox' checked={beatFilmsIsShort} onChange={setIsShort} />
            <span className='search-form__slider search-form__slider_round'></span>
          </label>
          <p className='search-form__short-movies-text'>Короткометражки</p>
        </div>
      </fieldset>
    </form>
  );
}
