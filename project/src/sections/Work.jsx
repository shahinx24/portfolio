import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/animations";
import { projects } from "../data/portfolioData";
import "../../styles/shared.css";
import "../../styles/work.css";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

export default function Work() {
  return (
    <section id="work" className="content-section container">
      <MotionDiv
        className="section-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">My Work</p>
        <h2>Projects that show my frontend foundation and UI thinking.</h2>
      </MotionDiv>

      <MotionDiv
        className="work-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <MotionArticle
            key={project.title}
            className="work-card surface-card"
            variants={fadeUp}
            transition={{ delay: index * 0.06 }}
          >
            <div className="work-preview">
              <span>{project.tag}</span>
            </div>
            <div className="work-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </MotionArticle>
        ))}
      </MotionDiv>
    </section>
  );
}
