import react, { useState } from "react";
import images from "../../assets/previews/images";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Fomo Mock Exchange",
      description:
        "A real time stock exchange for people who just want to mess around with stocks and not use real currency.",
      image: images.exchange,
      alt: "Fomo Mock Exchange",
      github: "https://fomo-exchange.herokuapp.com/",
      site: "https://github.com/RynMrphy18/fomo-mock-exchange",
    },
    {
      name: "Note Taker",
      description:
        "A website that allows you to take notes and save them to a database to use for later.",
      image: images.notes,
      alt: "Note Taker",
      github: "https://github.com/PandolfoM/note-taker",
      site: "https://salty-dawn-40447.herokuapp.com/",
    },
    {
      name: "Emprise",
      description:
        "A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast.",
      image: images.emprise,
      alt: "Emprise",
      github: "https://github.com/codemasterdev/Project-1",
      site: "https://codemasterdev.github.io/Project-1/",
    },
    {
      name: "Coding Quiz",
      description:
        "A simple 5 question quiz that tests your knowledge of JavaScript.",
      image: images.quiz,
      alt: "Coding Quiz",
      github: "https://github.com/PandolfoM/coding-quiz",
      site: "https://pandolfom.github.io/coding-quiz/",
    },
    {
      name: "Tech Blog",
      description:
        "Tech blog is a blog where you can sign up and start posting anything you would like other people to see.",
      image: images.blog,
      alt: "Tech Blog",
      github: "https://github.com/PandolfoM/tech-blog",
      site: "https://desolate-forest-49599.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      description:
        "Weather Dashboard is an app where you can search a city of your choice and it will bring up the 5 day forecast, temperature, wind speed, humidity, and UV index.",
      image: images.weather,
      alt: "Weather Dashboard",
      github: "https://github.com/PandolfoM/weather-dashboard",
      site: "https://pandolfom.github.io/weather-dashboard/",
    },
  ]);
  return (
    <section className="my-5">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((work) => (
          <div className="card m-3 p-2" style={{ width: "18rem" }}>
            <img src={work.image} className="card-img-top" alt={work.alt}></img>
            <div className="card-body">
              <h5 className="card-title">{work.name}</h5>
              <p className="card-text">{work.description}</p>
            </div>
            <div className="text-center d-grid gap-2">
              <a
                href={work.github}
                target={"_blank"}
                rel="noreferrer"
                className="btn btn-primary">
                GitHub
              </a>
              <a
                href={work.site}
                target={"_blank"}
                rel="noreferrer"
                className="btn btn-primary">
                Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
