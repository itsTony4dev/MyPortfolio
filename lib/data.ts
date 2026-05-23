export const site = {
  name: "Tony Ayda",
  title: "Software Engineer",
  tagline:
    "I architect resilient APIs, real-time systems, and data pipelines — engineered for scale, tested for trust.",
  email: "tonyayda.dev@gmail.com",
  phone: "+961 76 120 674",
  location: "Lebanon",
  linkedin: "https://linkedin.com/in/tony-ayda",
  github: "https://github.com/itsTony4dev",
  url: "https://tonyayda.dev",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "Java", "Go"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "RESTful APIs",
      "Socket.IO",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "ClickHouse"],
  },
  {
    category: "Infra & DevOps",
    items: ["Docker", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Testing",
    items: ["Vitest", "Jest"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Angular"],
  },
] as const;

export const experience = [
  {
    company: "VALOORES",
    role: "Software Engineer",
    period: "Nov 2025 – Present",
    highlights: [
      "Led refactoring of an 18k+ line Angular production component",
      "Contributed to ClickHouse infrastructure migration & JDK 8→21 upgrade",
      "Optimized AML query execution with pagination, handling 10k–50k+ records",
      "Fixed critical FormBuilder rendering and data consistency issues",
    ],
  },
  {
    company: "DeveLeb",
    role: "Backend Developer",
    period: "July 2024 – Aug 2025",
    highlights: [
      "Architected backend supporting 200+ concurrent users via optimized PostgreSQL",
      "Built CI/CD pipelines with GitHub Actions, cutting deploy time ~40%",
      "Created TypeScript + Zod framework, saving 20 dev hours/month",
      "Achieved 80% test coverage with Vitest",
      "Built web scrapers (Puppeteer + Cheerio) with 95% accuracy",
    ],
  },
  {
    company: "961 News",
    role: "Backend Developer Volunteer",
    period: "Oct – Nov 2024",
    highlights: [
      "Built a news management platform backend",
      "Implemented media upload handling with Multer",
      "Secured RESTful APIs with rate limiting",
    ],
  },
] as const;

export const projects = [
  {
    name: "Devcord",
    tagline: "Real-time Developer Communication Platform",
    description:
      "A full-stack platform for developer communities — real-time chat, workspaces, code playground, and an intelligent job scraper bot.",
    liveUrl: "https://devcordd.vercel.app",
    githubUrl: "https://github.com/itsTony4dev",
    featured: true,
    stack: [
      "Express.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    highlights: [
      "Real-time chat with JWT auth, RBAC, and email verification",
      "React frontend with Socket.IO and code snippet syntax highlighting",
      "Custom workspace creation for developer communities",
      "Job scraper bot with 95% accuracy from trusted sources",
      "Code playground supporting HTML/CSS/JS and React with live preview",
    ],
  },
  {
    name: "More Coming Soon",
    tagline: "Future projects in the pipeline",
    description:
      "Currently building the next generation of backend tooling. Stay tuned.",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    stack: [],
    highlights: [],
  },
] as const;

export const education = {
  degree: "BSc Computer Science",
  school: "Lebanese International University",
  gpa: "3.7/4.0",
  period: "Oct 2022 – June 2025",
} as const;

export const certifications = [
  { name: "Network Security", date: "July 2025" },
  {
    name: "CCNA: Switching, Routing & Wireless Essentials",
    date: "June 2025",
  },
  { name: "IT Essentials 8", date: "May 2025" },
  { name: "CCNAv7: Introduction to Networks", date: "Mar 2024" },
] as const;

export const aboutText = `I'm a backend-focused software engineer, obsessed with the craft of building systems that stay fast under pressure and honest under audit.

From real-time platforms like Devcord to enterprise AML pipelines at VALOORES, I focus on clean architecture, measurable performance, and code that the next engineer won't hate. I care about test coverage, deploy velocity, and the details most people skip — pagination that actually scales, migrations that don't wake anyone up at 3 AM, and APIs that fail gracefully.`;
