import react from "react";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">PandolfoM</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li className="mx-2">
            <a>Portfolio</a>
          </li>
          <li className="mx-2">
            <a>Contact</a>
          </li>
          <li className="mx-2">
            <a>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
