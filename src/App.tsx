import { FormEvent, useMemo, useState } from 'react';
import {
  ArrowRight, CheckCircle2, ChevronDown, Droplets, Flame, Home,
  Menu, ShieldCheck, Snowflake, X, Zap, Play
} from 'lucide-react';

type Service = {
  id: string;
  icon: typeof Droplets;
  title: string;
  kicker: string;
  text: string;
  detail: string;
};

const services: Service[] = [
  { id: 'leaks', icon: Droplets, title: 'Roof Leaks', kicker: 'STOP WATER DAMAGE', text: 'Find the weak points and protect your roof from leaks and moisture.', detail: 'Leak-focused inspection, surface preparation and waterproofing suited to the roof condition.' },
  { id: 'heat', icon: Snowflake, title: 'Roof Heat', kicker: 'BEAT UAE HEAT', text: 'Protect the roof surface from intense sun and heat exposure.', detail: 'Cool-roof protection designed to reflect heat from exposed roof surfaces.' },
  { id: 'waterproofing', icon: ShieldCheck, title: 'Waterproofing', kicker: 'LONG-TERM PROTECTION', text: 'Build a reliable barrier against rain, moisture and weather.', detail: 'Waterproofing solutions for villas, balconies, warehouses and other roof areas.' },
  { id: 'repair', icon: Home, title: 'Roof Repair', kicker: 'RESTORE THE SURFACE', text: 'Deal with cracks, worn areas, drainage problems and roof defects.', detail: 'The roof is assessed first so the repair approach matches the actual problem.' },
  { id: 'commercial', icon: Flame, title: 'Commercial Roof', kicker: 'LARGE ROOF AREAS', text: 'Protection and waterproofing for warehouses and commercial properties.', detail: 'Site-specific roof inspection and a practical protection plan for larger properties.' },
];

