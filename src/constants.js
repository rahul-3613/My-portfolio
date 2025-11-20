// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/agent_logo.png';
import agcLogo from './assets/company_logo/game_logo.png';
import newtonschoolLogo from './assets/company_logo/webverse_logo.png';
import cpLogo from './assets/company_logo/cp_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import rLogo from './assets/education_logo/r_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/git_hub.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/n8n_automation.png';
import webverLogo from './assets/work_logo/web_dig.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
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
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Automation Engineer",
      company: "NextGen Automation",
      date: "April 2025 - Present",
      desc: "Designed and developed a messaging agent for WhatsApp and Messenger, automating responses, handling user queries, and integrating AI-powered features to improve customer engagement and workflow efficiency.",
      skills: [
        "HTML",
        "CSS",
        "API Integration",
        "WhatsApp API",
        "Messenger API",
        "Automation",
        "MongoDb",
        "AI Chatbots",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Game Developer",
      company: "C Programming Projects",
      date: "Jul 2025 - Present",
      desc: "Developed interactive 2D games using C programming, implementing core game mechanics, logic, and efficient memory management. Focused on algorithm optimization and real-time user interaction to create engaging gameplay experiences.",
       skills: [
        "C Programming",
        "Game Logic",
         "Memory Management",
        "Interactive Games",
        
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Web App Developer",
      company: "Static HTML Projects",
      date: "August 2022 - November 2025",
      desc:  "Built responsive HTML web apps using VS Code, Git, and browser tools. Deployed live on Vercel/Netlify with shareable links and installable versions, ensuring fast and smooth user experience.",
      skills: [
        "HTML",
        "VS Code",
         "Git",
        "Browser Dev Tools",
        "Live Deployment",
        "UX Optimization",
      ],
    },
    {
      id: 3,
    img: cpLogo,
    role: "Competitive Programmer",
    company: "Coding Competitions",
    date: "January 2024 - Present",
    desc: "Participated in online coding competitions on Codeforces, LeetCode, and CodeChef. Solved challenging algorithmic and data structure problems to improve problem-solving skills and efficiency under time constraints.",
    skills: [
      "C",
      "Problem Solving",
      "Algorithms",
      "Data Structures",
      "Competitive Programming",

      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Premier University, Chittagong",
      date: "Fall 2024 - 2028",
      grade: "CGPA: 3.52",
      desc: "Currently studying Computer Science & Engineering (Fall 2024–2028) at Premier University, Chittagong. Building strong skills in Data Structures, Algorithms, Competitive Programming, C Programming, and core engineering subjects. Actively involved in the Computer Club, Robotics Club, and Debating Club to strengthen technical skills, creativity, and communication.",
      degree: "Bachelor of Computer Science and Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Patiya Government College,Chittagong",
      date: "Sept 2020 - Aug 2022",
      grade: "GPA: 4.78",
        desc: "Successfully completed 12th grade in Science, excelling in Physics, Chemistry, Mathematics, and Computer Science. Actively engaged in academic projects, practical experiments, and problem-solving exercises, which built a strong foundation for engineering and technology studies. Developed analytical thinking, time management, and collaborative skills through group assignments, competitions, and laboratory work.",
      degree: "HSC / A-Level - Science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Patiya Government High School, Chittagong",
      date: "Apr 2019 - March 2022",
      grade: "GPA: 5.00",
     desc: "Completed my 10th grade (Secondary School Certificate - SSC) from Patiya Government High School with a GPA of 5.0. Focused on Science subjects including Physics, Chemistry, Mathematics, and Computer Science. Actively participated in school competitions and projects to enhance analytical and practical skills",
     degree: "SSC / O-Level - Science",
    },
    {
      id: 3,
      img: rLogo,
      school: "Patiya Renesha Computer Technical Institute, Chittagong",
      date: "jan 2020 - March 2020",
      grade: "GPA: 5.00",
      desc: "Learned MS Word, Excel, typing skills, basic programming, and basic design.",
      degree: "Computer Technical Certification",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image:githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/rahul-3613",

    },
    {
      id: 1,
      title: "C Programming Tutorial App",
        description:
    "A simple and beginner-friendly C programming tutorial web app that includes basics, examples, quizzes, and output practice. Designed to help students learn C language step by step in an interactive way.",
      image: csprepLogo,
      tags: ["C Language", "Tutorial", "Beginner Friendly", "Programming Basics", "HTML"],
      github: "https://github.com/rahul-3613/My-mobile-Apps",
      webapp: "https://github.com/rahul-3613/My-mobile-Apps",
    },
    {
      id: 2,
      title: "Fun & Learning with C",
      description:
          "A beginner-friendly C programming tutorial app containing basic to advanced concepts, examples, and practice problems.",
      image: movierecLogo,
       tags: ["C Language", "Beginner Friendly", "Programming Basics"],
      github: "https://github.com/rahul-3613/C-_-programming-projects-by---Rahul-Shingha",
      webapp: "https://github.com/rahul-3613/C-_-programming-projects-by---Rahul-Shingha",
    },
    {
      id: 3,
      title: "n8n_automation",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/rahul-3613/n8n",
      webapp: "https://github.com/rahul-3613/n8n",
    },
    {
      id: 4,
      title: "Currency Converter App",
      description:
    "A simple and interactive web app that allows users to convert currencies in real-time. Built using HTML, CSS, and JavaScript, it provides accurate conversion rates and a smooth user experience.",
      image: taskremLogo,
       tags: ["HTML", "CSS", "JavaScript", "Currency Conversion"],
      github: "https://github.com/rahul-3613/C-_-programming-projects-by---Rahul-Shingha",
      webapp: "https://github.com/rahul-3613/C-_-programming-projects-by---Rahul-Shingha",
    },
    {
      id: 5,
     title: "IoT Patient Monitor System", 
       description:
    "An IoT-based patient monitoring system built with Arduino, sensors, and LCD display. It tracks heart rate and body temperature in real-time and uploads data via a serial connection, ensuring continuous patient monitoring.",
      image: webverLogo,
       tags: ["Arduino", "IoT", "C++", "Sensors", "LCD Display"],
      github: "https://github.com/rahul-3613/iot",
      webapp: "https://github.com/rahul-3613/iot",
    },
   
  ];