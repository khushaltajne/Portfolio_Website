import arrow_icon_dark from './arrow-icon-dark.png';
import arrow_icon from './arrow-icon.png';
import database_icon from './database-icon.png'
import backend_icon from './backend-icon.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import code_icon_dark from './code-icon-dark.png';
import code_icon from './code-icon.png';
import download_icon from './download-icon.png';
import eclipse_icon from './eclipse-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import edu_icon from './edu-icon.png';
import git from './git.png';
import github_icon from './github-icon.png';
import graphics_icon from './graphics-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import mobile_icon from './mobile-icon.png';
import mongodb from './mongodb.png';
import moon_icon from './moon_icon.png';
import oracle from './oracle.png';
import profile_img from './profile-img.png';
import project_icon_dark from './project-icon-dark.png';
import project_icon from './project-icon.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_white from './right-arrow-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import sun_icon from './sun_icon.png';
import ui_icon from './ui-icon.png';
import ui_ux from './ui-ux.png';
import user_profile from './user-profile.png';
import vscode from './vscode.png';
import web_icon from './web-icon.png';
import java_icon from './java-icon.png';
import tools_icon from './tools-icon.png';
import concepts_icon from './concept-icon.png';
import postman_icon from './postman-icon.png';
import docker_icon from './docker-icon.png';
import insomnia_icon from './Insomnia-icon.png';


export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    ui_ux,
    backend_icon,
    database_icon,
    oracle,
    eclipse_icon,
    github_icon,
    user_profile,
    vscode,
    java_icon,
    tools_icon,
    concepts_icon,
    postman_icon,
    docker_icon,
    insomnia_icon,
};

export const profileSummary = {
  summary: "I’m <strong>Khushal V. Tajne</strong>, a B.Tech graduate in Information Technology specializing in <strong>Java Full Stack development</strong>. I have hands-on experience designing secure, scalable backend architectures using <strong>Spring Boot, Spring Security, JWT, and relational/NoSQL databases</strong>, alongside interactive frontend panels with <strong>React.js</strong>.",
  role: [
    "Java Full Stack Developer",
    "Java Backend Developer",
    "Software Engineer",
    "Spring Boot Developer",
    "Associate Software Engineer"
  ]
};


export const projectsData = [
  {
    name: "Personal Goal & Task Monitoring System",
    description: "Developed a full-stack goal tracking application using React, Spring Boot, JWT, and PostgreSQL for scheduling and monitoring yearly, monthly, and daily targets.",
    features: [
      "Designed and Developed 20+ REST APIs using Spring Boot, improving backend performance by 30%",
      "Implemented JWT-based authentication and authorization using Spring Security",
      "Built role-based access control ensuring user-specific data isolation",
      "Developed frontend using React.js with protected routes and API integration using Axios",
      "Created goal scheduling system (Yearly, Monthly, Daily targets)",
      "Implemented CRUD operations for goals, sub-goals, and notes",
      "Designed normalized PostgreSQL database schema for Users, Goals, Targets, and Notes",
      "Used Spring Data JPA for database interaction and transaction management",
      "Implemented global exception handling using @ControllerAdvice",
      "Tested APIs using Postman and ensured proper validation"
    ],
    repo: "https://github.com/khushaltajne/Personal-Goal-And-Task-Tracker",
    live: "",
  },
  {
    name: "Bank Management System (Enterprise Level)",
    description: "Built a secure banking application using Spring Boot and MySQL implementing deposit, withdrawal, and fund transfer with role-based authentication and transactional management.",
    features: [
      "Designed and developed RESTful banking APIs using Spring Boot",
      "Implemented secure authentication and authorization using Spring Security",
      "Developed core banking features including deposit, withdrawal, and secure fund transfer operations",
      "Applied Spring Data JPA (Hibernate) for database interaction and ORM mapping",
      "Designed normalized MySQL database schema for Users, Accounts, and Transactions",
      "Implemented DTO pattern for secure data transfer between layers",
      "Applied Hibernate Validator for input validation and data integrity",
      "Implemented global exception handling using @ControllerAdvice",
      "Ensured data consistency and atomicity using @Transactional",
      "Followed layered architecture (Controller → Service → Repository) for maintainability and scalability",
      "Tested and validated APIs using Postman"
    ],
    repo: "https://github.com/khushaltajne/Bank-Management-System",
    live: "",
  },
  {
    name: "E-Commerce Web Application",
    description: "Designed and developed a scalable full-stack e-commerce platform with separate Admin and Customer modules, focusing on performance optimization and clean architecture.",
    features: [
      "Designed and developed the complete e-commerce system using Java, JSP, Servlets, and MySQL",
      "Implemented secure user authentication with session management for Admin and Customer roles",
      "Developed product management module including product listing, add/update/delete operations",
      "Built inventory tracking system to manage stock availability in real-time",
      "Created responsive user interfaces using HTML, CSS with dynamic product cards and search filters",
      "Implemented shopping workflow including product browsing and structured navigation",
      "Optimized SQL queries and backend request handling to reduce page load time by 50%",
      "Improved overall user engagement by 30% through UI enhancements and workflow optimization",
      "Applied MVC architecture for clean separation of business logic, presentation layer, and database operations"
    ],
    repo: "https://github.com/khushaltajne/E-Commerce-Web-Application",
    live: "",
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    features: [
      "Responsive design for all devices",
      "Modern UI built with Tailwind CSS",
      "Interactive components using React",
      "API integration for dynamic data",
      "Deployed on Netlify with CI/CD",
      "Version control and collaboration using Git & GitHub",
    ],
    repo: "https://github.com/khushaltajne/Portfolio_Website",
    live: "https://portfoliokhushal21.netlify.app",
  },
  {
    name: "Shopping Mall ( JavaScript API Project )",
    description: "Developed a dynamic web application that fetches data from a public API and displays it in a clean, responsive layout. Styled the interface and implemented interactive features entirely using JavaScript without relying on external frameworks.",
    features: [
      "Fetches data from a public API",
      "Dynamic background",
    ],
    repo: "https://github.com/khushaltajne/JavaScript-API-Project--Personal-Project-",
    live: "https://shoppingmalljs.netlify.app",
  },
  {
    name: "Co-Po Mapping",
    description: "The CO–PO Mapping System automates mapping between Course Outcomes (COs) and Program Outcomes (POs), calculates attainment levels from student performance, and generates reports to support accreditation (NBA/NAAC).",
    features: [
      "Course & Program Setup",
      "Attainment Data Management",
      "Filtering & Searching",
      "User Interface Features",
    ],
    repo: "https://github.com/khushaltajne/CO-PO-MAPPING",
    live: "",
  }
];


