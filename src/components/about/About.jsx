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
              I'm a Front-End Developer from Rio de Janeiro, Brazil, now based
              in Lisbon. With a background in jewelry design and
              entrepreneurship, I bring a strategic perspective to website
              design and user experience. After years in the industry, I
              switched to tech to build intelligent solutions that delight
              users. I value creating inclusive environments that prioritize
              diversity, believing this leads to more effective solutions. I'm a
              creative thinker, passionate about collaborating with dynamic
              teams to positively impact people's lives.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
