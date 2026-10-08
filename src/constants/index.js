const BASE = import.meta.env.BASE_URL;

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: `${BASE}icons/wifi.svg`,
  },
  {
    id: 2,
    img: `${BASE}icons/search.svg`,
  },
  {
    id: 3,
    img: `${BASE}icons/user.svg`,
  },
  {
    id: 4,
    img: `${BASE}icons/mode.svg`,
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: `${BASE}images/finder.png`,
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: `${BASE}images/safari.png`,
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: `${BASE}images/photos.png`,
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: `${BASE}images/contact.png`,
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: `${BASE}images/terminal.png`,
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: `${BASE}images/trash.png`,
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Aug 2026",
    title: "Building Scalable Web Applications with Next.js & Serverless Architectures",
    image: `${BASE}images/blog-2.png`,
    link: "https://github.com/shubham09-patel",
  },
  {
    id: 2,
    date: "Jul 2026",
    title: "Mastering Open Source Contributions: Lessons from markdown-reader & preCICE",
    image: `${BASE}images/blog-4.png`,
    link: "https://github.com/shubham09-patel",
  },
  {
    id: 3,
    date: "Feb 2026",
    title: "Daily DSA Discipline: Conquering Trees, Graphs & Dynamic Programming",
    image: `${BASE}images/blog-5.png`,
    link: "https://leetcode.com",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "C++"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "REST APIs", "Redis", "DevOps Fundamentals"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Workflows",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: `${BASE}icons/github.svg`,
    bg: "#24292e",
    link: "https://github.com/shubham09-patel",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: `${BASE}icons/linkedin.svg`,
    bg: "#0a66c2",
    link: "https://www.linkedin.com/in/shubham-patel-682621249/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: `${BASE}icons/twitter.svg`,
    bg: "#1d9bf0",
    link: "https://x.com/champ1303",
  },
  {
    id: 4,
    text: "Instagram",
    icon: `${BASE}icons/instagram-5.png`,
    bg: "#ec0075",
    link: "https://www.instagram.com/aniimer_studio/?hl=en",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: `${BASE}icons/gicon1.svg`,
    title: "Library",
  },
  {
    id: 2,
    icon: `${BASE}icons/gicon2.svg`,
    title: "Memories",
  },
  {
    id: 3,
    icon: `${BASE}icons/file.svg`,
    title: "Places",
  },
  {
    id: 4,
    icon: `${BASE}icons/gicon4.svg`,
    title: "People",
  },
  {
    id: 5,
    icon: `${BASE}icons/gicon5.svg`,
    title: "Favorites",
  },
];

// Dynamic Gallery Array Mapped to root public images
const gallery = [
  // 📍 Kedarnath
  { id: 1, img: `${BASE}Kedarnath1.jpeg`, place: "kedarnath", isFavorite: true, isPeople: true, title: "Kedarnath Temple View" },
  { id: 2, img: `${BASE}Kedarnath2.jpeg`, place: "kedarnath", isFavorite: true, isPeople: false, title: "Kedarnath Scenery" },
  { id: 3, img: `${BASE}Kedarnath3.jpeg`, place: "kedarnath", isFavorite: false, isPeople: true, title: "Kedarnath Treks" },
  { id: 4, img: `${BASE}Kedarnath4.jpeg`, place: "kedarnath", isFavorite: false, isPeople: false, title: "Himalayan Peaks" },
  { id: 5, img: `${BASE}Kedarnath5.jpeg`, place: "kedarnath", isFavorite: true, isPeople: true, title: "Kedarnath Memories" },

  // 📍 Nainital
  { id: 6, img: `${BASE}nanital1.jpeg`, place: "nainital", isFavorite: true, isPeople: true, title: "Nainital Lake View" },
  { id: 7, img: `${BASE}Nanital2.jpeg`, place: "nainital", isFavorite: false, isPeople: false, title: "Mall Road Vibe" },
  { id: 8, img: `${BASE}Nanital3.jpeg`, place: "nainital", isFavorite: true, isPeople: true, title: "Nainital Hilltop" },
  { id: 9, img: `${BASE}Nanital4.jpeg`, place: "nainital", isFavorite: false, isPeople: true, title: "Boating Experience" },

  // 📍 G.L. Bajaj / Noida Campus
  { id: 10, img: `${BASE}G.L. Bajaj1.jpeg`, place: "noida", isFavorite: true, isPeople: true, title: "G.L. Bajaj Campus" },
  { id: 11, img: `${BASE}G.L. Bajaj2.jpeg`, place: "noida", isFavorite: false, isPeople: false, title: "College Days" },
  { id: 12, img: `${BASE}G.L. Bajaj3.jpeg`, place: "noida", isFavorite: true, isPeople: true, title: "Developer Workspace" },
  { id: 13, img: `${BASE}G.L. Bajaj4.jpeg`, place: "noida", isFavorite: false, isPeople: true, title: "Noida Campus Life" },
];

