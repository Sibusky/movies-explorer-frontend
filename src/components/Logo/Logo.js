import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  return (
    <Link className='logo' to='/'>
      <div className='logo__img button'></div>
    </Link>
  );
}
