import React from 'react';
import logo from '../img/logo-img.png'

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img src={logo} alt="" />
        <h3>Meme Generator</h3>
      </a>
      <h4 className="header__project">React Course - Project 3</h4>
    </header>
  )
}

export default Header