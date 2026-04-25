// data.jsx — content
const PROFILE = {
  name: "Adith Gangalakunta",
  role: "CS @ UT Dallas · Builder · Founder",
  blurb: "Computer Science senior at UT Dallas building AI products, full-stack tools, and the occasional weekend hackathon win. Most recently a Software Developer & VC Fellow at True Ventures.",
  email: "adithg@gmail.com",
  phone: "945-344-9611",
  links: {
    linkedin: "https://www.linkedin.com/in/adithg/",
    github: "https://github.com/adithg",
    devpost: "https://devpost.com/adithg",
  },
  location: "Richardson / Dallas, TX",
  status: "Graduating May 2026 · open to new-grad SWE roles",
};

const STATS = [
  { num: "15K+", lab: "Users on RAG meditation tool" },
  { num: "4×", lab: "Hackathon wins · 2nd & 3rd place" },
  { num: "3", lab: "Startups shipped to real users" },
  { num: "150+", lab: "Beta testers across products" },
];

const EXPERIENCE = [
  {
    when: "Summer 2025",
    role: "Software Developer & VC Fellow",
    org: "The Way · True Ventures",
    loc: "Remote",
    blurb: [
      "Shipped ",
      { pop: "Archive Assistant" },
      ", a RAG model on LangChain + Pinecone serving ",
      { pop: "15,000+ users" },
      " authentic meditation guidance pulled from direct archival quotes.",
    ],
    extra: "Assessed True Ventures portfolio companies for strategic AI implementation opportunities.",
  },
  {
    when: "May–Aug 2024",
    role: "Founder",
    org: "GGWP · BuildSpace S5 (a16z-backed)",
    loc: "San Francisco, CA",
    blurb: [
      "Designed & built a social app fostering competition among solo gamers. ",
      "React Native + Supabase + Django, beta-tested with ",
      { pop: "150+ users" },
      ".",
    ],
    extra: "Selected cohort taking a raw idea to a shipped product over the summer.",
  },
  {
    when: "Jun–Aug 2024",
    role: "Product Developer",
    org: "Portages Health",
    loc: "Remote",
    blurb: [
      "Built mental-health tracking features used by 40 early customers. ",
      "React Native frontend, Firebase backend. Specifics under NDA.",
    ],
    extra: "",
  },
  {
    when: "Jun–Aug 2023",
    role: "Full-Stack Developer",
    org: "HelloAppt",
    loc: "Allen, TX",
    blurb: [
      "Engineered a scheduling system supporting ",
      { pop: "30+ service providers" },
      ", architected to scale to hundreds. Picked up Django and the MERN stack along the way.",
    ],
    extra: "",
  },
];

const PROJECTS = [
  {
    id: "archive",
    name: "Archive Assistant",
    when: "2025",
    award: "15K+ users",
    desc: "RAG-powered meditation guide that retrieves authentic archival quotes instead of hallucinating. Built at The Way / True Ventures.",
    stack: ["LangChain", "Pinecone", "Python", "RAG"],
    tags: ["AI", "Production"],
    feature: true,
  },
  {
    id: "ggwp",
    name: "GGWP",
    when: "2024",
    award: "BuildSpace S5",
    desc: "A social app that turns solo gaming sessions into a friendly leaderboard. Reached 150+ beta testers.",
    stack: ["React Native", "Supabase", "Django"],
    tags: ["Founder", "Mobile"],
  },
  {
    id: "take10",
    name: "Take10",
    when: "Nov 2023",
    award: "🥈 2nd / 100 — HackUNT",
    desc: "Tracks student stress in real time and prioritizes tasks by difficulty + emotional load. When you should take a break, basically.",
    stack: ["React", "Hume.AI", "GPT", "Python"],
    tags: ["Hackathon", "AI"],
  },
  {
    id: "trendsent",
    name: "TrendSent",
    when: "Nov 2023",
    award: "🥉 3rd / 1,200 — Goldman Sachs",
    desc: "ML projection of Discounted Cash Flow combined with SEC filing sentiment for full-stack financial analysis.",
    stack: ["React", "NodeJS", "GPT API", "MindsDB"],
    tags: ["Hackathon", "AI", "Fintech"],
  },
  {
    id: "midas",
    name: "Midas",
    when: "Oct 2023",
    award: "🥉 3rd / 1,600 — UC Berkeley",
    desc: "Reads your face mid-trade. Computer-vision sentiment loops back into smarter crypto decisions.",
    stack: ["React", "NodeJS", "GPT", "MindsDB", "Hume.AI"],
    tags: ["Hackathon", "AI", "Fintech"],
  },
  {
    id: "drugradar",
    name: "DrugRadar",
    when: "Apr 2023",
    award: "🥉 3rd / 300 — Axxess",
    desc: "Snap a label, get NLP-driven OTC + prescription analysis with interaction & side-effect warnings.",
    stack: ["React", "NodeJS", "ChatGPT", "HTML"],
    tags: ["Hackathon", "Healthcare"],
  },
];

const SKILLS = {
  Languages: ["Java", "C / C++", "Go", "Python", "Swift", "SQL", "Bash"],
  "Web & Mobile": ["React", "React Native", "Node.js", "Express", "Django", "MongoDB", "PostgreSQL"],
  "AI / ML": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "Pandas", "LangChain", "Pinecone"],
  "Infra & Tools": ["Docker", "Kubernetes", "GCP", "Linux", "Git", "JIRA"],
};

const NOW = [
  { h: "Building", p: "Finishing senior year at UTD — focused on AI/ML coursework and shipping tools that actually get used." },
  { h: "Reading", p: "RAG retrieval papers, anything in the Anthropic docs, and the occasional shōnen manga chapter." },
  { h: "Open to", p: "New-grad SWE roles for Summer 2026, especially AI infra, dev tools, or fintech." },
];

const INTERESTS = ["Music", "Movies", "Hiking", "Fashion", "Comics", "Anime", "Gaming", "Gym"];

Object.assign(window, { PROFILE, STATS, EXPERIENCE, PROJECTS, SKILLS, NOW, INTERESTS });