const videos = [
  { title: 'Roof work in action', src: 'https://matrosov.ae/' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const service = useMemo(() => selected ?? services[0], [selected]);

  const choose = (item: Service) => {
    setSelected(item);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      setSubmitted(true);
      form.reset();
    } catch {
      window.alert('We could not send your request right now. Please try again shortly.');
    }
  };

  const goHome = () => {
    setSelected(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={goHome} aria-label="Matrosov home">
            <span className="brand-mark">M</span>
            <span><strong>MATROSOV</strong><small>COOL ROOF UAE</small></span>
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={goHome}>Home</button>
            <button onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior:'smooth'})}>Solutions</button>
            <button onClick={() => document.getElementById('process')?.scrollIntoView({behavior:'smooth'})}>How it works</button>
            <button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior:'smooth'})}>FAQ</button>
          </nav>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      {!selected ? (
        <main>
          <section className="landing-hero">
            <div className="hero-media">
              <div className="media-overlay" />
              <div className="media-badge"><Play size={14} /> ROOFING WORK · UAE</div>
            </div>
            <div className="container landing-content">
              <div className="eyebrow light"><span /> MATROSOV COOL ROOF · UAE</div>
              <h1>Your roof has a problem.<br /><em>Start here.</em></h1>
              <p>Roof repair, waterproofing and heat protection built around what your property actually needs.</p>
              <div className="intro-line">
                <span>1</span><b>Tell us what you're dealing with</b>
                <ArrowRight />
                <span>2</span><b>See the right solution</b>
                <ArrowRight />
                <span>3</span><b>Request an inspection</b>
              </div>
            </div>
          </section>

          <section id="solutions" className="choose-section">
            <div className="container">
              <div className="section-kicker">WHAT BRINGS YOU HERE?</div>
              <div className="choose-head">
                <h2>Choose your roof problem.</h2>
                <p>No complicated menu. Pick the issue you want to solve and we’ll take you to the relevant information.</p>
              </div>
              <div className="choice-grid">
                {services.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button className={index === 0 ? 'choice-card featured' : 'choice-card'} key={item.id} onClick={() => choose(item)}>
                      <div className="choice-number">0{index + 1}</div>
                      <div className="choice-icon"><Icon /></div>
                      <span>{item.kicker}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <strong>Explore solution <ArrowRight size={17} /></strong>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="process" className="process-section">
            <div className="container process-grid">
              <div>
                <div className="section-kicker light">A DIFFERENT WAY TO START</div>
                <h2>Less guessing.<br /><em>More clarity.</em></h2>
              </div>
              <div className="steps">
                {[
                  ['01','Choose the issue','Tell us what you’re seeing on the roof.'],
                  ['02','Understand the fix','See the relevant work, materials and process.'],
                  ['03','Request inspection','Send the details so the team can assess the property.'],
                ].map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
              </div>
            </div>
          </section>

          <section className="trust-section">
            <div className="container trust-row-new">
              <div><strong>ROOF REPAIRS</strong><span>Practical solutions for damaged surfaces</span></div>
              <div><strong>WATERPROOFING</strong><span>Protection against moisture and leaks</span></div>
              <div><strong>COOL ROOF</strong><span>Protection for intense UAE heat</span></div>
              <div><strong>UAE</strong><span>Roofing-focused service</span></div>
            </div>
          </section>
        </main>
      ) : (
        <main className="solution-page">
          <section className="solution-hero">
            <div className="container">
              <button className="back" onClick={goHome}>← Back to roof problems</button>
              <div className="solution-label"><service.icon /><span>{service.kicker}</span></div>
              <h1>{service.title}<br /><em>handled properly.</em></h1>
              <p>{service.text}</p>
            </div>
          </section>

          <section className="solution-intro">
            <div className="container solution-intro-grid">
              <div>
                <div className="section-kicker">THE RIGHT START</div>
                <h2>Inspect first.<br />Then choose the system.</h2>
              </div>
              <div>
                <p>{service.detail}</p>
                <div className="mini-points">
                  <span><CheckCircle2 /> Roof condition checked</span>
                  <span><CheckCircle2 /> Surface prepared for the work</span>
                  <span><CheckCircle2 /> Scope explained before work</span>
                </div>
              </div>
            </div>
          </section>

          <section className="video-section">
            <div className="container">
              <div className="video-heading">
                <div><div className="section-kicker">FROM THE COMPANY'S WORK</div><h2>See roofing work up close.</h2></div>
                <p>Publicly available company material can be used here as the visual proof section; the surrounding design is original to this site.</p>
              </div>
              <div className="video-frame">
                <div className="video-placeholder">
                  <div className="play-ring"><Play fill="currentColor" /></div>
                  <strong>MATROSOV ROOFING WORK</strong>
                  <span>Video area ready for the owner's original website video</span>
                  <a href="https://matrosov.ae/krovlya-en" target="_blank" rel="noreferrer">Open original roofing page <ArrowRight size={15}/></a>
                </div>
              </div>
            </div>
          </section>

          <section className="work-section">
            <div className="container">
              <div className="section-kicker">THE WORKFLOW</div>
              <h2>A roof job is more than a coating.</h2>
              <div className="work-grid">
                {[
                  ['01','Inspection','Understand the roof condition and identify vulnerable areas.'],
                  ['02','Preparation','Clean and prepare the surface before the protection system is applied.'],
                  ['03','Installation','Apply the selected waterproofing or protection system correctly.'],
                  ['04','Check','Review the finished work and the areas that needed attention.'],
                ].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
              </div>
            </div>
          </section>

          <section className="request-section">
            <div className="container request-grid">
              <div>
                <div className="section-kicker light">READY WHEN YOU ARE</div>
                <h2>Tell us about<br /><em>your roof.</em></h2>
                <p>Your request will be sent to the temporary project email for now. The recipient can be changed later.</p>
              </div>
              <div className="request-card">
                {submitted ? (
                  <div className="success"><CheckCircle2 size={42}/><h2>Request received</h2><p>Your inspection request has been sent successfully.</p><button className="primary" onClick={() => setSubmitted(false)}>Send another</button></div>
                ) : (
                  <form onSubmit={submit}>
                    <input type="hidden" name="service" value={service.title} />
                    <label>Name<input required name="name" placeholder="Your name" /></label>
                    <label>Phone<input required name="phone" inputMode="tel" placeholder="+971 ..." /></label>
                    <label>Email<input required type="email" name="email" placeholder="your@email.com" /></label>
                    <label>Area in UAE<input required name="area" placeholder="Dubai, Abu Dhabi..." /></label>
                    <label>What do you need?<select name="request_type" defaultValue={service.title}><option>{service.title}</option><option>General inspection</option><option>Not sure</option></select></label>
                    <button className="primary full" type="submit">Request inspection <ArrowRight size={18}/></button>
                  </form>
                )}
              </div>
            </div>
          </section>

          <section id="faq" className="faq-section">
            <div className="container narrow">
              <div className="section-kicker">FAQ</div>
              <h2>Before you request an inspection.</h2>
              {[
                ['Can the roof be inspected if it is already damaged?','Yes. The condition of the roof should be assessed first so damaged areas can be addressed as part of the work plan.'],
                ['Do you work on villas and commercial roofs?','The company’s roofing page lists villas, balconies, warehouses and commercial premises among its roofing services.'],
                ['How long can waterproofing take?','The company’s current roofing page says timing depends on roof area and condition and gives a typical range of 1–5 days.'],
              ].map(([q,a]) => <details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}
            </div>
          </section>
        </main>
      )}

      <footer>
        <div className="container footer-new">
          <div className="brand"><span className="brand-mark">M</span><span><strong>MATROSOV</strong><small>COOL ROOF UAE</small></span></div>
          <div><span>Roof Repairs · Waterproofing · Heat Protection</span><a href="https://matrosov.ae" target="_blank" rel="noreferrer">matrosov.ae</a></div>
        </div>
        <div className="container copyright">© 2026 Matrosov Cool Roof UAE · Warranty terms should be confirmed with the business.</div>
      </footer>
    </div>
  );
}

export default App;
