import { useEffect, useState } from 'react';
import DotGrid from './components/DotGrid';
import TargetCursor from './components/TargetCursor';
import ClickSpark from './components/ClickSpark';
import DecryptedText from './components/DecryptedText';
import GlitchText from './components/GlitchText';
import TextType from './components/TextType';
import SpotlightCard from './components/SpotlightCard';
import { PROFILE, WORK, EXPERIENCE, SKILLS, ABOUT } from './data';

const ACCENT = '#ff4b33';

function SecHead({ num, title }) {
  return (
    <div className="sec-head">
      <span className="num">{num}</span>
      <h2>
        <DecryptedText text={title} animateOn="view" sequential speed={40} />
      </h2>
      <span className="rule" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <a className="logo cursor-target" href="#top">
          AG<span className="caret">_</span>
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a className="cursor-target" href="#work">work</a>
            <a className="cursor-target" href="#experience">experience</a>
            <a className="cursor-target" href="#skills">skills</a>
            <a className="cursor-target" href="#about">about</a>
            <a className="cursor-target" href="#contact">contact</a>
          </div>
          <a
            className="resume-btn cursor-target"
            href={PROFILE.resume}
            download="Adith_Gangalakunta_Resume.pdf"
            aria-label="Download resume"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const xp = EXPERIENCE[active];
  return (
    <section id="experience">
      <div className="wrap">
        <SecHead num="02" title="experience" />
        <div className="exp-grid">
          <div className="exp-nav" style={{ '--active': active }}>
            <div className="exp-fill" />
            {EXPERIENCE.map((e, i) => (
              <button
                key={e.co}
                className={`cursor-target${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="co">{e.co}</span>
                <span className="yr">{e.yr}</span>
              </button>
            ))}
          </div>
          <article className="exp-item" key={xp.co}>
            <p className="exp-when">{xp.when}</p>
            <h3>{xp.co}</h3>
            <p className="exp-role">{xp.role}</p>
            <ul className="exp-points">
              {xp.points.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {xp.tags.map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [finePointer, setFinePointer] = useState(false);
  useEffect(() => {
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  return (
    <ClickSpark sparkColor={ACCENT} sparkSize={9} sparkRadius={18} sparkCount={8} duration={420}>
      {finePointer && <TargetCursor targetSelector=".cursor-target" cursorColor="#f4f4f4" cursorColorOnTarget={ACCENT} spinDuration={4} />}
      <div className="dotgrid-bg" aria-hidden="true">
        <DotGrid dotSize={3} gap={28} baseColor="#1d1d1d" activeColor={ACCENT} proximity={130} shockRadius={220} shockStrength={4} />
      </div>

      <Nav />

      <main id="top">
        <header className="hero">
          <div className="wrap">
            <p className="hero-role">{PROFILE.role}</p>
            <h1 aria-label="Adith Gangalakunta">
              {PROFILE.name.map(line => (
                <span className="line" key={line}>
                  <DecryptedText text={line} animateOn="view" sequential speed={55} characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&" />
                </span>
              ))}
            </h1>
            <div className="hero-sub">
              <TextType text={[PROFILE.sub]} typingSpeed={22} loop={false} cursorCharacter="█" cursorClassName="block-cursor" />
            </div>
            <a className="hero-cta cursor-target" href="#work">
              [ view work ]
            </a>
          </div>
        </header>

        <section id="work">
          <div className="wrap">
            <SecHead num="01" title="selected work" />
            <div className="work-grid">
              {WORK.map((w, i) => (
                <SpotlightCard key={w.name} className="panel cursor-target" spotlightColor="rgba(255, 75, 51, 0.12)">
                  <span className="panel-idx">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{w.name}</h3>
                  <span className="stack">{w.stack}</span>
                  <p>{w.desc}</p>
                  <div className="stat">
                    {w.stat.map(s => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="links">
                    {w.links.map(l => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <Experience />

        <section id="skills">
          <div className="wrap">
            <SecHead num="03" title="skills" />
            <div className="skills-grid">
              {SKILLS.map(sk => (
                <div className="skill-group" key={sk.group}>
                  <h3>
                    <b>&gt;</b>
                    {sk.group}
                  </h3>
                  <div className="skill-tags">
                    {sk.items.map(i => (
                      <span className="tag" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <SecHead num="04" title="about" />
            <div className="about-bio">
              <p>{ABOUT.bio1}</p>
              <p>{ABOUT.bio2}</p>
            </div>
            <p className="type-line">
              currently working with{' '}
              <TextType text={ABOUT.workingWith} typingSpeed={55} deletingSpeed={30} pauseDuration={1700} className="typed" cursorCharacter="█" cursorClassName="block-cursor" />
            </p>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <span className="num">05</span>
            <h2>
              <GlitchText speed={0.8} enableOnHover className="contact-glitch">
                Let&apos;s work together.
              </GlitchText>
            </h2>
            <a className="email cursor-target" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
            <div className="socials">
              <a className="cursor-target" href={PROFILE.links.github} target="_blank" rel="noopener noreferrer">github</a>
              <a className="cursor-target" href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
              <a className="cursor-target" href={PROFILE.links.devpost} target="_blank" rel="noopener noreferrer">devpost</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>Adith Gangalakunta</span>
          <span>2026</span>
        </div>
      </footer>
    </ClickSpark>
  );
}
