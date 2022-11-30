import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../Logo/Logo';
// import MenuModal from './MenuModal/MenuModal';
import './Header.css';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

export default function Header() {
  // const [modalActive, setModalActive] = useState(false);

  return (
    <div>
      <header className='header'>
        <div className='header__container'>
          <Logo />
          {/* {console.log(window.screen.width)} */}
          {/* {window.screen.width > 838 ? <HeaderNavigation /> : null} */}
          <HeaderNavigation />
        </div>
        <div
          className='header__menu-btn button'
          // onClick={() => setModalActive(true)}
        ></div>
      </header>



      {/* <MenuModal isActvite={modalActive} setIsActive={setModalActive}>
        <p>Hello</p>
        <MenuNavigation />
      </MenuModal> */}
      <Outlet />
    </div>
  );
}
