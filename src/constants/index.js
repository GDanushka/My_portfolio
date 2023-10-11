import {
  abromart,
  backend,
  bootstrap,
  codedrops,
  corrtex,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  instagram,
  gmail,
  html,
  javascript,
  linkedin,
  mobile,
  reactjs,
  mongodb,
  restro,
  tailwind,
  postmen,
  web,
  resume,
  SMS,
  Arogya,
  mern,
  cyber
} from "../assets";

export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "My Resume",
    desktop: "contact",
    title: "My Resume",
  },
];

const services = [
  {
    title: "Responsive Web Design",
    icon: web,
  },
  {
    title: "Frontend Web Development",
    icon: mobile,
  },
  {
    title: "Custom Web Design",
    icon: backend,
  },
  {
    title: "Backend Web Development",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
    {
    name: "postmen",
    icon: postmen,
  }
];

const experiences = [
  {
    title: "Higher National Diploma in Information Technology (UG)",
    company_name: "Sri Lanka Institute of Advanced Technological Education",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Oct 2020 - Aug 2023",
    points: [
      "Major Domains: Software Developing.",
    ],
  },
  {
    title: "Secondary Education",
    company_name: "Nagoda Royal College, Galle",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2015 - 2018",
    points: [
      "Advanced Level (2016): Engineering Tec- S |Science For Tec - S | ICT -C|.",
    ],
  },
  {
    title: "Primary Education",
    company_name: "Sirisunanda College, Galle",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2005 - 2015",
    points: [
      "Ordinary Level (2015): A- 1, B- 1, C- 4 & S- 3",
    ],
  },
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/gdanushka/"
  },
  {
    image: github,
    link: "https://github.com/GDanushka/"
  },
  {
    image: instagram,
    link: "https://www.instagram.com/"
  },
  {
    image: gmail,
    link: "mailto:gayan.4d@gmail.com"
  }
]

const projects = [
  {
    name: "Web base POS system for Arogya Medical Center",
    description:
      "Admin can check the monthly income in the center.Manage patient details and appointments.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "React.js",
        color: "purple-text-gradient",
      },
        {
        name: "MySql ",
        color: "pink-text-gradient",
      },      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: Arogya,
    openSource: false,
    source_code_link: "https://github.com/GDanushka/Aarogya-medical-center-master",
  },
  {
    name: "MERN - E Commerce Web Application",
    description:
      "This application use to selling gym equipment admin can handel Product , order and payroll management using Stripe Payment Gateway ",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
        {
        name: "MongoDB ",
        color: "pink-text-gradient",
      },      {
        name: "React.js",
        color: "purple-text-gradient",
      },
        {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
      
    ],
    image: mern,
    openSource: false,
    source_code_link: "https://github.com/GDanushka/MERN-Individual-Project",
  },
  {
    name: "WEB BASED P.O.S SYSTEM - Cybernet-IT-Zone",
    description:
      "This web application is Help to costumer pick to computer items also they can make pc and buy it.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "React.js",
        color: "purple-text-gradient",
      },
      {
        name: "Node.js",
        color: "yellow-text-gradient",
      },
        {
        name: "MySql ",
        color: "pink-text-gradient",
      }, 
    ],
    image: cyber,
    openSource: false,
    source_code_link: "https://github.com/GDanushka/Cybernet-IT-Zone-POS-System-main",
  },
  {
    name: "Student Management System ",
    description:
      "This application use manage student and the exam marks, Admin can monitor ",
    tags: [
      {
        name: "VB.Net",
        color: "blue-text-gradient",
      },
      
    ],
    image: SMS,
    openSource: false,
    source_code_link: "https://github.com/GDanushka/Univesty_MS",
  },
];
const Resume = [
  {
    image: resume,
  },
]
export { services, technologies, experiences, projects, socials,Resume };
