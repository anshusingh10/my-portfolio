// Skills Section Logo's
import reactLogo from './assets/tech_logo/reactjs.png';
import reactNativeLogo from './assets/tech_logo/react-native.png';
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import cloudifyLogo from './assets/company_logo/companylogo.png';



// Education Section Logo's
import ignou from './assets/education_logo/ignou.png';
import school from './assets/education_logo/school.png';


// Project Section Logo's
import amazon from './assets/work_logo/amazon.jpg';
import cloudify from './assets/work_logo/cloudify.png';
import ecommerce from './assets/work_logo/ecommerce.png';
import news from './assets/work_logo/news.png';
import todo from './assets/work_logo/todo.jpg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React', logo: reactLogo },
      { name: 'React Native', logo: reactNativeLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cloudifyLogo,
    role: "Fullstack Developer",
    company: "Cloudifyjob",
    date: "December2025 - present",
    desc: "Developed dynamic and scalable web applications using the react Fullstack stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance using technologies such as React JS, python, postgreSQL,Material ui. Contributed to the entire development lifecycle, from concept and design to testing and deployment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Python",
      "FastApi",
      "PostgreSQL",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: ignou,
    school: "Indira Gandhi National Open University, New Delhi",
    date: "Jan 2026 - Present",
    desc: "I am currently pursuing my Master of Computer Applications (MCA) from Indira Gandhi National Open University (IGNOU), New Delhi. Through this program, I am strengthening my knowledge in advanced programming, data structures, database management systems, software engineering, and web technologies. I am actively enhancing my practical skills by working on real-world projects in React, Fullstack development, and backend technologies. My MCA journey is helping me deepen my technical expertise and problem-solving abilities while preparing me for industry-level software development roles.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: ignou,
    school: "Indira Gandhi National Open University, New Delhi",
    date: "june 2023 - june 2025",
    grade: "63.4%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Indira Gandhi National Open University, New Delhi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IGNOU allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img: school,
    school: "shree Krishan Memorial College,Nawada",
    date: "Apr 2017 - March 2019",
    grade: "74%",
    desc: "I completed my class 12 education from shree Krishan Memorial College,Nawada, under the BSEB board, where I studied Biology,Physics and Chemistry (PBC) with Computer Science.",
    degree: "CBSE(XII) - PBC with Computer Science",
  },
  {
    id: 3,
    img: school,
    school: "Modern School,Patna",
    date: "Apr 2016 - March 2017",
    grade: "94%",
    desc: "I completed my class 10 education from Modern School,Patna, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "News App",
    description:
      "A responsive news aggregator built with React.js and Bootstrap that fetches real-time headlines using API integration and React hooks.",
    tags: ["React JS", "javascript", "Bootstrap", "API"],
    image: news,
    tags: ["React JS", "HTML", "Bootstrap", "API", "CSS", "JavaScript"],
    github: "https://github.com/anshusingh10/NewsNow",
    webapp: "",
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform built with React.js, Redux, and Bootstrap featuring product management, user authentication, and a responsive shopping and checkout experience.",
    image: ecommerce,
    tags: ["React JS", "Bootstrap", "Redux", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anshusingh10/E-commerce-website",
    webapp: "",
  },
  {
    id: 2,
    title: "TIcTacToe Game",
    description:
      "A classic Tic Tac Toe game built using React.js and styled with CSS. The game features a responsive UI, win detection logic, and a clean design that ensures an engaging user experience across all devices.",
    image: todo,
    tags: ["react Native", "React JS", "CSS", "HTML"],
    github: "https://github.com/anshusingh10/TIcTacToe",
    webapp: "",
  },
  {
    id: 3,
    title: "Cloudify Job",
    description:
      "A full-stack recruitment platform built with React.js, FastAPI, and Material UI, featuring role-based access, responsive design, and fast REST API integration.",
    image: cloudify,
    tags: ["React JS", "Python", "FastAPI", "Material UI", "API", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "https://app.cloudifyjob.com/",
  },
  {
    id: 4,
    title: "Amazon",
    description:
      "A responsive front-end recreation of the Amazon UI built with HTML5 and CSS3. It demonstrates modern layout techniques using Flexbox and Grid, focusing on clean design and responsive e-commerce interface..",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: amazon,
    github: "https://github.com/anshusingh10/amazon",
    webapp: "",
  },
  
  
];  