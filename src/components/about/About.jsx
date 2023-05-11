import React from "react";
import "./about.css";

import { RiMedal2Fill } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      {/* <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="profile picture of Erika" />
          </div>
        </div> */}

      <div className="about__content">
        <div className="about__cards">
          {/* <article className="about__card">
            <RiMedal2Fill className="about__icon" />
            <a href="#experience">
              <h5>Experience</h5>
            </a>
          </article>

          <article className="about__card">
            <BiLibrary className="about__icon" />
            <a href="#portfolio">
              <h5>Projects</h5>
            </a>
          </article> */}

          <article className="about__card">
            <p>
              {" "}
              Hello, my name is Erika and I'm a Front-End Developer based in Lisbon. I have a background in jewelry design and entrepreneurship, but after many years in the industry, I felt the need to challenge
              myself in a new field. The tech field made me feel curious and I decided to switch things up and jump in this new world. I am a creative thinker who wants to collaborate with dynamic teams in order to achieve a common goal, that will have an impact in peoples lives.
            </p>
          </article>
        </div>

        {/* <p>
          {" "}
          Hello, my name is Erika and I'm a Front-End Developer based in Lisbon.
          I have a background in jewelry design and entrepreneurship, but after
          many years in the industry, I felt the need to challenge myself in a
          new field.
        </p> */}
      </div>
    </section>
  );
}

export default About;
