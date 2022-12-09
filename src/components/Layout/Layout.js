import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';
import { useLocation } from 'react-router-dom';

export default function Layout({ isMenuActvite, setIsMenuActive, windowSize }) {
  let location = useLocation();

  return (
    <div className='layout'>
      {location.pathname !== '/' && (
        <Header
          isMenuActvite={isMenuActvite}
          setIsMenuActive={setIsMenuActive}
          windowSize={windowSize}
        />
      )}
      <Outlet />
      <Footer />
    </div>
  );
}
