// Content sourced from Resume 2026
export const PROFILE = {
  name: ['ADITH', 'GANGALAKUNTA'],
  role: 'software engineer / ai + prediction markets',
  sub: 'I build AI pipelines and market infrastructure: RAG systems in production, trading engines, and the apps on top.',
  email: 'adithg@gmail.com',
  links: {
    github: 'https://github.com/adithg',
    linkedin: 'https://linkedin.com/in/adithg',
    devpost: 'https://devpost.com/adithg',
  },
  resume: '/resume.pdf',
};

export const WORK = [
  {
    name: 'Shake',
    viz: 'market',
    stack: 'Swift / SwiftUI / Supabase / LSMR',
    desc: 'Real-money social prediction markets on iOS: user-created markets priced by a custom LSMR market maker, friend wagers, and Polymarket-style price charts.',
    stat: ['custom market maker', 'wallet with RLS', 'real-money closed beta'],
    links: [
      { label: 'live', href: 'https://getshake.app' },
      { label: 'github', href: 'https://github.com/adithg' },
    ],
  },
  {
    name: 'Kalshi Trading Bot',
    viz: 'curve',
    stack: 'Python / TypeScript / SciPy / Supabase',
    desc: 'Automated market maker quoting both sides of daily weather markets on a CFTC-regulated exchange, plus a live favorite-longshot strategy in hourly BTC markets.',
    stat: ['+20% return over 1,142 trades', '75% win rate on BTC markets'],
    links: [{ label: 'github', href: 'https://github.com/adithg' }],
  },
  {
    name: 'FluxServe',
    viz: 'latency',
    stack: 'Python / PyTorch / FastAPI / torchao / PEFT',
    desc: 'Production multi-LoRA inference server for FLUX diffusion models: FP8 quantization, torch.compile, and recompilation-free LoRA hot-swap.',
    stat: ['p50/p95 latency reporting', 'Prometheus + Docker/NVIDIA deploy'],
    links: [{ label: 'github', href: 'https://github.com/adithg' }],
  },
  {
    name: 'TrendSent',
    viz: 'bars',
    stack: 'React / Node / GPT API / MindsDB',
    desc: 'ML pipeline turning SEC filings into sentiment scores and DCF projections for comparative equity analytics.',
    stat: ['3rd place, Goldman Sachs Challenge (1,200 participants)'],
    links: [{ label: 'devpost', href: 'https://devpost.com/adithg' }],
  },
  {
    name: 'Midas',
    viz: 'mesh',
    stack: 'React / Hume.AI / MindsDB',
    desc: 'Real-time inference fusing facial-expression analysis with market signals for crypto trading decisions.',
    stat: ['3rd place, UC Berkeley Cal Hacks (1,600+ participants)'],
    links: [{ label: 'devpost', href: 'https://devpost.com/adithg' }],
  },
];

export const EXPERIENCE = [
  {
    co: 'Shake',
    yr: '2025–now',
    when: 'nov 2025 to present / remote',
    role: 'co-founder + engineer',
    points: [
      'Building a real-money social prediction-markets iOS app in Swift/SwiftUI: markets priced by a custom LSMR automated market maker, friend wagers, and live price charts.',
      'Designed the Supabase backend — wallet with RLS, payout RPC, For-You feed, deep-link invites — and shipped 8 schema migrations with real-time balance updates through a closed beta with real-money payouts.',
    ],
    tags: ['Swift', 'SwiftUI', 'Supabase', 'LSMR'],
  },
  {
    co: 'The Way & True Ventures',
    yr: 'summer 2025',
    when: 'summer 2025 / san francisco',
    role: 'software developer + vc fellow',
    points: [
      'Owned the production RAG pipeline behind Archive Assistant (15,000+ users): corpus chunking, Pinecone index tuning, retrieval reranking, LangChain orchestration.',
      'Tracked latency, throughput, and retrieval recall; tuned batch vs. streaming for cost and p99; built observability tooling for silent retrieval degradation.',
      'Assessed True Ventures portfolio companies for AI implementation opportunities.',
    ],
    tags: ['LangChain', 'Pinecone', 'RAG', 'LLM evaluation'],
  },
  {
    co: 'GGWP',
    yr: '2024',
    when: 'may to aug 2024 / san francisco',
    role: 'software engineer + founder',
    points: [
      'Designed and built a full-stack social app: Django REST API, Supabase data layer, React Native client.',
      'Beta-tested with 150+ users and selected for the a16z-backed BuildSpace S5 cohort.',
    ],
    tags: ['Django', 'Supabase', 'React Native'],
  },
  {
    co: 'Portages Health',
    yr: '2024',
    when: 'june to aug 2024 / remote',
    role: 'product developer',
    points: [
      'Built a mental-health tracking app in React Native and Firebase.',
      'Ran 40 customer discovery interviews and owned the mobile product lifecycle from design to deployment.',
    ],
    tags: ['React Native', 'Firebase'],
  },
  {
    co: 'HelloAppt',
    yr: '2023',
    when: 'june to aug 2023 / allen, tx',
    role: 'full stack developer',
    points: [
      'Designed the data model and Django REST API for a scheduling platform supporting 30+ service providers.',
      'Delivered the full stack — backend, API, and React frontend — from scratch.',
    ],
    tags: ['Django', 'React', 'REST APIs'],
  },
];

export const SKILLS = [
  { group: 'languages', items: ['Python', 'TypeScript', 'JavaScript', 'C/C++', 'Go', 'Java', 'Swift', 'SQL', 'Rust'] },
  {
    group: 'ai / ml',
    items: ['PyTorch', 'TensorFlow', 'SciKit-Learn', 'LangChain', 'Pinecone', 'GPT APIs', 'RAG pipelines', 'LLM evaluation'],
  },
  {
    group: 'infra / systems',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Linux', 'Bash', 'Git'],
  },
  { group: 'web / mobile', items: ['React', 'React Native', 'SwiftUI', 'Node.js', 'Django', 'Express', 'REST APIs'] },
];

export const ABOUT = {
  bio1: "I'm a computer science grad from UT Dallas (class of 2026), with coursework in machine learning, AI, advanced algorithms, and computer architecture, and Vice President of Service for Alpha Kappa Psi.",
  bio2: 'I like the seam where software meets markets: pricing engines, retrieval systems, trading bots, and the infrastructure that keeps them honest.',
  workingWith: ['Swift + SwiftUI', 'Supabase', 'Python + SciPy', 'PyTorch + torchao', 'LangChain + Pinecone'],
};
