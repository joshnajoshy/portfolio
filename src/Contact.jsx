import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./index.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setSending(true);
  emailjs.send(
    "service_thmsul5",
    "template_a7zkc38",
    {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    },
    "VT_NLKneVxPsfpHrA"
  ).then(
    () => {
      emailjs.send(
        "service_thmsul5",
        "template_695ad2j",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "VT_NLKneVxPsfpHrA"
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    },
    (error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send email. Try again later.");
      setSending(false);
    }
  );
};


  return (
    <section className="contact-section">
      <h1 className="section-title">Contact Me</h1>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="submit-button"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-socials">
          <h3 style={{ color: "white" }}>Or reach me directly:</h3>
          <div className="contact-details">
            <p>
              <FaEnvelope /> <a href="mailto:joshnajoshy@yahoo.co.uk">joshnajoshy@yahoo.co.uk</a>
            </p>
            <p>
              <FaPhone /> <a href="tel:+447565004266">07565004266</a>
            </p>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/joshna-joshy-a724b11b6/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="white" />
            </a>
            <a href="https://github.com/joshnajoshy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



