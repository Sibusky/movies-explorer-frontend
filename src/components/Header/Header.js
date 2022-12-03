import React, { useEffect, useState, useRef } from 'react';
import Logo from '../Logo/Logo';
import MenuModal from './MenuModal/MenuModal';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header() {
  const [size, setSize] = useState();
  const [isActvite, setIsActive] = useState(false);
  const refWidth = useRef();

  const resizeHandler = () => {
    const { clientWidth } = refWidth.current || {};
    setSize(clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <header className='header' ref={refWidth}>
      <div className='header__container'>
        <Logo />
        {size > 780 && <HeaderNavigation />}
      </div>
      {size <= 780 && (
        <div
          className='header__menu-btn button'
          onClick={() => {
            setIsActive(true);
          }}
        ></div>
      )}
      <MenuModal isActvite={isActvite} setIsActive={setIsActive} />
    </header>
  );
}
