import ReactDOM from "react-dom";
import React from "react";
import Hero from "./components/Hero.jsx";
import "./styles.css"

function App() {
  return (
    <>
      <Hero />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
