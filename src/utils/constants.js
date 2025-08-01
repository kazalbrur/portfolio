import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJava,
  FaLinkedin,
  FaMediumM,
  FaNodeJs,
  FaPython,
  FaReact
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { AiFillCode } from "react-icons/ai";
import { BiLogoJquery } from "react-icons/bi";
import {
  BsBug,
  BsDatabaseX,
  BsFileBarGraph,
  BsGit,
  BsGlobe,
  BsRobot // Use BsRobot as a fallback for missing icons
} from "react-icons/bs";
import { FaHashnode } from "react-icons/fa6";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import {
  SiAppium,
  SiC,
  SiCypress,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGitlab,
  SiGnubash,
  SiJest,
  SiLinux,
  SiMarkdown,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPlaywright,
  SiPostgresql,
  SiPostman, // Use SiTestcafe as a fallback for SiPyTest
  SiSelenium,
  SiTailwindcss,
  SiTestcafe
} from "react-icons/si";
import {
  TbBrandBootstrap,
  TbBrandCpp,
  TbBrandJavascript,
  TbBrandRedux,
  TbBrandTypescript
} from "react-icons/tb";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Software Qaulity Assurance",
  icon: BsBug,
  },
    {
    interest: "Artifitial Intelligence",
  icon: GiArtificialIntelligence,
  },    
    {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },

  {
    interest: "Data Extraction",
    icon: BsDatabaseX,
  },
    {
    interest: "Data Visualization",
    icon: BsFileBarGraph,
  },
    {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: TbBrandJavascript,
        color: "#F7DF1E"
      },
      {
        name: "TypeScript",
        icon: TbBrandTypescript,
        color: "#3178C6"
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB"
      },
      {
        name: "C++",
        icon: TbBrandCpp,
        color: "#00599C"
      },
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC"
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#007396"
      },
      {
        name: "Bash",
        icon: SiGnubash,
        color: "#4EAA25"
      },
    ]
  },
  {
    category: "JavaScript Frameworks",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000"
      },
      {
        name: "Redux",
        icon: TbBrandRedux,
        color: "#764ABC"
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933"
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#000000"
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688"
      },
    ]
  },
  {
    category: "Version Control Systems",
    skills: [
      {
        name: "Git",
        icon: BsGit,
        color: "#F05032"
      },
      {
        name: "GitLab",
        icon: SiGitlab,
        color: "#FC6D26"
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF"
      },
    ]
  },
  {
    category: "Web Technologies",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26"
      },
      {
        name: "CSS3",
        icon: FaCss3,
        color: "#1572B6"
      },
 
      {
        name: "Bootstrap",
        icon: TbBrandBootstrap,
        color: "#7952B3"
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4"
      },
      {
        name: "jQuery",
        icon: BiLogoJquery,
        color: "#0769AD"
      },

      {
        name: "RESTful APIs",
        icon: SiExpress,
        color: "#000000"
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37"
      },
      {
        name: "Markdown",
        icon: SiMarkdown,
        color: "#000000"
      },
    ]
  },
  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791"
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248"
      },

      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1"
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28"
      }
    ]
  },
  {
    category: "Testing Tools",
    skills: [
      {
        name: "Jest",
        icon: SiJest,
        color: "#C21325"
      },
      {
        name: "Selenium",
        icon: SiSelenium,
        color: "#43B02A"
      },
      {
        name: "Playwright",
        icon: SiPlaywright,
        color: "#2EAD33"
      },
      {
        name: "Cypress",
        icon: SiCypress,
        color: "#2EAD33"
      },
      {
        name: "PyTest",
        icon: SiTestcafe, // Fallback icon
        color: "#0A9B8E"
      },
      {
        name: "Appium",
        icon: SiAppium,
        color: "#0A9B8E"
      },
    ]
  },
  {
    category: "AI & Development Tools",
    skills: [
      {
        name: "RAG",
        icon: GiArtificialIntelligence,
        color: "#FF6B6B"
      },
      {
        name: "LangChain",
        icon: BsRobot,
        color: "#00A67E"
      },
      {
        name: "LangGraph",
        icon: BsRobot, // Fallback icon
        color: "#00A67E"
      },
      {
        name: "LangSmith",
        icon: BsRobot, // Fallback icon
        color: "#00A67E"
      },
      {
        name: "CrewAI",
        icon: BsRobot, // Fallback icon
        color: "#00A67E"
      },

      
      {
        name: "Prompt Engineering",
        icon: GiArtificialIntelligence,
        color: "#FF6B6B"
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED"
      },
      {
        name: "Nginx",
        icon: SiNginx,
        color: "#009639"
      },

      {
        name: "Linux",
        icon: SiLinux,
        color: "#FCC624"
      },
    ]
  }
];

