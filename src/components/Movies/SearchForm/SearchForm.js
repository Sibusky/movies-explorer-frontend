import React from 'react';
import './SearchForm.css';

function SearchForm({
  beatFilmsIsShort,
  setBeatFilmsIsShort,
  searchButtonClick,
  emptyInputError,
  inputValue,
  setInputValue,
}) {
  return (
    <form className='search-form'>
      <fieldset className='search-form__fieldset'>
        <div className='search-form__input-and-button'>
          <input
            className={
              emptyInputError
                ? 'search-form__input-query search-form__input-query-error'
                : 'search-form__input-query'
            }
            type='text'
            placeholder='Фильм'
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            required
          />
          {emptyInputError && (
            <div className='search-form__input-is-empty-error'>
              <p className='search-form__input-is-empty-error-text'>
                Нужно ввести ключевое слово
              </p>
            </div>
          )}
          <button
            className='search-form__button button'
            onClick={searchButtonClick}
          ></button>
        </div>
        <div className='search-form__short-movies-switch'>
          <label className='search-form__switch'>
            <input
              className='search-form__checkbox'
              type='checkbox'
              checked={beatFilmsIsShort}
              onChange={setBeatFilmsIsShort}
            />
            <span className='search-form__slider search-form__slider_round'></span>
          </label>
          <p className='search-form__short-movies-text'>Короткометражки</p>
        </div>
      </fieldset>
    </form>
  );
}

export default React.memo(SearchForm);
