import React from 'react'
import Promo from './Promo/Promo'
import './Main.css'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'

export default function Main() {
  return (
    <div>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
    </div>
  )
}