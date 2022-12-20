import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({
  isShort,
  setIsShort,
  onSearch,
  inputValue,
  setInputValue,
}) {
  const [emptyInputError, setEmptyInputError] = useState(false);

  // Двустороннее связывание инпута
  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
  };

  // Переключение чекбокса
  const handleCheckbox = () => {
    setIsShort(!isShort);
  };

  // Обработка клика по кнопке поиска
  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setEmptyInputError(true);
    } else {
      setEmptyInputError(false);
      onSearch(inputValue);
    }
  };

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
            onChange={handleSearchInput}
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
            onClick={handleSearch}
          ></button>
        </div>
        <div className='search-form__short-movies-switch'>
          <label className='search-form__switch'>
            <input
              className='search-form__checkbox'
              type='checkbox'
              checked={isShort}
              onChange={handleCheckbox}
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
