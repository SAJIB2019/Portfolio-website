import React from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sajib@gmail.com</h5>
            <a href="sajib.sohelrana21@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>What's App</h4>
            <h5>01825979759</h5>
            <a
              href="https://api.whatsapp.com/send?phone=01825979759"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
