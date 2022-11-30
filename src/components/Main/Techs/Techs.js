import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title section-title'>Технологии</h2>
        <h3 className='techs__description-title'>7 технологий</h3>
        <p className='techs__description-text'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      <div className='techs__description-stack'>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>HTML</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>CSS</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>JS</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>React</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>Git</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>Express.js</p>
        </div>
        <div className='techs__description-stack-btn'>
            <p className='techs__description-stack-btn-text'>mongoDB</p>
        </div>
      </div>
    </section>
  );
}
