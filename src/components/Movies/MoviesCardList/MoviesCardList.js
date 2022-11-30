import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import MoviePic1 from '../../../images/movie-pic.png';
import MoviePic2 from '../../../images/movie-pic2.png';
import MoviePic3 from '../../../images/movie-pic3.png';

export default function MoviesCardList() {
  let movie1 = {
    name: '33 слова о дизайне',
    link: MoviePic1,
    duration: '1ч 40мин',
  };

  let movie2 = {
    name: 'Киноальманах «100 лет дизайна»',
    link: MoviePic2,
    duration: '1ч 40мин',
  };

  let movie3 = {
    name: 'В погоне за Бенкси',
    link: MoviePic3,
    duration: '1ч 40мин',
  };

  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie1} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie2} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie3} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie1} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie2} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie3} />
      </ul>
      <ul className='movies-cards__list'>
        <MoviesCard movie={movie1} />
      </ul>
      <button className='movies-cards__more-btn button'>Ещё</button>
    </section>
  );
}
