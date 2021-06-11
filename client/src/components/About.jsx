import React from "react";

function About() {
  return (
    <section id="about">
      <div className="accent-background"></div>
      <div className="about__container">
        <img src="./images/shutterstock.png" alt="" className="about__image" />
        <div className="about__text">
          <h2>
            Knowing the numbers is never <span className="italic">enough.</span>
          </h2>
          <p>
            It's about understanding the opportunities and challenges behind the
            numbers — and planning for a stronger future. What's the right
            product selection for your customers? Which tools and information
            could make your business even more successful? At Southern Glazer's,
            we tailor our services for each and every one of our customers.
            Because we know that when we come together, there's always something
            to celebrate.
          </p>
        </div>
        <ul className="list about__icons">
          <li className="about__category">
            <div className="about__icon-wrapper">
              <img
                src="./images/bottle.svg"
                alt="A bottle"
                className="about__icon"
              />
            </div>
            <h3 className="about__category-name">Customers</h3>
            <div className="about__category-text">
              <p>See our portfolio</p>
              <img src="./images/triangle.svg" />
            </div>
          </li>
          <li className="about__category">
            <div className="about__icon-wrapper">
              <img src="./images/box.svg" alt="A box" className="about__icon" />
            </div>
            <h3 className="about__category-name">Suppliers</h3>
            <div className="about__category-text">
              <p>Work with us</p>
              <img src="./images/triangle.svg" />
            </div>
          </li>
          <li className="about__category">
            <div className="about__icon-wrapper">
              <img
                src="./images/gears.svg"
                alt="Gears"
                className="about__icon"
              />
            </div>
            <h3 className="about__category-name">Team</h3>
            <div className="about__category-text">
              <p>Sign in or apply</p>
              <img src="./images/triangle.svg" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
