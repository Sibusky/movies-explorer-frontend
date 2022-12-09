import React, { useEffect, useState, useRef } from 'react';
import Logo from '../Logo/Logo';
import MenuModal from './MenuModal/MenuModal';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header({ isMenuActvite, setIsMenuActive, windowSize }) {

  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        {windowSize > 780 && <HeaderNavigation />}
      </div>
      {windowSize <= 780 && (
        <div
          className='header__menu-btn button'
          onClick={() => {
            setIsMenuActive(true);
          }}
        ></div>
      )}
      <MenuModal isMenuActvite={isMenuActvite} setIsMenuActive={setIsMenuActive} />
    </header>
  );
}
