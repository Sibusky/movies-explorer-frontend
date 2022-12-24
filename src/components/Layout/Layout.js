import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

export default function Layout({
  isMenuActvite,
  setIsMenuActive,
  windowSize,
  isLoggedIn,
}) {
  return (
    <div className='layout'>
      <Header
        isMenuActvite={isMenuActvite}
        setIsMenuActive={setIsMenuActive}
        windowSize={windowSize}
        isLoggedIn={isLoggedIn}
      />
      <Outlet />
      <Footer />
    </div>
  );
}
