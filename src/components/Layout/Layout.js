import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css'
import { useLocation } from 'react-router-dom';

export default function Layout() {
  let location = useLocation();

  return (
    <div className='layout'>
      {location.pathname !== '/' && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}
