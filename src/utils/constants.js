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
        designation: "Lead AI Test Engineer",
        duration: "March 2022 – Present",
        description: (
          <>
            <ul>
              <li>
                Spearheaded a QA team focused on end-to-end testing of AI-based solutions, covering Machine Learning, NLP, and Computer Vision applications.
              </li>
              <li>
                Designed and executed test strategies, automated workflows using Selenium, Cypress, and Postman to enhance release quality and speed.
              </li>
              <li>
                Conducted code reviews, mentored junior QA engineers, and led Agile ceremonies to ensure process alignment and productivity.
              </li>
            </ul>
          </>
        ),
      },
      {
        designation: "AI Test Engineer",
        duration: "February 2021 – February 2022",
        description: (
          <>
            <ul>
              <li>
                Developed manual and automated test cases for AI models, focusing on validating functionality, regression, and model reliability.
              </li>
              <li>
                Wrote Python scripts to automate validation for NLP and computer vision pipelines integrated with CI/CD workflows.
              </li>
              <li>
                Participated in sprint planning, test documentation, and stakeholder reporting.
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
            <ul>
              <li>
                Coordinated cross-functional AI initiatives, managing test strategies and collaborating with engineers to track model development and testing milestones.
              </li>
              <li>
                Handled test execution, bug reporting, and QA documentation.
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
        designation: "Artificial Intelligence Engineer",
        duration: "August 2018 – December 2019",
        description: (
          <>
            <ul>
              <li>
                Engineered computer vision and NLP systems using deep learning techniques and contributed to both development and testing cycles.
              </li>
              <li>
                Assisted in deploying production-level models and maintained quality benchmarks.
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
            <ul>
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
            <ul>
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
            <ul>
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
    title: "Lict Java Training",
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