export const experienceData = [
  {
    role: "Web Development Intern",
    company: "PHN Technology",
    duration: "Apr 2023 – Jun 2023",
    description: [
      "Developed responsive web pages using HTML and CSS.",
      "Integrated APIs and improved page load speed by 20%.",
      "Collaborated with the design team to implement modern UI/UX practices."
    ]
  }
];


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "Java 8+, JavaScript, C, HTML, CSS",
    details: [
      "Java 8+ features: Lambdas, Streams, Functional Interfaces, and Optional",
      "JavaScript for dynamic and interactive user interface flows",
      "C programming for algorithms and core logic problem-solving",
      "HTML & CSS for responsive and modern web design structures"
    ]
  },
  {
    icon: assets.backend_icon,
    iconDark: assets.backend_icon_dark,
    title: "Frameworks & Backend Technologies",
    description: "React, Spring Boot, Spring, Hibernate, JDBC",
    details: [
      "React.js for modular component-based user interfaces",
      "Spring Boot & Spring Framework (Core, MVC, DI, AOP) for microservices",
      "Hibernate ORM & Spring Data JPA for persistent data mapping",
      "Servlets, JSP, and JDBC for classic enterprise Java architectures",
      "RESTful Web Services for designing robust integration APIs",
    //  "JUnit for test-driven development and unit testing"
    ]
  },
  {
    icon: assets.concepts_icon,
    iconDark: assets.concepts_icon_dark,
    title: "Security",
    description: "Spring Security, JWT, Role-Based Access Control (RBAC)",
    details: [
      "Spring Security integrations to protect REST endpoints",
      "JWT (JSON Web Tokens) Authentication and secure token management",
      "Role-Based Access Control (RBAC) ensuring strict data isolation"
    ]
  },
  {
    icon: assets.database_icon,
    iconDark: assets.database_icon_dark,
    title: "Databases",
    description: "MySQL, PostgreSQL, Oracle, MongoDB, SQL",
    details: [
      "Relational databases: MySQL, PostgreSQL, and Oracle Database",
      "NoSQL database: MongoDB for document-oriented storage",
      "SQL optimization: Joins, Subqueries, Aggregations, and normalization"
    ]
  },
  {
    icon: assets.java_icon,
    iconDark: assets.java_icon_dark,
    title: "Java Core",
    description: "OOPs, Collections, Multithreading, Generics",
    details: [
      "Object-Oriented Programming (OOPs) design and patterns",
      "Java Collections Framework (List, Set, Map, Stream API)",
      "Multithreading, exception handling, custom generics, and file I/O"
    ]
  },
  {
    icon: assets.web_icon,
    iconDark: assets.web_icon,
    title: "Cloud",
    description: "AWS (EC2, S3, RDS)",
    details: [
      "Amazon Web Services (AWS) deployment experience",
      "AWS EC2 for virtual server instances hosting backends",
      "AWS S3 for secure, scalable object storage buckets",
      "AWS RDS for cloud relational database configurations"
    ]
  },
  {
    icon: assets.tools_icon,
    iconDark: assets.tools_icon_dark,
    title: "Tools & Platforms",
    description: "Git, Maven, Tomcat, Postman, Docker , VS Code, Eclipse ,SQL Plus, Swagger, Insomnia",
    details: [
      "Git and GitHub for code version control and team reviews",
      "Maven for project build management and dependency resolution",
      "Apache Tomcat server deployment and local server setups",
      "Testing utilities: Postman, Swagger, Insomnia",
      "Docker for containerized environment testing",
      "IDE environments: VS Code, Eclipse, SQL Plus"
    ]
  },
  {
    icon: assets.concepts_icon,
    iconDark: assets.concepts_icon_dark,
    title: "Concepts",
    description: "MVC, Microservices, SDLC, Debugging",
    details: [
      "MVC Architecture for clean backend-to-frontend separation",
      "Microservices architecture principles and design",
      "Software Development Life Cycle (SDLC) methodologies",
      "Strong debugging, problem-solving, and API integration practices"
    ]
  }
];

