import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/animations";
import { socials } from "../data/portfolioData";
import "../../styles/shared.css";
import "../../styles/hero.css";

const MotionDiv = motion.div;

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <MotionDiv
        className="hero-grid container"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <MotionDiv className="hero-copy surface-card" variants={fadeUp}>
          <p className="eyebrow">Frontend Developer</p>
          <h1>Building clean, professional websites with React.</h1>
          <p className="intro-text">
            I create responsive web experiences with a focus on structure,
            clarity, and modern UI. Explore my skills, featured projects, and
            ways to get in touch.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#work">
              View Work
            </a>
            <a className="secondary-button" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.label} />
                {social.label}
              </a>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv className="hero-card surface-card" variants={fadeUp}>
          <div className="profile-badge">Available for frontend projects</div>
          <div className="profile-visual">
            <div className="profile-ring" />
            <div className="profile-content">
              <p>Hello, I&apos;m</p>
              <h2>Shahin U</h2>
              <span>React | Redux | Tailwind</span>
            </div>
          </div>

          <div className="hero-metrics">
            <article>
              <strong>5</strong>
              <span>Core frontend skills</span>
            </article>
            <article>
              <strong>4</strong>
              <span>Featured projects</span>
            </article>
            <article>
              <strong>100%</strong>
              <span>Responsive layouts</span>
            </article>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  );
}
