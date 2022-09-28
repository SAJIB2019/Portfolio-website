import React from "react";
import "./Footer.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">
        JANNATUL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <AiOutlineFacebook />
        </a>
        <a href="https://twiter.com">
          <AiFillTwitterCircle />
        </a>
        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>

        <a href="https://instagram.com">
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jannatul All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
