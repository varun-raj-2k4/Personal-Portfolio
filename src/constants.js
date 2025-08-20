// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
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
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import coincent from './assets/company_logo/coincent_logo.png';


// Education Section Logo's
import ksitlogo from './assets/education_logo/ksit_logo.jpg';
import ssrvmlogo from './assets/education_logo/ssrvm_logo.png';
import prarthanalogo from './assets/education_logo/prarthana_logo.png';

// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfolio.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
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
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
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
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: coincent,
      role: "Machine Learning Intern",
      company: "Coincent",
      date: "July 2023 - September 2023",
      desc: "Explored Machine Learning in deep and worked on a project related to hand digit recognition using Python and TensorFlow. Developed a model that can recognize handwritten digits with high accuracy, contributing to the understanding of neural networks and their applications in real-world scenarios.",
      skills: [
        "Python",
        "TensorFlow",
        "Machine Learning",
        "Neural Networks",
        "Data Preprocessing",
        "Model Training",
        "Model Evaluation",
        "Data Visualization",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Jupyter Notebook",
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 0,
      img: ksitlogo,
      school: "K S Institute of Technology",
      date: "Sept 2022 - July 2026",
      grade: "7.86 CGPA",
      desc: "I completed my Bachelor's degree in Artificial Intelligence and Machine Learning (BE) from K S Institute of Technology, Bangalore, where I gained a strong foundation in AI and ML concepts, algorithms, and applications. I developed skills in programming, data analysis, and machine learning techniques, preparing me for a career in the rapidly evolving field of AI.",
      degree: "Bachelor of Engineering - BE (AI & ML)",
    },
    {
      id: 1,
      img: ssrvmlogo,
      school: "Sri Sri Ravishankar Vidya Mandir",
      date: "Apr 2021 - March 2022",
      grade: "78%",
      desc: "I completed my class 12 education from Sri Sri Ravishankar Vidya Mandir, Bangalore, under the CBSE board, where I studied Physics, Chemistry, Mathematics, and Biology. This program provided me with a solid foundation in science and technology, preparing me for higher studies in engineering.",
      degree: "CBSE(XII) - PCM with Biology",
    },
    {
      id: 2,
      img: prarthanalogo,
      school: "Prarthana Central School",
      date: "Apr 2019 - March 2020",
      grade: "72%",
      desc: "I completed my class 10 education from Prarthana Central School, Bangalore, under the CBSE board, where I studied a comprehensive curriculum that included subjects like Mathematics, Science, Social Science, and English. This program laid the groundwork for my future studies in science and technology.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, and experiences. Built with React.js, it features a responsive design, smooth animations, and a user-friendly interface to highlight my work effectively. ",
      image: portfolioLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/varun-raj-2k4/Personal-Portfolio",
      webapp: "https://varunraj2k4.netlify.app/",
    },
    
  ];  