import react, { useState } from "react";

function Resume() {
  const [frontEnd] = useState([
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "jQuery",
    },
    {
      name: "Responsive Design",
    },
    {
      name: "React",
    },
    {
      name: "CSS Libraries",
    },
  ]);

  const [backEnd] = useState([
    {
      name: "APIS",
    },
    {
      name: "Node",
    },
    {
      name: "Express",
    },
    {
      name: "MySQL, Sequelize",
    },
    {
      name: "MongoDB, Mongoose",
    },
    {
      name: "MERN",
    },
  ]);

  return (
    <section className="my-5">
      <h1>Resume</h1>
      <div className="my-2">
        <p>
          Download my{" "}
          <a href="/resume.pdf" download>
            resume
          </a>
        </p>
        <h5>Front-end Proficiencies</h5>
        <ul>
          {frontEnd.map((front) => (
            <li key={front.name}>{front.name}</li>
          ))}
        </ul>
        <h5>Back-end Proficiencies</h5>
        <ul>
          {backEnd.map((back) => (
            <li key={back.name}>{back.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
