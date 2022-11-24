import React from 'react'
import Promo from './Promo/Promo'
import './Main.css'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'

export default function Main() {
  return (
    <div>
        <Promo />
        <AboutProject />
        <Techs />
    </div>
  )
}
