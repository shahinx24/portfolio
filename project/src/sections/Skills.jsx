import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/animations";
import { skills } from "../data/portfolioData";
import "../../styles/shared.css";
import "../../styles/skills.css";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

export default function Skills() {
  return (
    <section id="skills" className="content-section container">
      <MotionDiv
        className="section-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">My Skills</p>
        <h2>Frontend tools I use to build polished interfaces.</h2>
      </MotionDiv>

      <MotionDiv
        className="skills-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <MotionArticle
            key={skill.name}
            className="info-card surface-card"
            variants={fadeUp}
            transition={{ delay: index * 0.05 }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </MotionArticle>
        ))}
      </MotionDiv>
    </section>
  );
}
