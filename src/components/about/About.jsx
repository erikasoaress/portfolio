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
              I'm a Front-End Developer originally from Rio de Janeiro, Brazil,
              and I have been based in Lisbon for the past four years. With a
              background in jewelry design and entrepreneurship, I bring a
              strategic perspective to website design and user experience.
              However, after many years in the industry, developing physical
              products, I felt the need to challenge myself in a new field and
              use my creativity to build intelligent solutions that are
              accessible to a wide range of people, providing delightful user
              experiences. The tech industry piqued my curiosity, and I decided
              to pivot my career.In addition to my technical skills, I strongly
              believe in creating inclusive environments that value and
              prioritize diversity. I strive to bring this mindset to every
              project I work on, as I believe it leads to more thoughtful and
              effective solutions that can benefit all users equally. As a
              creative thinker, I am passionate about collaborating with dynamic
              teams to achieve a common goal that can positively impact people's
              lives.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
