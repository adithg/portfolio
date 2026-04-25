// components.jsx
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Theme toggle hook ----------
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, () => setTheme(t => t === "light" ? "dark" : "light")];
}

// ---------- Reveal-on-scroll wrapper ----------
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  // Default to visible; only mark as hidden if we confirm it's offscreen on mount.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    // Already in viewport (or close to it) — leave visible, no animation.
    if (rect.top < vh * 0.95) return;
    // Offscreen: hide, then reveal when it scrolls in.
    setHidden(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHidden(false); io.disconnect(); }
    }, { threshold: 0.05, rootMargin: "0px 0px -8% 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={"reveal" + (hidden ? " hide" : "")} style={{ transitionDelay: delay + "ms" }}>
      {children}
    </div>
  );
}

// ---------- Top bar ----------
function TopBar({ theme, onToggleTheme, onOpenCmdK }) {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const opts = { timeZone: "America/Chicago", hour: "2-digit", minute: "2-digit", hour12: false };
      setNow(d.toLocaleTimeString("en-US", opts) + " CT");
    };
    fmt();
    const t = setInterval(fmt, 1000 * 30);
    return () => clearInterval(t);
  }, []);
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <div className="left">
          <a href="#top" className="mark">Adith G.</a>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#now">Now</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="right">
          <span style={{ color: "var(--ink-3)" }}>{now}</span>
          <button className="icon-btn" title="Toggle theme" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "light" ? "☾" : "☼"}
          </button>
          <button className="icon-btn" onClick={onOpenCmdK} title="Command palette" aria-label="Open command palette" style={{ width: "auto", padding: "0 10px", gap: 6, display: "inline-flex" }}>
            <span style={{ fontSize: 11 }}>⌘K</span>
          </button>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="now-pill"><span className="dot"></span><span>Available · Summer 2026</span></div>
        <div className="hero-grid">
          <Reveal>
            <h1>
              Adith<br/>
              <span className="ital">Gangalakunta</span><span className="accent">.</span>
            </h1>
            <p className="hero-sub">
              Computer Science at <em>UT Dallas</em>. I build AI products and full-stack tools — from a RAG meditation guide used by 15,000 people, to a social app for solo gamers, to half a dozen hackathon-winning weekend projects.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="hero-meta">
              <div className="row"><span className="label">Role</span><span>SWE / AI Engineer</span></div>
              <div className="row"><span className="label">Studying</span><span>B.S. Computer Science · UTD '26</span></div>
              <div className="row"><span className="label">Based in</span><span>{PROFILE.location}</span></div>
              <div className="row"><span className="label">Email</span><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
              <div className="row"><span className="label">Find me</span>
                <span>
                  <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" · "}
                  <a href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>{" · "}
                  <a href={PROFILE.links.devpost} target="_blank" rel="noreferrer">Devpost</a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hero-strip">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={200 + i * 80}>
              <div className="stat">
                <span className="num">{s.num}</span>
                <span className="lab">{s.lab}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Building AI products <span className="dot">✦</span>
            Shipping side projects <span className="dot">✦</span>
            Winning hackathons <span className="dot">✦</span>
            Studying CS at UTD <span className="dot">✦</span>
            Open to new-grad SWE roles <span className="dot">✦</span>
            Reading RAG papers <span className="dot">✦</span>
          </span>
          <span aria-hidden="true">
            Building AI products <span className="dot">✦</span>
            Shipping side projects <span className="dot">✦</span>
            Winning hackathons <span className="dot">✦</span>
            Studying CS at UTD <span className="dot">✦</span>
            Open to new-grad SWE roles <span className="dot">✦</span>
            Reading RAG papers <span className="dot">✦</span>
          </span>
        </div>
      </div>
    </section>
  );
}

// ---------- About ----------
function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head">
          <Reveal><h2>About<span style={{ color: "var(--accent)" }}>.</span></h2></Reveal>
          <Reveal delay={80}>
            <div className="lede">A short version, in case the projects below don't speak for themselves.</div>
          </Reveal>
        </div>
        <div className="about-grid">
          <Reveal>
            <div className="prose">
              <p>I'm a senior at <span className="mark-y">UT Dallas</span> studying Computer Science, graduating May 2026. I like the part of building where you go from a fuzzy idea to something a stranger uses — and the messier middle of figuring out why they didn't.</p>
              <p>This past summer I worked at <span className="mark-y">The Way / True Ventures</span> as a Software Developer & VC Fellow, where I built Archive Assistant — a RAG system that grounds meditation guidance in real archival quotes instead of model-generated fluff. It now serves over 15,000 users.</p>
              <p>Before that I founded <em>GGWP</em> through BuildSpace S5 in San Francisco, built mental-health tracking at <em>Portages Health</em>, and have collected a handful of hackathon medals along the way. I'm currently looking for new-grad SWE roles — especially in AI infra, dev tools, or fintech.</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ display: "grid", gap: 18 }}>
              <div className="about-card">
                <h3>Currently</h3>
                <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1.4 }}>
                  Senior year at UTD · job-hunting for Summer 2026 · poking at agent eval frameworks on weekends.
                </p>
              </div>
              <div className="about-card">
                <h3>Outside the laptop</h3>
                <div className="tag-row">
                  {INTERESTS.map(i => <span className="tag" key={i}>{i}</span>)}
                </div>
              </div>
              <div className="about-card">
                <h3>Leadership</h3>
                <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.45, color: "var(--ink-2)" }}>
                  VP of Service, <em>Alpha Kappa Psi</em> — running philanthropic efforts to benefit the local community.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Experience ----------
