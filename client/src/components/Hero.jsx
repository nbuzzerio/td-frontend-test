import React from "react";
import Nav from "./Nav.jsx";

function Hero() {
  return (
    <section id="hero">
      <Nav />
      <div className="hero__container">
        <div className="hero__text">
          <h1>
            To bringing people <span className="italic">together.</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="hero__portfolio">PORTFOLIO</div>
        </div>
        <div className="hero__images">
          <div className="hero__images-sq"></div>
          <img
            className="hero__images-A"
            src="./images/image-a 1.png"
            alt="Two women looking through bottle inventory"
          />
          <img
            className="hero__images-B"
            src="./images/image-b 1.png"
            alt="A man operating a forklift in a warehouse."
          />
        </div>
      </div>
      <div className="hero__ribbons-container">
        <img
          className="hero__ribbons"
          src="./images/Vector.svg"
          alt="Another company logo"
        />
      </div>
    </section>
  );
}

export default Hero;
