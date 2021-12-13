import react from "react";

function Nav(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <header className="flex-row px-1">
      <h2>
        <a className="noListStyle" href="/">
          PandolfoM
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {tabs.map((tab) => (
            <li className="noListStyle mx-2" key={tab}>
              <span
                onClick={() => props.setCurrentPage(tab)}
                className={
                  props.currentPage === tab ? "nav-link navActive" : "nav-link"
                }>
                {tab}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
