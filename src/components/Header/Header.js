import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MenuModal from './MenuModal/MenuModal';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header({
  isMenuActvite,
  onOpenMenu,
  onClose,
  windowSize,
  isLoggedIn,
}) {
  let { pathname } = useLocation();

  // Разметка header под залогиненное состояние
  const headerIsLoggedInTrue = (
    <div className='header__navigation'>
      {windowSize > 780 && <HeaderNavigation />}
      {windowSize <= 780 && (
        <div
          className='header__menu-btn button'
          onClick={onOpenMenu}
        ></div>
      )}
    </div>
  );

  // Разметка header под разлогиненное состояние
  const headerIsLoggedInFalse = (
    <div className='header__auth-buttons'>
      <Link to='/signup' className='header__auth-signup link'>
        Регистрация
      </Link>
      <Link to='/signin' className='header__auth-signin link'>
        Войти
      </Link>
    </div>
  );

  return (
    <header
      className={pathname !== '/' ? 'header' : 'header header_landing'}
    >
      <div className='header__container'>
        <Logo />
        {isLoggedIn ? headerIsLoggedInTrue : headerIsLoggedInFalse}
      </div>
      <MenuModal
        isMenuActvite={isMenuActvite}
        onClose={onClose}
      />
    </header>
  );
}
