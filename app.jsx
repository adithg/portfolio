// app.jsx
const { useState, useEffect } = React;

function App() {
  const [theme, toggleTheme] = useTheme();
  const [cmdkOpen, setCmdkOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdkOpen(o => !o);
      }
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setCmdkOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="shell">
      <TopBar theme={theme} onToggleTheme={toggleTheme} onOpenCmdK={() => setCmdkOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Now />
      <Contact />
      <footer className="wrap" style={{ display: "flex", justifyContent: "space-between" }}>
        <span>© {new Date().getFullYear()} Adith Gangalakunta · Built from scratch</span>
        <span>Press <span className="kbd">⌘K</span> or <span className="kbd">/</span> to navigate</span>
      </footer>
      <CmdK open={cmdkOpen} onClose={() => setCmdkOpen(false)} onTheme={toggleTheme} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
