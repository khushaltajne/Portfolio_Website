import arrow_icon_dark from './arrow-icon-dark.png';
import arrow_icon from './arrow-icon.png';
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
import web_icon from './web-icon.png';

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
    oracle,
    eclipse_icon,
    github_icon,
    user_profile
};

export const projectsData = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Deployed on Vercel",
    ],
    repo: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
  },
  {
    name: "Shopping Mall ( JavaScript API Project )",
    description: "Developed a dynamic web application that fetches data from a public API and displays it in a clean, responsive layout.Styled the interface and implemented interactive features entirely using JavaScript without relying on external frameworks.",
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
    title: 'Programming Languages', 
    description: 'Java, C , JavaScript', 
    details: 'Strong understanding of core programming concepts and OOP principles. Skilled in Java for backend development, with problem-solving skills honed through C, and proficient in JavaScript for creating interactive web functionalities.'
  },
  { 
    icon: assets.ui_ux, // Replace with an actual icon asset
    iconDark: assets.frontend_icon_dark, // Replace with actual dark mode icon
    title: 'Frontend Development', 
    description: 'HTML, CSS, React.js', 
    details: 'Experienced in creating responsive, dynamic, and user-friendly interfaces using HTML and CSS. Skilled in building modern single-page applications with React.js, applying best practices in UI/UX design and performance optimization.'
  },
  { 
    icon: assets.backend_icon, // Replace with an actual icon asset
    iconDark: assets.database_icon_dark, // Replace with actual dark mode icon
    title: 'Database Technologies', 
    description: 'SQL, Oracle', 
    details: 'Proficient in designing, querying, and managing relational databases. Experienced with SQL for web applications and Oracle for enterprise-grade database solutions, including schema design and optimization.'
  },
  { 
    icon: assets.edu_icon, 
    iconDark: assets.edu_icon_dark, 
    title: 'Education', 
    description: 'B.Tech in Information Technology', 
    details: 'Graduated with a Bachelor of Technology in Information Technology, where I gained strong foundations in programming, data structures, algorithms, and database management. Completed academic projects involving full-stack development, REST API design, and software engineering practices.' 
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
   }
];