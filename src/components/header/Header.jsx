import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>Erika Soares</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="erika picture" />
        </div>
        <a href="#contact" className="scroll__down">
          Scrol Down
        </a>
      </div>
    </header>
  );
}

export default Header