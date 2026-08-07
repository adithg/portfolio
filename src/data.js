// Content sourced from Resume 2026
export const PROFILE = {
  name: 'Adith Gangalakunta',
  roles: [
    'Co-Founder & Engineer @ Shake',
    'Prediction Market Builder',
    'AI / ML Engineer',
    'Full-Stack Developer',
  ],
  blurb:
    'I build real-money prediction markets, production RAG pipelines, and ML systems. CS grad from UT Dallas. Previously Software Developer & VC Fellow at True Ventures.',
  email: 'adithg@gmail.com',
  links: {
    github: 'https://github.com/adithg',
    linkedin: 'https://www.linkedin.com/in/adithg/',
    devpost: 'https://devpost.com/adithg',
  },
  resume: '/resume.pdf',
  location: 'Dallas, TX',
};

export const STATS = [
  { num: '+20%', lab: 'Return over 1,142 live trades on Kalshi' },
  { num: '15K+', lab: 'Users on a production RAG pipeline' },
  { num: '75%', lab: 'Win rate across 164 BTC market trades' },
  { num: '2×', lab: 'Top-3 hackathon finishes (Goldman, Cal Hacks)' },
];

export const EXPERIENCE = [
  {
    when: 'Nov 2025 – Present',
    role: 'Co-Founder & Engineer',
    org: 'Shake',
    link: 'https://getshake.app',
    loc: 'Remote',
    points: [
      'Built a real-money social prediction-markets iOS app in Swift/SwiftUI: user-created markets priced by a custom LSMR automated market maker, friend wagers, and a Polymarket-style price chart.',
      'Designed the Supabase backend — wallet + RLS, payout RPC, For-You feed, deep-link invite flow — shipped 8 schema migrations and real-time balance updates through a closed beta with real-money payouts.',
    ],
  },
  {
    when: 'Summer 2025',
    role: 'Software Developer & VC Fellow',
    org: 'The Way & True Ventures',
    loc: 'San Francisco, CA',
    points: [
      'Owned the production RAG pipeline for Archive Assistant (15,000+ users): corpus chunking, Pinecone vector index tuning, retrieval reranking, and LLM orchestration via LangChain.',
      'Tracked latency, throughput, and retrieval recall; tuned batch vs. streaming for cost and p99; built observability tooling for silent retrieval degradation. Assessed True Ventures portfolio companies for AI opportunities.',
    ],
  },
  {
    when: 'May – Aug 2024',
    role: 'Software Engineer & Founder',
    org: 'GGWP · BuildSpace S5 (a16z-backed)',
    loc: 'San Francisco, CA',
    points: [
      'Designed and built a full-stack social app — Django REST API, Supabase (PostgreSQL), React Native client — beta-tested with 150+ users; selected for the a16z BuildSpace S5 cohort.',
    ],
  },
  {
    when: 'Jun – Aug 2024',
    role: 'Product Developer',
    org: 'Portages Health',
    loc: 'Remote',
    points: [
      'Built a mental-health tracking app in React Native + Firebase; ran 40 customer discovery interviews and owned the full product lifecycle.',
    ],
  },
  {
    when: 'Jun – Aug 2023',
    role: 'Full Stack Developer',
    org: 'HelloAppt',
    loc: 'Allen, TX',
    points: [
      'Designed the data model and Django REST API for a scheduling platform supporting 30+ service providers; delivered the backend and React frontend from scratch.',
    ],
  },
];

export const PROJECTS = [
  {
    name: 'Kalshi Trading Bot',
    when: 'May 2026 – Present',
    award: '+20% return · 1,142 trades',
    desc: 'Automated market maker quoting both sides of daily high-temperature markets on a CFTC-regulated exchange — profit from payoff asymmetry, not directional accuracy. A second live strategy exploits favorite-longshot bias in hourly BTC markets (164 trades, 75% win rate) with RSA-PSS-signed execution, Kelly-criterion sizing, and five strategy variants scored against the market’s own Brier score.',
    stack: ['Python', 'TypeScript', 'SciPy', 'Supabase'],
    feature: true,
  },
  {
    name: 'FluxServe',
    when: 'Jun 2026',
    award: 'Production inference server',
    desc: 'Multi-LoRA inference server for FLUX diffusion models: FP8 quantization via torchao, torch.compile, and recompilation-free LoRA hot-swap via PEFT. FastAPI REST API with p50/p95 latency reporting, peak VRAM tracking, Prometheus metrics, and Docker/NVIDIA GPU deployment.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'torchao', 'PEFT'],
    feature: true,
  },
  {
    name: 'TrendSent',
    when: 'Nov 2023',
    award: '3rd · Goldman Sachs Challenge (1,200)',
    desc: 'ML pipeline from SEC filing parsing to sentiment scoring to DCF projection — comparative financial analytics across competitors.',
    stack: ['React', 'Node.js', 'GPT API', 'MindsDB'],
  },
  {
    name: 'Midas',
    when: 'Oct 2023',
    award: '3rd · UC Berkeley Cal Hacks (1,600+)',
    desc: 'Real-time computer-vision facial-expression analysis fused with live market signals for smarter trading decisions.',
    stack: ['React', 'Node.js', 'GPT API', 'Hume.AI'],
  },
];

export const SKILLS = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'Go', 'Java', 'Swift', 'SQL', 'Rust'],
  },
  {
    group: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'SciKit-Learn', 'LangChain', 'Pinecone', 'RAG pipelines', 'LLM evaluation'],
  },
  {
    group: 'Infra & Systems',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Linux'],
  },
  {
    group: 'Web & Mobile',
    items: ['React', 'React Native', 'SwiftUI', 'Node.js', 'Django', 'Express', 'REST APIs'],
  },
];

export const EDUCATION = {
  school: 'The University of Texas at Dallas',
  degree: 'B.S. Computer Science',
  when: 'Aug 2022 – May 2026',
  detail:
    'Coursework: Machine Learning, AI, Advanced Algorithms, Computer Architecture, Automata Theory, UNIX. Alpha Kappa Psi — Vice President of Service.',
};
