
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  hezziBlogs,
  resumeBuilder,
  project3,
  cryptoAgent,
  agenticWorld,
  agenticWebsite,
  coffeeWebsite,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firebase,
  typescript,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import HuzaifaDev separately
import huzaifadev from "../assets/company/huzaifadev.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "CMS Firebase Expert",
    icon: backend,
  },
  {
    title: "Web Solutions Architect",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer & Agentic AI Engineer",
    company_name: "Muhammed Huzaifa Dev",
    icon: huzaifadev,
    iconBg: "#383E56",
    date: "Dec 2023 - present",
    points: [
      "Developing full-stack web applications using Next.js, React.js, and modern backend technologies.",
      "Building intelligent AI agents and chatbots using OpenAI SDK, Streamlit, and Chainlit frameworks.",
      "Implementing content management solutions with Sanity CMS and real-time databases with Firebase.",
      "Creating interactive 3D experiences and animations using Three.js and GSAP for enhanced user engagement.",
      "Developing Python-based AI applications and integrating machine learning models into web platforms.",
      "Managing end-to-end development workflows from AI model integration to production deployment.",
      "Specializing in agentic AI systems that can autonomously perform complex tasks and decision-making.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaifa proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaifa does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaifa optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Furniro Ecommerce",
    description:
      "Furniro is a premium furniture e-commerce platform featuring elegant home furnishings like the signature Rocket single seater chair. Browse stylish, high-quality furniture pieces that enhance your living space with modern, minimalist design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "white-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
    live_demo_link: "https://ui-ux-hackhathone.vercel.app/",
  },
  {
    name: "HezziBlogs",
    description:
      "HezziBlogs is your ultimate destination for insightful articles, tutorials, and thought-provoking content. Discover a world of blogging with our cutting-edge platform designed for writers and readers alike.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
    ],
    image: hezziBlogs,
    source_code_link: "https://github.com/",
    live_demo_link: "https://hezzi-blogs.vercel.app/",
  },
  {
    name: "Resume Generator",
    description:
      "Create a professional, ATS-friendly resume in minutes with our intuitive Resume Builder. Easily customize templates, add your information, and download a polished resume that helps you stand out to employers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: resumeBuilder,
    source_code_link: "https://github.com/",
    live_demo_link: "https://generate-ur-resume.vercel.app/",
  },
  {
    name: "Café Grandeur",
    description:
      "A cozy and modern café website showcasing premium coffee offerings from around the world. Features elegant design, responsive layout, and beautiful imagery highlighting the café's atmosphere and specialty coffee drinks.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "responsive-design",
        color: "white-text-gradient",
      },
    ],
    image: coffeeWebsite,
    source_code_link: "https://github.com/HezziCode/Coffee-Website.git",
    live_demo_link: "https://coffee-website-flax.vercel.app/",
  },
  {
    name: "Crypto Agent",
    description:
      "An intelligent AI-powered cryptocurrency agent that provides real-time price tracking for popular cryptocurrencies like Bitcoin (BTC) and Ethereum (ETH). Features live market data, price alerts, and comprehensive crypto analytics with a user-friendly interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai-agent-sdk",
        color: "green-text-gradient",
      },
      {
        name: "chainlit",
        color: "pink-text-gradient",
      },
      {
        name: "coingecko-api",
        color: "white-text-gradient",
      },
    ],
    image: cryptoAgent,
    source_code_link: "https://github.com/HezziCode/crypto-agent.git",
    live_demo_link: "https://crypto-agent-0ay9.onrender.com/",
  },

  {
    name: "Agentic AI Website",
    description:
      "A cutting-edge AI-powered website showcasing advanced agentic artificial intelligence capabilities. Built with modern web technologies, this platform demonstrates intelligent automation, conversational AI interfaces, and seamless user interactions powered by state-of-the-art AI agents.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "prompt-engineering",
        color: "white-text-gradient",
      },
    ],
    image: agenticWebsite,
    source_code_link: "https://github.com/HezziCode/Agentic-ai-hezzi.git",
    live_demo_link: "https://agentic-ai-hezzi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