export const workData = [
  {
    company: "Next Solution Lab",
    companyImg: "next_solution_lab_logo.jpeg",
    roles: [
      {
        designation: "Lead Software Quality Assurance Engineer",
        duration: "December 2023 – Present",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Lead comprehensive QA strategy and execution across AI‐driven platforms, AI chatbots, AI Agent and MVPs, ensuring smooth and stable product releases in rapid sprint cycles.
              </li>
              <li>
                Deliver robust end‐to‐end testing for Virtual Tryon application, validating 2D body mapping accuracy, virtual try‐on functionality, and camera‐based hand gesture interaction.
              </li>
              <li>
                Execute comprehensive testing for Car Selling E‐commerce platform, covering UI/UX flows, REST API validation, and database integrity.
              </li>
               <li>
                Mentor 5 QA engineers and establish best practices for web and AI system testing methodologies.
              </li>

            </ul>
          </>
        ),
      },
      {
        designation: "Senior Software Quality Assurance Engineer",
        duration: "June 2022 – November 2023",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Automated multilingual document OCR QA for CRNN/MaskRCNN pipelines, reducing validation time by 70%.
              </li>
              <li>
               Implemented bounding box layout validation techniques, cutting manual verification time by 70% and improv‐ ing accuracy.
              </li>
              <li>
                Executed extensive load testing and performance profiling using JMeter and Locust, improving OCR response time by 30%.
              </li>
              <li>
              Collaborated cross‐functionally on micro‐services QA with AWS cloud services (EC2, Lambda, API Gateway) and Dockerized AI workflows.
              </li>
              <li>
               Designed and implemented test automation for selection‐based template matching system with advanced validation protocols.
              </li>
            </ul>
          </>
        ),
      },

      {
        designation: "Software Quality Assurance Engineer",
        duration: "March 2021 – May 2022",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Delivered comprehensive QA for internal annotation management tool (Annotex) supporting computer vision/NLP datasets, serving 50+ annotators and 3+ ML teams.
              </li>
              <li>
                Validated micro‐services architecture for multilingual NLP and computer vision tasks with focus on data integrity and system reliability.
              </li>
              <li>
                Developed comprehensive API regression test collections and integrated them with GitLab CI for automated validation.
              </li>
              <li>
               Implemented quality metrics tracking and reporting systems for continuous improvement.
              </li>
            </ul>
          </>
        ),
      },
      {
        designation: "AI Project Coordinator",
        duration: "February 2020 – February 2021",
        description: (
          <>
            <ul className="experience-list">
              <li>
               Oversaw QA coordination for computer vision and NLP‐based demos and annotation prototypes in R&D environment.
              </li>
              <li>
                Managed data preparation, test coverage planning, and user acceptance reviews for research projects.
              </li>
              <li>
               Coordinated with ML teams to establish testing protocols for experimental AI models and systems.
              </li>
              <li>
                Developed documentation and standard operating procedures for prototype testing workflows.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Semantics Lab",
    companyImg: "Semanticlab.jpeg",
    roles: [
      {
        designation: "AI Researcher and Developer",
        duration: "August 2018 – December 2019",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Tested and validated OCR and NLP systems for Bengali and English data pipelines with focus on accuracy and performance.
              </li>
              <li>
                Conducted research and development on machine learning model optimization and validation methodologies.
              </li>
              <li>
                Contributed to test design and performance benchmarking for state‐of‐the‐art NLP and computer vision models.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Begum Rokeya University",
    companyImg: "BRUR_Logo.svg.png",
    roles: [
      {
        designation: "Research Assistant – AI & Deep Learning",
        duration: "November 2016 – August 2018",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Conducted foundational AI research in voice recognition, computer vision, and general-purpose AI, contributing to publications and lab experiments.
              </li>
              <li>
                Supported hands-on experiments and collaborated with faculty on R&D projects.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Muslim Aid Institute of Technology",
    companyImg: "MAIT.png",
    roles: [
      {
        designation: "Part-Time Instructor – Web Development",
        duration: "December 2015 – August 2018",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Taught HTML, CSS, and PHP-based web design/development courses to students and professionals in vocational training programs.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Future IT Solutions",
    companyImg: "FutureIT.jpeg",
    roles: [
      {
        designation: "Junior PHP Programmer",
        duration: "September 2015 – March 2016",
        description: (
          <>
            <ul className="experience-list">
              <li>
                Developed user-friendly PHP web applications, assisted in debugging and deployment, and gained hands-on software engineering experience.
              </li>
            </ul>
          </>
        ),
      }
    ]
  }
];




export const projectsData = [
  {
    type: "Web Development",
    title: "portfolio",
    image: "portfolio",
    link: null,
    source: "https://github.com/kazalbrur/portfolio",
  },
  {
    type: "Web Development",
    title: "AnuronAI",
    image: "anuron_ai",
    link: null,
    source: "https://github.com/kazalbrur/AnuronAI",
  },
  {
    type: "Web Development",
    title: "Movie-App",
    image: "MovieApp",
    link: null,
    source: "https://github.com/kazalbrur/Movie-App",
  },
   {
    type: "Web Development",
    title: "commerce",
    image: "Nextjs_ecommerce",
    link: null,
    source: "https://github.com/kazalbrur/commerce",
  },

   {
    type: "Artifitial Intelligence",
    title: "Bangla Med NER Flask App",
    image: "MedNer",
    link: null,
    source: "https://github.com/kazalbrur/Bangla-Med-NER-Flask-App",
  },
  {
    type: "Artifitial Intelligence",
    title: "Bangla Legal NER Flask App",
    image: "Legal_NER_App",
    link: null,
    source: "https://github.com/kazalbrur/Bangla-Spacy-NER-Flask-App",
  },

  {
    type: "Data Scraping",
    title: "daraz-scraper",
    image: "daraz_scraper",
    link: null,
    source: "https://github.com/kazalbrur/daraz-scraper",
  },
  {
    type: "Data Scraping",
    title: "google_maps_scraper",
    image: "Map_Scrapper",
    link: null,
    source: "https://github.com/kazalbrur/google_maps_scraper",
  },

  {
    type: "Test Automation",
    title: "Selenium Web Automation with GitHub Action",
    image: "Selenium_with_Python_for_Automated_Testing",
    link: null,
    source: "https://github.com/kazalbrur/Selenium_Web_Automation_with_Github_Action",
  },
  {
    type: "Test Automation",
    title: "DemoBlaze Cypress Test Automation",
    image: "Demoblaze",
    link: null,
    source: "https://github.com/kazalbrur/DemoBlaze-Cypress-Test-Automation",
  },
 
  {
    type: "Test Automation",
    title: "PetStore API Testing with Postman and Newman",
    image: "Petsore_api_newman_og-image",
    link: null,
    source: "https://github.com/kazalbrur/PetStore_API_Testing_Postman_newman",
  },
  {
    type: "Test Automation",
    title: "PhpTravels Selenium Automation",
    image: "Php_travels_automation",
    link: null,
    source: "https://github.com/kazalbrur/PhpTravels_selenium_automation",
  },
  {
    type: "Test Automation",
    title: "Pytest API Test with CI/CD",
    image: "Demo_blaze_api_test_Allure_report",
    link: null,
    source: "https://github.com/kazalbrur/Pytest-API-Test-Demo_Github_Action",
  },
  
 
  {
    type: "Study Material",
    title: "Generative AI Course Resources",
    image: "GenAICourse",
    link: null,
    source: "https://github.com/kazalbrur/Generative-AI-Course",
  },
  {
    type: "Study Material",
    title: "Lict JavaTraining",
    image: "LICT_Java",
    link: null,
    source: "https://github.com/kazalbrur/LictJavaTraining",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/kazalbrur",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/kazalchandrabarman/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/kcbcsebru/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/",
    icon: FaXTwitter,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://hashnode.com/@kazalbrur",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
  {
    href: "https://medium.com/@kazalchandrabarman",
    icon: FaMediumM,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "kazal.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;


