import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <div className='about'>
      <h2 className='about__title'>О проекте</h2>
      <div className='about__description'>
        <h3 className='about__stages-title'>
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className='about__weeks-title'>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className='about__stages-text'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='about__weeks-text'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className='about__timeline'>
        <div className='about__backend-weeks about__timeline-item'>1 неделя</div>
        <div className='about__frontend-weeks about__timeline-item'>4 недели</div>
        <div className='about__backend about__timeline-item'>Back-end</div>
        <div className='about__frontend about__timeline-item'>Front-end</div>
      </div>
    </div>
  );
}
