import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__copyright-and-links-container'>
        <p className='footer__copyright'>&copy; Алексей Смирнов 2022</p>
        <nav className='footer__nav'>
          <ul className='footer__nav-list'>
            <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='https://practicum.yandex.ru/'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__nav-list-item'>
              <a
                className='footer__nav-list-link link'
                href='https://github.com/Sibusky'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
