// Haas portfolio — light mode, with Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgColor": "#F8F5F0",
  "cardColor": "#FFFFFF",
  "accentColor": "#E2622F",
  "inkColor": "#16140F",
  "mutedColor": "#6B6760",
  "maxWidth": 1024,
  "imageRatio": 40,
  "cardRadius": 18,
  "headlineSize": 54,
  "showGrid": true,
  "showAbout": true
} /*EDITMODE-END*/;

// ── helpers ─────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}
function mix(hex, target, amt) {
  const a = hexToRgb(hex),b = hexToRgb(target);
  const r = Math.round(a[0] + (b[0] - a[0]) * amt);
  const g = Math.round(a[1] + (b[1] - a[1]) * amt);
  const bl = Math.round(a[2] + (b[2] - a[2]) * amt);
  return `rgb(${r},${g},${bl})`;
}

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

// ── Project card ────────────────────────────────────────────────────────────
function ProjectCard({ chip, title, desc, art }) {
  return (
    <a className="card" href="#">
      <div className="card-thumb">{art}</div>
      <div className="card-body">
        <span className="chip">{chip}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        <span className="case-link">View Case Study <span className="arrow">→</span></span>
      </div>
    </a>);

}

// ── Photo grid ──────────────────────────────────────────────────────────────
const TILES = [
  { cls: 't1', label: 'A1' }, { cls: 't2', label: 'A2' }, { cls: 't3', label: 'A3' },
  { cls: 't4', label: 'A4' }, { cls: 't5', label: 'A5' }, { cls: 't6', label: 'A6' },
  { cls: 't7', label: 'B1' }, { cls: 't8', label: 'B2' }, { cls: 't9', label: 'B3' },
  { cls: 't10', label: 'B4' }, { cls: 't11', label: 'B5' }, { cls: 't12', label: 'B6' }
];

// ── App ─────────────────────────────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [emailCopied, setEmailCopied] = React.useState(false);

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
        <p>My goal is to improve the systems we use today, while thinking about how the world will look tomorrow — But it starts by reducing friction within my own life first.</p>
        <div className="hero-actions">
          <button className="connect">Connect</button>
          <a className="btn-outline" href="assets/Hasan_Ahmad_Resume_v4.pdf" target="_blank" rel="noopener">View Resume</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="work">
        <a className="card" href="order-hang-tags/index.html" style={cardStyle}>
          <div className="card-thumb"><CapitalArt /></div>
          <div className="card-body">
            <span className="chip">LOREM IPSUM</span>
            <h3 className="card-title">Order Hang Tags Refactor</h3>
            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
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
            <h3 className="card-title">News & Events Redesign</h3>
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
            <p>I am a designer with 3 years of UX/UI experience and a strong background in Industrial Design. Whether it's spacing out players on a basketball court, color coding vocal layers in a DAW, or arranging grey boxes on a blank canvas, I'm always thinking about how individual elements interact with one another and where the friction lives. My work is about designing for how things work now, and how they'll need to work in the future. Because the world is always changing — now more than ever.</p>
          </div>
          <div className="portrait" aria-label="Portrait of Hasan Tanveer Ahmad">
            <img src="assets/portrait.jpg" alt="Portrait of Hasan Tanveer Ahmad" />
          </div>
        </section>
      }

      {/* PHOTO GRID */}
      {t.showGrid &&
      <section className="grid" aria-label="Photo grid">
          {TILES.map(({ cls, label }) =>
        <div key={cls} className={`tile ${cls}`}><span className="ph">{label}</span></div>
        )}
        </section>
      }

    </main>

    {/* FOOTER */}
    <footer className="site-footer" id="resume">
      <div className="site-footer__inner">
        <span className="site-footer__copy">© 2026 HAAS PORTFOLIO</span>
        <nav className="site-footer__links">
          <a href="#" onClick={copyEmail}>{emailCopied ? 'Copied ✓' : 'Copy email'}</a>
          <a href="assets/Hasan_Ahmad_Resume_v4.pdf" target="_blank" rel="noopener">View Resume</a>
        </nav>
      </div>
    </footer>

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