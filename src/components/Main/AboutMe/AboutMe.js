import React from 'react';
import './AboutMe.css';
import StudentPhoto from '../../../images/student-photo.jpg';

export default function AboutMe() {
  return (
    <div className='student'>
      <h2 className='student__title section-title'>Студент</h2>
      <div className='student__info-container'>
        <div className='student__info-text-container'>
          <h3 className='student__info-name'>Алексей Смирнов</h3>
          <h4 className='student__info-bio'>Веб-разработчик, 35 лет</h4>
          <p className='student__info-description'>
            Родился в Вологде, окончил электроэнергетический факультет ВоГТУ,
            инженер по специальности “Электроснабжение”, магистр техники и
            технологии. Руковожу электромонтажной бригадой, параллельно
            занимаюсь поисками работы в IT. Год назад начал изучение
            веб-разработки. Было трудно проходить курс и работать одновременно,
            но финиш совсем близко, данная работа тому подтверждение.
            Программирование - новая веха в моей жизни, через веб хочу
            положительно влиять на умы людей.
          </p>
          <a
            className='student__info-github link'
            href='https://github.com/Sibusky'
            target='_blank'
          >
            Github
          </a>
        </div>
        <img
          className='student__info-photo'
          src={StudentPhoto}
          alt='Фото студента'
        />
      </div>
    </div>
  );
}
