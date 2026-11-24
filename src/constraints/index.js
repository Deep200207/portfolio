import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import weather from "../assets/weather.jpg"
import lattice from "../assets/lattice Innovation.png";

export const HERO_CONTENT =
  "I work with the MERN stack: React and Tailwind CSS for responsive interfaces, and Node, Express and MongoDB for the REST APIs behind them.";

// Now an array: each item renders as its own paragraph.
export const ABOUT_ME = [
  "I’m Deepak, a full-stack developer who turned curiosity into code. I started with small frontend experiments and grew into building complete web applications.",
  "Today I build with MongoDB, Express, React and Node.js. I enjoy crafting clean interfaces with Tailwind CSS and solving backend logic in JavaScript and Java.",
  "I like working solo or with a team, and I keep learning new tools in the developer ecosystem. I’m always up for a challenge.",
];

export const Project = [
  {
    title: "E-commerce website",
    image: project1,
    Link: "https://deep200207.github.io/myntra-clone/",
    // Github: "https://github.com/Deep200207/...",
    description: "An online store with product listings and a shopping cart.",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
  },
  {
    title: "Chat app",
    image: project2,
    // Link: "", Github: "",   // add links so visitors can open this project
    description: "A real-time chat app with secure messaging and user authentication.",
    technologies: ["HTML", "Tailwind CSS", "React", "Express.js", "MongoDB"],
  },
  {
    title: "Weather dashboard",
    image: weather, // save a screenshot at public/weather-app.png
    Link: "https://weather-app-five-umber-32.vercel.app/",
    // Github: "https://github.com/Deep200207/...",
    description: "A weather dashboard that shows current conditions for the location you search.", // TODO: mention the API and features you built
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"], // TODO: confirm the stack
  },
];

export const Contact_Us = {
  address: "New Delhi, India",
  phone: "+91 7982919871",
  email: "royannu149@gmail.com",
};

// Put the company logo at public/lattice-logo.png (square PNG/SVG works best).
export const Experience = [
  {
    company: "Lattice Innovation Pvt Ltd",
    logo: lattice,
    role: "React js Developer Intern", // TODO: replace with your exact title
    period: "3 months",           // TODO: e.g. "Jun 2025 – Aug 2025 · 3 months"
    location: "New Delhi, India", // TODO: confirm, or write "Remote"
    points: [
      // TODO: replace with what you actually did and the results
      "Built and maintained responsive React interfaces styled with Tailwind CSS.",
      "Worked with the team on Node.js and MongoDB features and API integration.",
      "Fixed bugs and shipped improvements through code reviews with senior developers.",
    ],
  },
];