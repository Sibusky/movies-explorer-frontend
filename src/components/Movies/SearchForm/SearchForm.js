import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <form className='search-form'>
      <fieldset className='search-form__fieldset'>
        <div className='search-form__input-and-button'>
          <input
            className='search-form__input-query'
            type='text'
            placeholder='Фильм'
          />
          <button className='search-form__button button' type='submit'></button>
        </div>
        <div className='search-form__short-movies-switch'>
          <label className='search-form__switch'>
            <input className='search-form__checkbox' type='checkbox' />
            <span className='search-form__slider search-form__slider_round'></span>
          </label>
          <p className='search-form__short-movies-text'>Короткометражки</p>
        </div>
      </fieldset>
    </form>
  );
}