const PLACES_LIST = [
  { id: "kedarnath", name: "Kedarnath", count: "5 Photos", cover: `${BASE}Kedarnath1.jpeg` },
  { id: "nainital", name: "Nainital", count: "4 Photos", cover: `${BASE}nanital1.jpeg` },
  { id: "noida", name: "G.L. Bajaj / Noida", count: "4 Photos", cover: `${BASE}G.L. Bajaj1.jpeg` },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  PLACES_LIST,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work & Hackathons",
  icon: `${BASE}icons/work.svg`,
  kind: "folder",
  children: [
    {
      id: "finxthon",
      name: "FinxThon '24 Hackathon",
      company: "FinxThon '24",
      location: "India",
      duration: "2024",
      kind: "folder",
      experience: {
        description: [
          "Secured 6th place overall among over 200 competing developer teams.",
          "Designed and shipped a high-performance full-stack solution under strict time constraints.",
          "Demonstrated rapid prototyping, strong team collaboration, and clean architecture.",
        ],
        tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      },
    },
    {
      id: "open-source",
      name: "Open Source Contributions",
      company: "GitHub / Open Source",
      location: "Remote",
      duration: "Ongoing",
      kind: "folder",
      experience: {
        description: [
          "Contributed to open-source software repositories including markdown-reader and preCICE.",
          "Collaborated via Git/GitHub workflows, opening pull requests, and resolving core issues.",
          "Focused on code quality, performance optimizations, and documentation clarity.",
        ],
        tech: ["JavaScript", "TypeScript", "Git", "GitHub"],
      },
    },
    {
      id: "cohort-3",
      name: "100xDevs Cohort 3.0",
      company: "Harkirat Singh's 100xDevs",
      location: "Remote",
      duration: "2025 – Present",
      kind: "folder",
      experience: {
        description: [
          "In-depth focus on full-stack web development, scalable backend systems, and modern DevOps engineering.",
          "Gained hands-on experience with serverless architecture, Redis caching, and Docker/DevOps deployments.",
        ],
        tech: ["Next.js", "TypeScript", "Node.js", "Docker", "DevOps", "Redis"],
      },
    },
  ],
};

