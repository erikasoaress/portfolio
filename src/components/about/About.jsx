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
            <article className="about__card">
              <RiMedal2Fill className="about__icon" />
              <h5>Experience</h5>
            </article>

            <article className="about__card">
              <BiLibrary className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            nostrum vero, quisquam quos eligendi nulla, quae maiores animi
            ratione hic deserunt illo est magnam repellat iusto commodi eum
            similique debitis!
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk!
          </a>
        </div>
      
    </section>
  );
}

export default About;