export const educationData = [
  { 
    icon: assets.edu_icon, 
    iconDark: assets.edu_icon_dark, 
    title: 'B.Tech in Information Technology', 
    description: 'Bachelor of Technology (2021 - 2025)', 
    details: ['🎓 Completed graduation from Kavikulguru Institute of Technology and Science, Ramtek, Nagpur,  with a strong foundation in programming, data structures, algorithms, and database management.',
               '💻 Gained practical experience through projects in full-stack web development, REST API design, and IoT-based systems.',
               '🚀 Completed internships where I worked on HTML, CSS, and JavaScript, enhancing my development skills.']
  },
  { 
    icon: assets.edu_icon, 
    iconDark: assets.edu_icon_dark, 
    title: 'Higher Secondary Education (Class 12th)', 
    description: 'Science Stream (2019 - 2021)', 
    details: 'Completed Higher Secondary Education from G.B.M.M. Junior College, Hinganghat, Wardha, Maharashtra with a specialization in Physics, Chemistry, Biology, and Mathematics.'
  },
  { 
    icon: assets.edu_icon, 
    iconDark: assets.edu_icon_dark, 
    title: 'Secondary Education (Class 10th)', 
    description: 'General Studies (2018 - 2019)', 
    details: 'Completed Secondary School from Dnyandeep Vidya Niketan, Hinganghat, Wardha, Maharashtra with distinction. Gained interest in computer science and technology, leading to a career path in software development.'
  }
];


export const toolsData = [
   {
    icon: assets.vscode,
    name:'Vs Code'
   },
   {
    icon: assets.oracle,
    name:'Oracle'
   },
   {
    icon: assets.eclipse_icon,
    name:'Eclipse IDE'
   },
   {
    icon: assets.github_icon,
    name:'GitHub'
   },
   {
    icon: assets.git,
    name:'Git'
   },
   {
    icon: assets.mongodb,
    name:'MongoDB'
   },
   {
    icon: assets.postman_icon,
    name:'Postman'
   },
   {
    icon: assets.docker_icon,
    name:'Docker'
   },
   {
    icon: assets.insomnia_icon,
    name:'Insomnia'
   }
];


export const certificationsData = [
  // {
  //   title: "Java Programming Certification",
  //   org: "Online Learning Platform",
  //   year: 2023,
  //   icon: assets.java_icon,          // badge icon
  //   type: "Professional",
  // },
  // {
  //   title: "Spring Boot & REST API Development",
  //   org: "Online Training Program",
  //   year: 2024,
  //   icon: assets.backend_icon,
  //   type: "Professional",
  // },
  // {
  //   title: "Full Stack Web Development",
  //   org: "Internship / Hands-on Training",
  //   year: 2024,
  //   icon: assets.fullstack_icon,
  //   type: "Internship",
  // },
  
];

