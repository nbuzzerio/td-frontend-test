import React from "react";

function Nav() {
  const collapse = (e) => {
    e.preventDefault();
    console.log(e.target.parentNode);
    e.target.parentNode.classList.toggle("collapsible--expanded");
  };

  return (
    <>
      <nav className="nav hero__nav">
        <a href="/">
          <img
            className="nav__logo"
            src="./images/logo.svg"
            alt="company logo"
          />
        </a>
        <div className="login__container">
          <ul className="list socials">
            <li className="social">
              <img src="./images/instagram.svg" alt="instagram logo" />
            </li>
            <li className="social">
              <img src="./images/facebook.svg" alt="facebook logo" />
            </li>
            <li className="social">
              <img src="./images/twitter.svg" alt="twitter logo" />
            </li>
          </ul>
          <div className="login">
            | Log In <img src="./images/chiron.svg" />
          </div>
        </div>
        <img
          className="icon nav__dropdown"
          src="./images/menu.svg"
          alt="menu dropdown button"
          onClick={collapse}
        />
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a style={{ fontWeight: "bold" }} href="/">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/">Our Portfolio</a>
          </li>
          <li className="nav__item">
            <a href="/">Suppliers</a>
          </li>
          <li className="nav__item">
            <a href="/">Careers</a>
          </li>
          <li className="nav__item">
            <a href="/">Our Causes</a>
          </li>
          <li className="nav__item">
            <a href="/">News</a>
          </li>
          <li className="nav__item">
            <a href="/">About Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
