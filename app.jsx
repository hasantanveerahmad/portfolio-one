// Haas portfolio — light mode, with Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgColor": "#F8F5F0",
  "cardColor": "#FFFFFF",
  "accentColor": "#E2622F",
  "inkColor": "#16140F",
  "mutedColor": "#615D54",
  "maxWidth": 1200,
  "imageRatio": 40,
  "cardRadius": 18,
  "headlineSize": 54,
  "showGrid": true,
  "showAbout": true
} /*EDITMODE-END*/;

// ── Project art ─────────────────────────────────────────────────────────────
function CapitalArt() {
  const heights = [30, 48, 62, 78, 90, 74, 56, 42, 30, 22, 34, 46, 58, 50, 38, 28, 22, 32];
  return (
    <div className="art art-capital" style={{ letterSpacing: "2px" }}>
      <div className="mini-chart">
        <div className="head"><span></span><span></span><span></span></div>
        <div className="bars">
          {heights.map((h, i) => <i key={i} style={{ height: `${h}%` }}></i>)}
        </div>
        <div className="foot"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>);

}

function LuminaArt() {
  return (
    <div className="art art-lumina">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="blob b3"></div>
      <div className="phone">
        <div className="notch"></div>
        <div className="row tall"></div>
        <div className="row"></div>
        <div className="row" style={{ width: '70%' }}></div>
        <div className="row tall"></div>
        <div className="row"></div>
        <div className="cta"></div>
      </div>
    </div>);

}

function NexusArt() {
  return (
    <div className="art art-nexus">
      <svg className="net" viewBox="0 0 240 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="glow" cx="35%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#7B5BD6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7B5BD6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="240" height="150" fill="url(#glow)" />
        <g stroke="#9A7BE8" strokeWidth="0.4" opacity="0.55" fill="none">
          <path d="M10 130 L40 90 L70 110 L100 70 L140 90 L180 100 L220 80" />
          <path d="M20 60 L55 80 L85 50 L120 75 L160 55 L200 70 L235 40" />
          <path d="M0 100 L30 115 L60 95 L95 120 L130 100 L170 115 L210 100" />
          <path d="M15 30 L45 55 L80 35 L115 60 L150 35 L190 55 L225 30" />
          <path d="M5 75 L35 60 L65 85 L100 55 L140 75 L180 50 L220 75" />
          <path d="M30 20 L70 40 L110 25 L150 45 L190 30 L230 50" />
        </g>
        <g fill="#C9B8FF">
          {[[40, 90], [70, 110], [100, 70], [140, 90], [180, 100], [220, 80],
          [55, 80], [85, 50], [120, 75], [160, 55], [200, 70],
          [30, 115], [60, 95], [95, 120], [130, 100], [170, 115], [210, 100],
          [45, 55], [80, 35], [115, 60], [150, 35], [190, 55],
          [35, 60], [65, 85], [140, 75], [180, 50],
          [70, 40], [110, 25], [150, 45], [190, 30]].map(([x, y], i) =>
          <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 1.4 : 1} />
          )}
        </g>
      </svg>
    </div>);

}

// ── Photo grid ──────────────────────────────────────────────────────────────
const TILES = [
  { cls: 't1', label: 'A1', img: 'assets/tiles/a3-guitar3.jpg' }, { cls: 't2', label: 'A2', img: 'assets/tiles/b4-headphones.png' }, { cls: 't3', label: 'A3', img: 'assets/tiles/a1-bengals.jpg' },
  { cls: 't4', label: 'A4', img: 'assets/tiles/b6-miso.png' }, { cls: 't5', label: 'A5', img: 'assets/tiles/b2-istanbul.png' }, { cls: 't6', label: 'A6', img: 'assets/tiles/b3-parrot.png' },
  { cls: 't7', label: 'B1', img: 'assets/tiles/a5-turntable.jpg' }, { cls: 't8', label: 'B2', img: 'assets/tiles/a2-kobe-v4.jpg' }, { cls: 't9', label: 'B3', img: 'assets/tiles/a4-bearcats.jpg' },
  { cls: 't10', label: 'B4', img: 'assets/tiles/a6-graeters.jpg' }, { cls: 't11', label: 'B5', img: 'assets/tiles/b1-pc.png' }, { cls: 't12', label: 'B6', img: 'assets/tiles/b5-vr.png' }
];

