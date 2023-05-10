import React from "react";
import "./experience.css";
import { BiBadgeCheck } from "react-icons/bi";

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
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND PART */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>ExpressJs</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Axios</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Design </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Adobe Photoshop</h4>
              </div>
            </article>

            <article className="experience__details">
              <BiBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Adobe Illustrator</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
