import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to='/'>landing</Link>
          </li>
          <li>
            <Link to='/movies'>movies</Link>
          </li>
          <li>
            <Link to='/saved-movies'>saved-movies</Link>
          </li>
          <li>
            <Link to='/profile'>profile</Link>
          </li>
          <li>
            <Link to='/signin'>signin</Link>
          </li>
          <li>
            <Link to='/signup'>signup</Link>
          </li>
          <li>
            <Link to='/nothing-here'>PageNotFound</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  );
}