function Experience() {
  return (
    <section id="work" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head">
          <Reveal><h2>Selected work<span style={{ color: "var(--accent)" }}>.</span></h2></Reveal>
          <Reveal delay={80}>
            <div className="lede">Four years of internships, fellowships, and one founder cohort. Listed newest first.</div>
          </Reveal>
        </div>
        <div className="xp-list">
          {EXPERIENCE.map((x, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="xp">
                <div className="when">{x.when}</div>
                <div className="who">
                  <div className="role">{x.role}</div>
                  <div className="org"><span>{x.org}</span><span className="loc">— {x.loc}</span></div>
                </div>
                <div className="blurb">
                  {x.blurb.map((b, j) => typeof b === "string"
                    ? <React.Fragment key={j}>{b}</React.Fragment>
                    : <span key={j} className="pop">{b.pop}</span>)}
                  {x.extra && <div style={{ marginTop: 10, color: "var(--ink-3)", fontSize: 14 }}>{x.extra}</div>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Project art (geometric, no AI-art) ----------
function FeatureArt() {
  // concentric type-like rings to evoke RAG retrieval / archive
  return (
    <div className="proj-art">
      <svg viewBox="0 0 600 200" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.05)" />
            <stop offset=".5" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx="300" cy="100" r={20 + i * 22}
            fill="none" stroke="url(#line)" strokeWidth="0.6" />
        ))}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          return <line key={i}
            x1={300 + Math.cos(a) * 18}
            y1={100 + Math.sin(a) * 18}
            x2={300 + Math.cos(a) * 320}
            y2={100 + Math.sin(a) * 320}
            stroke="rgba(255,255,255,0.05)" strokeWidth="0.4" />;
        })}
        <circle cx="300" cy="100" r="6" fill="oklch(72% 0.16 38)" />
      </svg>
    </div>
  );
}

