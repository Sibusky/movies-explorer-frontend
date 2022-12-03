import React, {useRef} from 'react'
import Promo from './Promo/Promo'
import './Main.css'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'

export default function Main() {
  const refScroll = useRef();
  const scrollHendler = () => {
    refScroll.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <main className='main'>
        <Promo scrollHendler={scrollHendler}/>
        <AboutProject scroll={refScroll}/>
        <Techs />
        <AboutMe />
        <Portfolio />
    </main>
  )
}
