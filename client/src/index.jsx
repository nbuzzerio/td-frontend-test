import ReactDOM from "react-dom";
import React from "react";
import Hero from "./components/Hero.jsx";
import "./styles.css"
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
