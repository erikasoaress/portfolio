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
    description:
      "A fun game representing a journey of two girls during a bootcamp, trying to excel and get all the knowledge they could get! -- Desktop only",
    github: "https://github.com/erikasoaress/Grab-the-Knowledge",
    demo: "https://erikasoaress.github.io/Grab-the-Knowledge/",
  },
  {
    id: 2,
    image: radiowonders,
    title: "Radio Wonders",
    description:
      "For Radio lovers, this platform was made to search for radios all over the world, and save them to a favorite list. You can also play the radio.",
    github: "https://github.com/erikasoaress/Final_Project_Frontend",
    demo: "https://radiowonders.netlify.app/",
  },
  {
    id: 3,
    image: lisbonforall,
    title: "Lisbon for all",
    description:
      "A platform aimed at helping people with disabilities find accessible and enjoyable places to visit in Lisbon. Our goal was to create a modern and visually appealing design that would promote accessibility and raise awareness of the issue.",
    github: "https://github.com/erikasoaress/LisbonForAll",
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
        data.map(({id, image, title, description, github, demo}) => {
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
