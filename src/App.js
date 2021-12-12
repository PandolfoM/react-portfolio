import react, { useState } from "react";
import images from "./assets/previews/images";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  return (
    <div>
      <Nav
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}></Nav>
      <main>
        {!portfolioSelected ? <About></About> : <Portfolio></Portfolio>}
      </main>
    </div>
  );
}

export default App;
