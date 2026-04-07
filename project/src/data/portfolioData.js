import emailIcon from "../assets/email.svg";
import githubIcon from "../assets/github.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";

export const contactEmail = "shahinu886@gmail.com";

export const skills = [
  {
    name: "React",
    description: "Component-driven interfaces with reusable UI patterns.",
  },
  {
    name: "Redux",
    description: "Structured state management for scalable frontend apps.",
  },
  {
    name: "Tailwind",
    description: "Fast utility-first styling for responsive layouts.",
  },
  {
    name: "JavaScript",
    description: "Interactive experiences with clean client-side logic.",
  },
  {
    name: "HTML & CSS",
    description: "Solid structure, accessibility, and polished styling.",
  },
];

export const projects = [
  {
    title: "Personal Website",
    description:
      "A modern portfolio experience focused on clean presentation, smooth navigation, and a professional first impression.",
    tag: "Portfolio",
  },
  {
    title: "Trivago Clone",
    description:
      "A responsive interface inspired by the Trivago experience, built to practice layout systems and UI consistency.",
    tag: "Frontend Clone",
  },
  {
    title: "W3Schools Navbar",
    description:
      "A navigation-focused UI exercise built to refine interaction design, spacing, and layout accuracy.",
    tag: "Component Build",
  },
  {
    title: "Supply Management",
    description:
      "A concept platform for organizing supply requests and distribution workflows during disaster response.",
    tag: "Web App Concept",
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahinu",
    icon: linkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: githubIcon,
  },
  {
    label: "Email",
    href: `mailto:${contactEmail}`,
    icon: emailIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: instagramIcon,
  },
];
