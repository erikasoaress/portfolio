import React from 'react'
import "./experience.css"
import {BiBadgeCheck} from "react-icons/bi"


function Experience() {
  return (
    <section id="experience">
      <h5> Skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BiBadgeCheck />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <BiBadgeCheck />
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <BiBadgeCheck />
              <h4>React</h4>
            </article>

            <article className="experience__details">
              <BiBadgeCheck />
              <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
              <BiBadgeCheck />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
}

export default Experience