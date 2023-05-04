import React from "react";
import {CiLinkedin} from "react-icons/ci"
import {BsGithub} from "react-icons/bs"

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/%C3%A9rika-soares-gomes-496704241/?locale=en_US"
        target="_blank"
      >
        <CiLinkedin />
      </a>
      <a href="https://github.com/erikasoaress" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
