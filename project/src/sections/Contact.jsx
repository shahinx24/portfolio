import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";
import { contactEmail, socials } from "../data/portfolioData";
import "../../styles/shared.css";
import "../../styles/contact.css";

const MotionDiv = motion.div;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="content-section container">
      <MotionDiv
        className="contact-panel surface-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="contact-copy">
          <p className="eyebrow">Contact Me</p>
          <h2>Have a project in mind or want to collaborate?</h2>
          <p>
            I&apos;m open to frontend work, portfolio websites, and modern
            React-based interfaces.
          </p>

          <div className="contact-socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.label} />
              </a>
            ))}
          </div>
        </div>

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
            placeholder="What are you contacting me for?"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="primary-button">
            Send Message
          </button>
        </form>
      </MotionDiv>
    </section>
  );
}
