import react from "react";

function Nav(props) {
  const { portfolioSelected, setPortfolioSelected } = props;
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">PandolfoM</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 ${!portfolioSelected && "navActive"}`}>
            <a onClick={() => setPortfolioSelected(false)}>About Me</a>
          </li>
          <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
            <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
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
