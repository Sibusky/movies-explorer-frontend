import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  return (
    <Link className='logo__link' to='/'>
      <div className='logo button'></div>
    </Link>
  );
}