const PROJECTS = {
  id: 1,
  type: "projects",
  name: "Projects",
  icon: `${BASE}icons/work.svg`,
  kind: "folder",
  children: [
    // ▶ 1. AI Voice Recruiter
    {
      id: "1",
      name: "AI Voice Recruiter",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-8 left-6",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "A full-stack AI recruitment platform that automates candidate interview questions and evaluation.",
            "Built with Next.js, React.js, and Supabase for backend data handling.",
            "Integrates external REST APIs to dynamically generate real-time interview prompts.",
          ],
          position: "top-10 right-20",
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/-AI-Recruitment-Agent",
          position: "top-5 right-40",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/-AI-Recruitment-Agent",
          position: "top-5 left-10",
        },
      ],
    },

    // ▶ 2. PDF to MCQ Generator
    {
      id: "2",
      name: "PDF to MCQ Generator",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[40rem] left-40",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "An AI tool that parses PDF documents and generates automated multiple-choice quizzes.",
            "Built with Python, Streamlit, spaCy NLP, PyMuPDF, and ReportLab.",
            "Automates text extraction and question generation to speed up quiz creation.",
          ],
          position: "top-52 right-40",
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/MCQ-Generator",
          position: "top-50 right-60",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/MCQ-Generator",
          position: "top-50 right-100",
        },
      ],
    },

    // ▶ 3. Taskflow / Trello Project
    {
      id: "3",
      name: "Taskflow App",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-56 left-6",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          description: [
            "A clean and intuitive task management application designed for productivity.",
            "Built using Express, JavaScript, HTML, and CSS.",
            "Features robust backend route architecture and full CRUD task flows.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/Trello-Project",
          position: "top-40 right-60",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/Trello-Project",
          position: "top-40 right-100",
        },
      ],
    },

   
    // ▶ 4. ANiiMER Studio Folder
{
  id: "4",
  name: "ANiiMER Studio",
  icon: `${BASE}images/folder.png`,
  kind: "folder",
  windowPosition: "top-[44rem] left-6",
  children: [
    {
      id: 1,
      name: "Studio_Stats.txt",
      icon: `${BASE}images/txt.png`,
      kind: "file",
      fileType: "txt",
      subtitle: "ANiiMER STUDIO — 2D Anime Content Creation",
      description: [
        "🎨 Creator & Animator behind ANiiMER STUDIO producing 2D anime-style reels & short films.",
        "📸 Instagram (@aniimer_studio): 3,605+ Followers | 47 Posts",
        "🎥 YouTube (@ANiiMER_STUDIO): 42.9K+ Total Views | 45 Videos",
        "💡 Focus: Original Storyboarding, AI-assisted Animation, & Creative Short-form Content.",
      ],
      position: "top-5 left-5",
    },
    {
      id: 2,
      name: "Instagram Profile",
      icon: `${BASE}icons/instagram-5.png`,
      kind: "file",
      fileType: "url",
      href: "https://www.instagram.com/aniimer_studio/?hl=en",
      position: "top-5 left-44",
    },
    {
      id: 3,
      name: "YouTube Channel",
      icon: `${BASE}images/safari.png`,
      kind: "file",
      fileType: "url",
      href: "https://youtube.com/@aniimer_studio?si=3fR4Tt3JVyhz7B96",
      position: "top-5 left-[22rem]",
    },
  ],
},
    // ▶ 5. NEXtUS
    {
      id: "5",
      name: "NEXtUS",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[26rem] left-6",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          subtitle: "NEXtUS — AI-Powered Learning & Technical Interview Platform",
          description: [
            "Built a high-performance Express & PostgreSQL backend using Prisma ORM to power an AI tutoring platform.",
            "Integrated Google Gemini 2.5 Flash API to deliver automated code debugging, polyglot conversion, and a dynamic AI Mock Interviewer with tier-based difficulty scaling.",
            "Developed custom security, rate-limiting, and JWT authentication middleware to enforce daily plan quotas.",
            "Tech Stack: Node.js, Express.js, PostgreSQL, Prisma ORM, Google Gemini 2.5 Flash API, JWT, Helmet, CORS",
          ],
          position: "top-5 left-5",
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/NEXtUS",
          position: "top-5 left-44",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/NEXtUS",
          position: "top-5 left-[22rem]",
        },
      ],
    },

    // ▶ 6. SwiftBite
    {
      id: "6",
      name: "SwiftBite",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[20rem] left-6",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          subtitle: "SwiftBite — Real-Time Food Delivery & Tracking iOS App",
          description: [
            "Native iOS food delivery and real-time tracking application built with SwiftUI, MapKit, and CoreLocation.",
            "Integrates LiveActivity and SwiftData for persistent state and real-time updates following MVVM architecture.",
            "Tech Stack: SwiftUI, MapKit, CoreLocation, LiveActivity, SwiftData, MVVM",
          ],
          position: "top-5 left-5",
        },
        {
          id: 2,
          name: "Live Video Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7508278245121880064/",
          position: "top-5 left-44",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/SwiftBite",
          position: "top-5 left-[22rem]",
        },
      ],
    },

    // ▶ 7. InspoBox
    {
      id: "7",
      name: "InspoBox",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[10rem] left-6",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          subtitle: "InspoBox — macOS Reference & Production Manager for Animators",
          description: [
            "Built a menu bar and desktop macOS app to collect images, videos, and Pinterest/Instagram links via paste and drag-and-drop, with a masonry grid, genre/tag filters, and search, using local-first storage (JSON + filesystem).",
            "Implemented Open Graph scraping for pin images, AVFoundation video thumbnails, and an animation production tracker with phases, linked references, and deadline notifications.",
            "Tech Stack: SwiftUI, AppKit, AVFoundation, UserNotifications, Combine",
          ],
          position: "top-5 left-5",
        },
        {
          id: 2,
          name: "Live Demo",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/InspoBox",
          position: "top-5 left-44",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/InspoBox",
          position: "top-5 left-[22rem]",
        },
      ],
    },

    // ▶ 8. DayLedger
    {
      id: "8",
      name: "DayLedger",
      icon: `${BASE}images/folder.png`,
      kind: "folder",
      windowPosition: "top-[2rem] left-40",
      children: [
        {
          id: 1,
          name: "Overview.txt",
          icon: `${BASE}images/txt.png`,
          kind: "file",
          fileType: "txt",
          subtitle: "DayLedger — macOS Menu Bar Productivity & Task Tracker",
          description: [
            "A native macOS menu bar task management application built to seamlessly track daily developer tasks.",
            "Automatically carries pending tasks over to next day's targets and provides interactive progress visualizers (like LeetCode-style contribution activity charts).",
            "Available as a standalone .dmg installer for macOS.",
            "Tech Stack: Swift, SwiftUI, AppKit, SwiftData",
          ],
          position: "top-5 left-5",
        },
        {
          id: 2,
          name: "Download .DMG",
          icon: `${BASE}images/safari.png`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/DayLedger/releases",
          position: "top-5 left-44",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: `${BASE}images/GitHub-Logo.wine.svg`,
          kind: "file",
          fileType: "url",
          href: "https://github.com/shubham09-patel/DayLedger",
          position: "top-5 left-[22rem]",
        },
      ],
    }, 


  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: `${BASE}icons/info.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: `${BASE}profile.jpg`,
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: `${BASE}images/txt.png`,
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Hey! I’m Shubham Patel 👋",
      image: `${BASE}profile.jpg`,
      description: [
        "I'm a Full-Stack Software Developer currently completing my B.Tech in Information Technology at G. L. Bajaj Institute of Technology & Management.",
        "My technical focus spans building performant frontend UIs with React.js & Next.js, and robust backend systems with Node.js, Express, TypeScript, MongoDB, PostgreSQL, Supabase, and Redis.",
        "I actively practice Data Structures & Algorithms on LeetCode and continuously expand my stack into DevOps engineering.",
        "I love building products, contributing to open-source software, and solving real-world developer problems.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: `${BASE}icons/file.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: `${BASE}images/pdf.png`,
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: `${BASE}icons/trash.svg`,
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: `${BASE}images/image.png`,
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: `${BASE}images/trash-3.png`,
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  projects: PROJECTS,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };