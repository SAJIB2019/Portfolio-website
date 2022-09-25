import React from "react";
import "./About.css";
import Me from "../../assets/images/hero.png";
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFolder } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFolder className="about_icon" />
              <h5>Projects</h5>
              <small>30+ completed </small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            consectetur suscipit possimus cupiditate voluptatem cumque amet
            dolorum ducimus saepe nostrum quaerat perferendis esse sunt eligendi
            et in ipsa quam deleniti?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