// ── App ─────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [connectOpen, setConnectOpen] = React.useState(false);

  React.useEffect(() => {
    if (!connectOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setConnectOpen(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [connectOpen]);

  // Apply color tweaks to the CSS variables (no-op visually at defaults)
  React.useEffect(() => {
    const s = document.documentElement.style;
    s.setProperty('--bg', t.bgColor);
    s.setProperty('--card', t.cardColor);
    s.setProperty('--ink', t.inkColor);
    s.setProperty('--muted', t.mutedColor);
    s.setProperty('--accent', t.accentColor);
  }, [t.bgColor, t.cardColor, t.inkColor, t.mutedColor, t.accentColor]);

  const copyEmail = (e) => {
    e.preventDefault();
    const email = 'hasantanveerahmad@gmail.com';
    const done = () => { setEmailCopied(true); setTimeout(() => setEmailCopied(false), 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done).catch(() => {
        window.prompt('Copy this email:', email);
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (err) { window.prompt('Copy this email:', email); }
      document.body.removeChild(ta);
    }
  };

  const pageStyle = { maxWidth: t.maxWidth };
  const cardStyle = {
    '--card-ratio': `${t.imageRatio}%`,
    borderRadius: t.cardRadius
  };

  return <>
    <main className="page" style={pageStyle}>

      {/* HERO */}
      <section className="hero">
        <span className="hero-eyebrow"><span className="eyebrow-dash"></span>Homepage</span>
        <h1>Hi, I'm Haas</h1>
        <p>My goal is to improve the systems we use today while thinking about how the world will look tomorrow. It starts by reducing friction in my everyday life — from optimizing my phone's home screen to arranging my bedroom. Each decision creates mental space that helps me build products and experiences that matter.</p>
        <div className="hero-actions">
          <button className="connect" onClick={() => setConnectOpen(true)}>Connect</button>
          <a className="btn-outline" href="assets/Hasan_Ahmad_Resume_v4.pdf" target="_blank" rel="noopener">View Resume</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="work">
        <a className="card" href="order-hang-tags/index.html" style={cardStyle}>
          <div className="card-thumb"><CapitalArt /></div>
          <div className="card-body">
            <span className="chip">B2B PORTAL OPTIMIZATION</span>
            <h3 className="card-title">Order Hang Tags —<br />Refactor</h3>
            <p className="card-desc">An end-to-end redesign that streamlines how branded garment manufacturers order LYCRA® branded hang tags.</p>
            <span className="case-link">View Case Study <span className="arrow">→</span></span>
          </div>
        </a>

        <a className="card" href="global-navigation/index.html" style={cardStyle}>
          <div className="card-thumb"><LuminaArt /></div>
          <div className="card-body">
            <span className="chip">LOREM IPSUM</span>
            <h3 className="card-title">Global Navigation & Decoupling</h3>
            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            <span className="case-link">View Case Study <span className="arrow">→</span></span>
          </div>
        </a>

        <a className="card" href="news-events/index.html" style={cardStyle}>
          <div className="card-thumb"><NexusArt /></div>
          <div className="card-body">
            <span className="chip">LOREM IPSUM</span>
            <h3 className="card-title">Product Listing Page Redesign</h3>
            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            <span className="case-link">View Case Study <span className="arrow">→</span></span>
          </div>
        </a>
      </section>

      {/* ABOUT */}
      {t.showAbout &&
      <section className="about" id="about">
          <div>
            <h2>About</h2>
            <p>I am a designer with 5 years of UX/UI experience and a strong background in Industrial Design. Whether it's arranging grey boxes on a blank canvas, color coding vocal layers in my favorite music software or spacing out players on a basketball court, I'm always thinking about how individual elements interact with one another and where the friction lives. My work is about designing for how things work now, and how they'll need to work in the future. Because the world is always changing — now more than ever.</p>
          </div>
          <div className="portrait" aria-label="Portrait of Hasan Tanveer Ahmad">
            <img src="assets/portrait-new.png" alt="Portrait of Hasan Tanveer Ahmad" />
          </div>
        </section>
      }

      {/* PHOTO GRID */}
      {t.showGrid &&
      <section className="grid" aria-label="Photo grid">
          {TILES.map(({ cls, label, img }) =>
        <div key={cls} className={`tile ${cls}`}>
          {img
            ? <img className="tile-img" src={img} alt="" loading="lazy" />
            : <span className="ph">{label}</span>}
        </div>
        )}
        </section>
      }

    </main>

    {/* FOOTER */}
    <footer className="site-footer" id="resume">
      <div className="site-footer__inner" style={{maxWidth: t.maxWidth}}>
        <span className="site-footer__copy">© 2026 HAAS PORTFOLIO</span>
        <nav className="site-footer__links">
          <a href="#" onClick={copyEmail}>{emailCopied ? 'Copied ✓' : 'Copy email'}</a>
          <a href="case-study-2/index.html">View Resume</a>
        </nav>
      </div>
    </footer>

    {connectOpen && (
    <div className="connect-overlay" onClick={() => setConnectOpen(false)}>
      <div className="connect-modal" role="dialog" aria-modal="true" aria-label="Connect" onClick={(e) => e.stopPropagation()}>
        <button className="connect-close" aria-label="Close" onClick={() => setConnectOpen(false)}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
        <h2 className="connect-title">Let's connect</h2>
        <div className="connect-actions">
          <button className="connect-option" onClick={copyEmail}>
            <span className="connect-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 5h17A1.5 1.5 0 0122 6.5v.4l-10 6.1L2 6.9v-.4A1.5 1.5 0 013.5 5zM2 8.7l9.48 5.78a1 1 0 001.04 0L22 8.7v8.8a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5V8.7z"/></svg>
            </span>
            <span className="connect-label connect-label--email">hasantanveerahmad@gmail.com</span>
            <span className="connect-meta" style={{flexShrink: 0, display: 'inline-flex', alignItems: 'center'}} aria-label={emailCopied ? 'Copied' : 'Copy email'}>
              {emailCopied
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </span>
          </button>
          <a className="connect-option" href="https://www.linkedin.com/in/hasan-tanveer-ahmad/" target="_blank" rel="noopener">
            <span className="connect-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.9 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21H9z"/></svg>
            </span>
            <span className="connect-label">LinkedIn</span>
            <span className="connect-meta" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
    )}

    {(typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('tweaks') === '1') && (
    <TweaksPanel>
      <TweakSection label="Colors" />
      <TweakColor label="Background" value={t.bgColor} onChange={(v) => setTweak('bgColor', v)} />
      <TweakColor label="Card" value={t.cardColor} onChange={(v) => setTweak('cardColor', v)} />
      <TweakColor label="Accent" value={t.accentColor} onChange={(v) => setTweak('accentColor', v)} />
      <TweakColor label="Ink" value={t.inkColor} onChange={(v) => setTweak('inkColor', v)} />
      <TweakColor label="Muted text" value={t.mutedColor} onChange={(v) => setTweak('mutedColor', v)} />

      <TweakSection label="Layout" />
      <TweakSlider label="Max width" value={t.maxWidth} min={768} max={1440} step={16} unit="px"
      onChange={(v) => setTweak('maxWidth', v)} />
      <TweakSlider label="Image / text" value={t.imageRatio} min={30} max={55} step={1} unit="%"
      onChange={(v) => setTweak('imageRatio', v)} />
      <TweakSlider label="Card radius" value={t.cardRadius} min={0} max={32} step={1} unit="px"
      onChange={(v) => setTweak('cardRadius', v)} />

      <TweakSection label="Sections" />
      <TweakToggle label="Show About" value={t.showAbout} onChange={(v) => setTweak('showAbout', v)} />
      <TweakToggle label="Show grid" value={t.showGrid} onChange={(v) => setTweak('showGrid', v)} />
    </TweaksPanel>
    )}
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);