function Projects() {
  const tags = useMemo(() => {
    const s = new Set(["All"]);
    PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
    return [...s];
  }, []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));

  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <Reveal><h2>Projects<span style={{ color: "var(--accent)" }}>.</span></h2></Reveal>
          <Reveal delay={80}>
            <div className="lede">Things I've shipped — production AI, founder bets, and weekend hackathons. Filter to taste.</div>
          </Reveal>
        </div>
        <Reveal>
          <div className="proj-toolbar">
            {tags.map(t => (
              <button key={t} className="chip" data-active={active === t} onClick={() => setActive(t)}>
                {t}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="proj-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className={"proj" + (p.feature ? " feature" : "")}>
                <div className="head">
                  <span>{p.tags.join(" · ")}</span>
                  <span className="when">{p.when}</span>
                </div>
                <h3 className="name">{p.name}</h3>
                {p.feature && <FeatureArt />}
                <p className="desc">{p.desc}</p>
                <div className="stack">
                  {p.stack.map(s => <span key={s}>{s}</span>)}
                </div>
                <div className="award">{p.award}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Skills + Now ----------
function Skills() {
  return (
    <section id="skills" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="section-head">
          <Reveal><h2>The kit<span style={{ color: "var(--accent)" }}>.</span></h2></Reveal>
          <Reveal delay={80}>
            <div className="lede">What I reach for. I'm a generalist by default — happiest when I can wire backend, model, and UI in the same week.</div>
          </Reveal>
        </div>
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {Object.entries(SKILLS).map(([k, v]) => (
            <Reveal key={k}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>{k}</div>
                <div className="tag-row">
                  {v.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Now() {
  return (
    <section id="now">
      <div className="wrap">
        <div className="section-head">
          <Reveal><h2>Now<span style={{ color: "var(--accent)" }}>.</span></h2></Reveal>
          <Reveal delay={80}>
            <div className="lede">A snapshot of what I'm doing this month, in the spirit of <em>nownownow.com</em>.</div>
          </Reveal>
        </div>
        <div className="now-grid">
          {NOW.map((n, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="now-card">
                <h4>{n.h}</h4>
                <p>{n.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contact ----------
function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <Reveal>
            <div>
              <h2>Let's <span style={{ color: "var(--accent)" }}>build</span><br/><em>something</em>.</h2>
              <p className="lead">Best way to reach me is email. I reply within a day, usually within an hour. Recruiters welcome — I'm open to new-grad SWE roles starting Summer 2026.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="contact-list">
              <a href={`mailto:${PROFILE.email}`}>
                <span className="glyph">@</span>
                <span>{PROFILE.email}</span>
                <span className="arrow">→</span>
              </a>
              <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
                <span className="glyph">in</span>
                <span>linkedin.com/in/adithg</span>
                <span className="arrow">→</span>
              </a>
              <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
                <span className="glyph">{`{}`}</span>
                <span>github.com/adithg</span>
                <span className="arrow">→</span>
              </a>
              <a href={PROFILE.links.devpost} target="_blank" rel="noreferrer">
                <span className="glyph">★</span>
                <span>devpost.com/adithg</span>
                <span className="arrow">→</span>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/[^0-9]/g, "")}`}>
                <span className="glyph">☏</span>
                <span>{PROFILE.phone}</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ---------- Command palette ----------
function CmdK({ open, onClose, onTheme }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const items = useMemo(() => {
    const navs = [
      { kind: "Nav", label: "Top", action: () => location.hash = "#top" },
      { kind: "Nav", label: "About", action: () => location.hash = "#about" },
      { kind: "Nav", label: "Work / Experience", action: () => location.hash = "#work" },
      { kind: "Nav", label: "Projects", action: () => location.hash = "#projects" },
      { kind: "Nav", label: "Skills", action: () => location.hash = "#skills" },
      { kind: "Nav", label: "Now", action: () => location.hash = "#now" },
      { kind: "Nav", label: "Contact", action: () => location.hash = "#contact" },
    ];
    const links = [
      { kind: "Link", label: "Email Adith", action: () => location.href = `mailto:${PROFILE.email}` },
      { kind: "Link", label: "LinkedIn", action: () => window.open(PROFILE.links.linkedin, "_blank") },
      { kind: "Link", label: "GitHub", action: () => window.open(PROFILE.links.github, "_blank") },
      { kind: "Link", label: "Devpost", action: () => window.open(PROFILE.links.devpost, "_blank") },
    ];
    const projs = PROJECTS.map(p => ({
      kind: "Project", label: p.name, meta: p.when, action: () => location.hash = "#projects",
    }));
    const sys = [
      { kind: "Action", label: "Toggle theme", action: onTheme },
      { kind: "Action", label: "Copy email to clipboard", action: () => navigator.clipboard?.writeText(PROFILE.email) },
    ];
    return [...navs, ...projs, ...links, ...sys];
  }, [onTheme]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter(i =>
      (i.label + " " + i.kind + " " + (i.meta || "")).toLowerCase().includes(term));
  }, [q, items]);

  useEffect(() => { if (open) { setQ(""); setActive(0); setTimeout(() => inputRef.current?.focus(), 30); }}, [open]);
  useEffect(() => { setActive(0); }, [q]);

  const onKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min(a + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") {
      const it = filtered[active]; if (it) { it.action(); onClose(); }
    } else if (e.key === "Escape") { onClose(); }
  };

  if (!open) return null;
  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div className="cmdk" onClick={e => e.stopPropagation()} onKeyDown={onKey}>
        <input ref={inputRef} placeholder="Type a section, project, or action…" value={q}
          onChange={e => setQ(e.target.value)} />
        <div className="cmdk-list">
          {filtered.length === 0 && (
            <div className="cmdk-item" style={{ opacity: .6 }}>
              <span className="ico">∅</span><span>No matches</span><span></span>
            </div>
          )}
          {filtered.map((it, i) => (
            <div key={i} className="cmdk-item" data-active={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => { it.action(); onClose(); }}>
              <span className="ico">
                {it.kind === "Nav" ? "§" : it.kind === "Project" ? "✦" : it.kind === "Link" ? "↗" : "⌘"}
              </span>
              <span>{it.label}</span>
              <span className="meta">{it.meta || it.kind}</span>
            </div>
          ))}
        </div>
        <div className="cmdk-foot">
          <span><span className="kbd">↑↓</span> navigate · <span className="kbd">↵</span> select · <span className="kbd">esc</span> close</span>
          <span>{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { useTheme, Reveal, TopBar, Hero, About, Experience, Projects, Skills, Now, Contact, CmdK });
