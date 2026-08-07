import Aurora from './components/Aurora';
import SplitText from './components/SplitText';
import TextType from './components/TextType';
import ShinyText from './components/ShinyText';
import SpotlightCard from './components/SpotlightCard';
import GradientText from './components/GradientText';
import { PROFILE, STATS, EXPERIENCE, PROJECTS, SKILLS, EDUCATION } from './data';

const ACCENTS = ['#6C5CE7', '#00D2FF', '#A29BFE'];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">
        <span className="section-hash">#</span> {title}
      </h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="aurora-bg">
        <Aurora colorStops={ACCENTS} amplitude={1.1} blend={0.6} />
      </div>

      <nav className="nav">
        <a href="#top" className="nav-name">
          AG
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="nav-resume">
            <ShinyText text="Resume ↗" speed={3} />
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <p className="hero-hello">Hey, I&apos;m</p>
        <SplitText
          text={PROFILE.name}
          tag="h1"
          className="hero-name"
          splitType="chars"
          delay={35}
          duration={0.9}
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />
        <div className="hero-role">
          <TextType
            text={PROFILE.roles}
            typingSpeed={55}
            deletingSpeed={30}
            pauseDuration={1800}
            className="hero-type"
            cursorCharacter="_"
          />
        </div>
        <p className="hero-blurb">{PROFILE.blurb}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>
            Get in touch
          </a>
          <a className="btn" href={PROFILE.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      <div className="stats">
        {STATS.map(s => (
          <div className="stat" key={s.lab}>
            <GradientText colors={ACCENTS} animationSpeed={6} className="stat-num">
              {s.num}
            </GradientText>
            <div className="stat-lab">{s.lab}</div>
          </div>
        ))}
      </div>

      <Section id="experience" title="Experience">
        <div className="xp-list">
          {EXPERIENCE.map(xp => (
            <SpotlightCard key={xp.org} className="xp-card" spotlightColor="rgba(108, 92, 231, 0.18)">
              <div className="xp-head">
                <div>
                  <span className="xp-role">{xp.role}</span>
                  <span className="xp-org"> · {xp.org}</span>
                </div>
                <div className="xp-meta">
                  {xp.when} · {xp.loc}
                </div>
              </div>
              <ul className="xp-points">
                {xp.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="proj-grid">
          {PROJECTS.map(p => (
            <SpotlightCard
              key={p.name}
              className={`proj-card${p.feature ? ' proj-feature' : ''}`}
              spotlightColor="rgba(0, 210, 255, 0.15)"
            >
              <div className="proj-head">
                <h3 className="proj-name">{p.name}</h3>
                <span className="proj-when">{p.when}</span>
              </div>
              <div className="proj-award">
                <ShinyText text={p.award} speed={4} color="#8f8fa3" shineColor="#ffffff" />
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-stack">
                {p.stack.map(t => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills-grid">
          {SKILLS.map(sk => (
            <div className="skill-group" key={sk.group}>
              <h3 className="skill-title">{sk.group}</h3>
              <div className="skill-chips">
                {sk.items.map(i => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <SpotlightCard className="edu-card" spotlightColor="rgba(162, 155, 254, 0.15)">
          <div className="xp-head">
            <div>
              <span className="xp-role">{EDUCATION.degree}</span>
              <span className="xp-org"> · {EDUCATION.school}</span>
            </div>
            <div className="xp-meta">{EDUCATION.when}</div>
          </div>
          <p className="edu-detail">{EDUCATION.detail}</p>
        </SpotlightCard>
      </Section>

      <footer className="footer">
        <GradientText colors={ACCENTS} animationSpeed={8} className="footer-name">
          {PROFILE.name}
        </GradientText>
        <div className="footer-links">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={PROFILE.links.devpost} target="_blank" rel="noreferrer">
            Devpost
          </a>
          <a href={PROFILE.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <p className="footer-note">Built with React, Vite & react-bits · {PROFILE.location}</p>
      </footer>
    </div>
  );
}
