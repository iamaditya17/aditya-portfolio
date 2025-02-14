import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  react,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  rumango,
  smartters,
  SOUL,
  amaBhoomi,
  bankReport,
  bsabt,
  threejs,
  logo,
} from "../assets";


import aws from '../assets/tech/aws.png';
import expressjs from '../assets/tech/expressjs.png';
import erpnext from '../assets/tech/erpnext.png';
import oracle from '../assets/tech/oracle.png';
import postgresql from '../assets/tech/postgresql.png';
import powerBI from '../assets/tech/powerBI.png';
import terraform from '../assets/tech/terraform.png';
import jQuery from '../assets/tech/jQuery.png';
import jwt from '../assets/tech/jwt.png';
import mySql from '../assets/tech/mySql.png';
import oraclePlSql from '../assets/tech/oraclePlSql.png';
import microsoftSqlServer from '../assets/tech/microsoftSqlServer.png';
import vite from '../assets/tech/vite.png';



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work-experience",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Cloud & Devops Engineer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name:"CSS",
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
    name: "JQuery",
    icon: jQuery,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "My SQL",
    icon: mySql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Oracle PL/SQL",
    icon: oraclePlSql,
  },
  {
    name: "Oracle Data Integrator",
    icon: oracle,
  },
  {
    name: "MS SQL Server",
    icon: microsoftSqlServer,
  },
  {
    name: "Power BI",
    icon: powerBI,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "JSON Web Token",
    icon: jwt,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ErpNext",
    icon: erpnext,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "SOUL Ltd.",
    icon: SOUL,
    iconBg: "#FFFFFF",
    date: "June 2024 - Current",
    points: [
      "Developed a scalable front-end using React.js, achieving a 20% improvement in application responsiveness and user experience. Designed and implemented a responsive interface enabling citizens to book facilities seamlessly, resulting in a 10% increase in user engagement and satisfaction.",
      "Optimized a web application using lazy loading, animations, and email notifications, reducing load time by 30% and bounce rates by 20%",
      "Optimized ERPNext modules by designing workflows, screens, and role-based permissions, improving HR management efficiency by 15%. Integrated robust Python back-end functionality, streamlining processes and enhancing user experience for HR operations.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Consultant",
    company_name: "Rumango Software and Consulting Services Pvt Ltd.",
    icon: rumango,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
      "Analyzed banking application data by extracting and transforming datasets utilizing SQL, PL/SQL, and Oracle Data Integrator; delivered actionable insights that improved decision-making cycles for finance teams.",
      "Developed and maintained interactive dashboards and reports in OBIEE, Power BI, and Oracle BIP, resulting in a 15% improvement in data-driven decision-making. ",
      "Created and disseminated comprehensive transaction and general ledger reports, leading to a 20% reduction in data query response times",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Smartters Pvt Ltd.",
    icon: smartters,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "I worked extensively with technologies such as JavaScript, TypeScript, Node.js, Express.js, and Feather.js to design and implement scalable server-side applications.",
      "I utilized MongoDB and SQL databases, leveraging Sequelize as an ORM for efficient database modeling and management.",
      "My responsibilities included developing RESTful APIs, integrating third-party services, and optimizing database queries to ensure high performance and reliability.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AMA BHOOMI: Parks Management",
    description:
      "A platform for managing parks, playgrounds, and event spaces, offering easy booking, resource optimization, and improved facility maintenance for both citizens and administrators.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Redux", color: "pink-text-gradient" },
      { name: "Razorpay", color: "blue-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
    ],
    image: amaBhoomi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bank Loan Report Analysis",
    description:
      "Analyzed banking data using SQL, PL/SQL, and Oracle tools, with dynamic Power BI dashboards and data cleaning, improving decisions by 15% and query times by 20%.",
    tags: [
      { name: "Oracle SQL", color: "blue-text-gradient" },
      { name: "Ms SQL Server", color: "blue-text-gradient" },
      { name: "Oracle Data Integrator", color: "green-text-gradient" },
      { name: "OBIEE", color: "pink-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
    ],
    image: bankReport,
    source_code_link: "https://github.com/",
  },
  {
    name: "BSABT: Bus Terminal Management System",
    description:
      "IoT-based system for bus terminal efficiency, providing real-time availability, congestion reduction, improved security, and streamlined operations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
    ],
    image: bsabt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
