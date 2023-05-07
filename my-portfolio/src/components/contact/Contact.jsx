import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>contacto@erikazdesign.com</h5>
            <a href="mailto:contacto@erikazdesign.com">Send a message!</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="your full name" required/>
            <input type="email" email="email" placeholder="your email" required/>
            <textarea name="message" rows="7" placeholder="your message" required/>
            <button className="btn btn-primary"type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
