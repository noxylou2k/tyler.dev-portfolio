import photo from "../assets/pic.jpg";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const portfolio = {
  name: "Kedrick Tyler Chua",
  logo: "ked",
  role: "Frontend Developer",
  headline: "less is more.",
  tagline: "I build clean, modern web experiences.",
  intro:
    "I'm a passionate frontend developer who loves turning ideas into beautiful, functional websites. I focus on clean code and intuitive interfaces.",
  email: "kedricktylerchua@gmail.com",
  location: "Bacolod City, Philippines",
  photo,

  socials: [
    { label: "Instagram", url: "https://www.instagram.com/tyler.chua04?fbclid=IwY2xjawUGR4RwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMXNRTWxBY0loUFZBNk9HYjJzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeOpgnTLJUCFh3DgcOWv--Ege906q-HFjB4itCmu-OFMn64ONiwMFBrRgL2Eg_aem_EN5INY85LFqcsg4iwh1Msw" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kedrick-tyler-chua-117360331/" },
    { label: "Facebook", url: "https://www.facebook.com/kedricktyler.chua" },
  ],

  about: `I'm a third-year BSIT student with a passion for web development and a drive to turn ideas into reality. I enjoy creating modern, user-friendly websites while continuously improving my technical skills and exploring new technologies.

Every project I take on is a chance to learn something new, push my creativity, and grow into the developer I aspire to be.`,

  education: [
    {
      level: "College",
      school: "University of Saint La Salle",
      period: "2024 — Present",
      detail: "Bachelor of Science in Information Technology",
    },
    { level: "Senior High School", school: "Bacolod Tay Tung High School", period: "2022 — 2024" },
    { level: "Junior High School", school: "Bacolod Tay Tung High School", period: "2018 — 2021" },
    { level: "Elementary", school: "Bacolod Tay Tung High School", period: "2012 — 2017" },
    { level: "Kindergarten", school: "Bacolod Tay Tung High School", period: "2010 — 2012" },
  ],

  skills: {
    techStack: [
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "React JS", icon: "react/react-original.svg" },
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "Express JS", icon: "express/express-original.svg", monochrome: true },
    ],
    tools: [
      { name: "Photoshop", icon: "photoshop/photoshop-original.svg" },
      { name: "Figma", icon: "figma/figma-original.svg" },
    ],
  },

  projects: [
    {
      title: "Portfolio Website",
      description:
        "A simple modern, responsive portfolio built with React and Vite. Features smooth scrolling, dark theme, and a clean layout.",
      tags: ["React", "Vite", "CSS"],
      liveUrl: "https://tyler-dev-portfolio.vercel.app/",
    },
    {
      title: "Aro Cafe",
      description: "A simple cafe website built from scratch using HTML and CSS for school homework and turned into a real react website.",
      tags: ["React","CSS"],
      liveUrl: "https://aro-cafe-gilt.vercel.app/",
    },
  ],
};
