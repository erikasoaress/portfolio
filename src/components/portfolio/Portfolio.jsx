import React from "react";
import "./portfolio.css";
import grabtheknowledge from "../../assets/grabtheknowledge.png";
import radiowonders from "../../assets/radiowonders.png";
import lisbonforall from "../../assets/lisbonforall.png";

const data = [
  {
    id: 1,
    image: grabtheknowledge,
    title: "Grab the Knowledge",
    description: "blablabla",
    github: "https://github.com/erikasoaress/Grab-the-Knowledge",
    demo: "https://erikasoaress.github.io/Grab-the-Knowledge/",
  },
  {
    id: 2,
    image: radiowonders,
    title: "Radio Wonders",
    description: "blablabla",
    github: "https://github.com/erikasoaress/",
    demo: "https://radiowonders.netlify.app/",
  },
  {
    id: 3,
    image: lisbonforall,
    title: "Lisbon for all",
    description: "blablabla",
    github: "https://github.com/erikasoaress/",
    demo: "https://lisbonforall.cyclic.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {
        data.map(({id, image,title, description, github, demo}) => {
          return (
          <article  key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a
                href={github}
                className="btn"
              >
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
          )
        })
        }
      </div>
    </section>
  );
}

export default Portfolio;
