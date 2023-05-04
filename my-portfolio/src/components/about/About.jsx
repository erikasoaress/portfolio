import React from "react";
import "./about.css";
import ME2 from "../../assets/me2.png";
import { GrVirtualMachine } from "react-icons/gr";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="profile picture of Erika" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GrVirtualMachine className="about__card" />
              <h5>Experience</h5>
            </article>

            <article className="about__card">
              <GrVirtualMachine className="about__card" />
              <h5>Experience</h5>
            </article>

            <article className="about__card">
              <GrVirtualMachine className="about__card" />
              <h5>Experience</h5>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
