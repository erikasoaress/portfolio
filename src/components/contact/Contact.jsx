import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9az5z87",
        "template_ahwt8ar",
        form.current,
        "UBlL8MJe7zeU7CiET",
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("The email was sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send. Try again!")
        }
      );

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>contacto@erikazdesign.com</h5>
            <a href="mailto:contacto@erikazdesign.com">Send a message!</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" email="email" placeholder="your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
