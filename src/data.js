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

// Terminal-style SVG covers for the accordion gallery (900x1200, data URIs)
const cover = motif => {
  const motifs = {
    market:
      '<polyline points="80,760 200,600 320,680 440,430 560,540 680,380 820,470" fill="none" stroke="#ff4b33" stroke-width="7"/><circle cx="820" cy="470" r="12" fill="#ff4b33"/>',
    curve:
      '<path d="M80,900 C350,890 340,340 450,340 C560,340 550,890 820,900" fill="rgba(255,75,51,0.18)" stroke="#bdbdbd" stroke-width="5"/><line x1="390" y1="340" x2="390" y2="900" stroke="#ff4b33" stroke-width="3" stroke-dasharray="8 12"/><line x1="510" y1="340" x2="510" y2="900" stroke="#ff4b33" stroke-width="3" stroke-dasharray="8 12"/>',
    bars: Array.from({ length: 12 }, (_, i) => {
      const x = 90 + i * 62;
      const hh = [140, 220, 90, 260, 180, 310, 120, 240, 200, 280, 150, 230][i];
      const up = i % 3 !== 1;
      const c = hh > 250 ? '#ff4b33' : up ? '#9a9a9a' : '#565656';
      return `<rect x="${x}" y="${up ? 640 - hh : 640}" width="34" height="${hh}" fill="${c}"/>`;
    }).join(''),
    candles: Array.from({ length: 9 }, (_, i) => {
      const x = 110 + i * 80;
      const o = [520, 580, 470, 620, 540, 430, 590, 500, 460][i];
      const c = [600, 470, 620, 540, 430, 560, 500, 430, 580][i];
      const up = c < o;
      const col = up ? '#ff4b33' : '#6a6a6a';
      const top = Math.min(o, c) - 40;
      const bot = Math.max(o, c) + 40;
      return `<line x1="${x + 14}" y1="${top}" x2="${x + 14}" y2="${bot}" stroke="${col}" stroke-width="3"/><rect x="${x}" y="${Math.min(o, c)}" width="28" height="${Math.abs(c - o)}" fill="${col}"/>`;
    }).join(''),
    mesh: (() => {
      let s = '';
      for (let i = 0; i < 26; i++) {
        const a = (i * 137.5 * Math.PI) / 180;
        const r = 40 + i * 11;
        const x = 450 + Math.cos(a) * r * 0.85;
        const y = 620 + Math.sin(a) * r * 0.62;
        s += `<circle cx="${x}" cy="${y}" r="${i % 7 === 0 ? 9 : 5}" fill="${i % 7 === 0 ? '#ff4b33' : '#8a8a8a'}"/>`;
        if (i > 0 && i % 3 === 0) s += `<line x1="450" y1="620" x2="${x}" y2="${y}" stroke="rgba(180,180,180,0.25)" stroke-width="2"/>`;
      }
      return s;
    })(),
  };
  const dots = '<pattern id="d" width="52" height="52" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#242424"/></pattern>';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200"><defs>${dots}</defs><rect width="900" height="1200" fill="#101010"/><rect width="900" height="1200" fill="url(#d)"/><line x1="80" y1="920" x2="820" y2="920" stroke="#2a2a2a" stroke-width="3"/>${motifs[motif]}</svg>`;
  return `data:image/svg+xml;utf8,${svg.replace(/#/g, '%23').replace(/"/g, "'")}`;
};

export const WORK = [
  {
    name: 'Shake',
    viz: 'market',
    gallery: cover('market'),
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
    gallery: cover('curve'),
    stack: 'Python / TypeScript / SciPy / Supabase',
    desc: 'Automated market maker quoting both sides of daily weather markets on a CFTC-regulated exchange, plus a live favorite-longshot strategy in hourly BTC markets.',
    stat: ['+20% return over 1,142 trades', '75% win rate on BTC markets'],
    links: [{ label: 'github', href: 'https://github.com/adithg' }],
  },
  {
    name: 'FluxServe',
    viz: 'bars',
    gallery: cover('bars'),
    stack: 'Python / PyTorch / FastAPI / torchao / PEFT',
    desc: 'Production multi-LoRA inference server for FLUX diffusion models: FP8 quantization, torch.compile, and recompilation-free LoRA hot-swap.',
    stat: ['p50/p95 latency reporting', 'Prometheus + Docker/NVIDIA deploy'],
    links: [{ label: 'github', href: 'https://github.com/adithg' }],
  },
  {
    name: 'TrendSent',
    viz: 'bars',
    gallery: cover('candles'),
    stack: 'React / Node / GPT API / MindsDB',
    desc: 'ML pipeline turning SEC filings into sentiment scores and DCF projections for comparative equity analytics.',
    stat: ['3rd place, Goldman Sachs Challenge (1,200 participants)'],
    links: [{ label: 'devpost', href: 'https://devpost.com/adithg' }],
  },
  {
    name: 'Midas',
    viz: 'mesh',
    gallery: cover('mesh'),
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
