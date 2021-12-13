import react, { useState } from "react";

function Footer() {
  const [socials] = useState([
    {
      name: "github",
      icon: "fab fa-github-square",
      link: "https://github.com/PandolfoM",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/matthew-pandolfo-22b6b1192/",
    },
  ]);
  return (
    <footer>
      <ul className="flex-footer">
        {socials.map((soc) => (
          <li className="socialLinks noListStyle mx-2" key={soc}>
            <a href={soc.link} target={"_blank"} className={soc.icon}></a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
