import React from 'react'
import "./nav.css"
import {BiHomeAlt} from "react-icons/bi"
import {BiUserCircle} from "react-icons/bi"
import {MdWork} from "react-icons/md"
import {BsBook} from "react-icons/bs"
import {RiMessage2Line} from "react-icons/ri"
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiMessage2Line />
      </a>
    </nav>
  );
}

export default Nav