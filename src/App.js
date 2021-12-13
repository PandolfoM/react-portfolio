import react, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const page = () => {
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>
      <main>{page()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
