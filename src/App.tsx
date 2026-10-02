import { FormEvent, useState } from 'react';
import {
  ArrowRight, CheckCircle2, ChevronDown, Droplets, Flame, Home,
  Menu, ShieldCheck, Snowflake, X, Play, Phone, Mail, MapPin
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
  { id: 'leaks', icon: Droplets, title: 'Roof Leaks', kicker: 'STOP WATER DAMAGE', text: 'Find weak points and protect your roof from leaks and moisture.', detail: 'Leak-focused inspection, surface preparation and waterproofing suited to the roof condition.' },
  { id: 'heat', icon: Snowflake, title: 'Roof Heat', kicker: 'BEAT UAE HEAT', text: 'Protect exposed roof surfaces from intense sun and heat.', detail: 'Cool-roof protection designed for exposed roof surfaces in the UAE climate.' },
  { id: 'waterproofing', icon: ShieldCheck, title: 'Waterproofing', kicker: 'LONG-TERM PROTECTION', text: 'Create a reliable barrier against rain, moisture and weather.', detail: 'Waterproofing solutions for villas, balconies, warehouses and other roof areas.' },
  { id: 'repair', icon: Home, title: 'Roof Repair', kicker: 'RESTORE THE SURFACE', text: 'Deal with cracks, worn areas, drainage problems and roof defects.', detail: 'The roof is assessed first so the repair approach matches the actual problem.' },
  { id: 'commercial', icon: Flame, title: 'Commercial Roof', kicker: 'LARGE ROOF AREAS', text: 'Protection and waterproofing for warehouses and commercial properties.', detail: 'Site-specific inspection and a practical protection plan for larger properties.' },
];

const videos = [
  { title: 'Roof work · 01', src: '/media/video_261001_174113.mp4' },
  { title: 'Roof work · 02', src: '/media/video_261001_174314.mp4' },
  { title: 'Roof work · 03', src: '/media/video_261001_174633.mp4' },
  { title: 'Roof work · 04', src: '/media/video_261001_174925.mp4' },
  { title: 'Roof work · 05', src: '/media/video_261001_175546.mp4' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const choose = (item: Service) => {
    setSelected(item);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
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

  const scrollTo = (id: string) => {
    setSelected(null);
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 0);
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={goHome} aria-label="Matrosov home">
            <span className="brand-logo"><span>M</span></span>
            <span><strong>MATROSOV</strong><small>ROOF LEAK & SOLAR PROTECTION</small></span>
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={goHome}>Home</button>
            <button onClick={() => scrollTo('about')}>About Us</button>
            <button onClick={() => scrollTo('solutions')}>Our Work</button>
            <button onClick={() => scrollTo('video-review')}>Video Review</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </nav>

          <button className="quote-nav" onClick={() => scrollTo('solutions')}>
            Get a Free Quote <ArrowRight size={16} />
          </button>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {!selected ? (
        <main>
          <section className="landing-hero">
            <div className="hero-media">
              <div className="media-overlay" />
              <div className="media-badge"><Play size={13} /> ROOFING & SOLAR HEAT PROTECTION</div>
            </div>
            <div className="container landing-content">
              <div className="eyebrow light"><span /> MATROSOV · UAE ROOFING</div>
              <h1>Reliable roof solutions<br />for a <em>cooler tomorrow.</em></h1>
              <p>Professional roof leak repair, waterproofing and solar heat protection for homes, villas and commercial properties.</p>
              <div className="hero-actions">
                <button className="hero-cta" onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior:'smooth'})}>Find your solution <ArrowRight size={18}/></button>
                <button className="hero-link" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>Meet Matrosov <ArrowRight size={15}/></button>
              </div>
              <div className="hero-points">
                <span><CheckCircle2 /> Leak repair & waterproofing</span>
                <span><CheckCircle2 /> Solar heat protection</span>
                <span><CheckCircle2 /> Professional roof work</span>
              </div>
            </div>
          </section>

          <section id="about" className="about-section">
            <div className="container about-grid">
              <div className="about-copy">
                <div className="section-kicker">ABOUT US</div>
                <h2>Built around one simple idea: <em>protect the roof first.</em></h2>
                <p>Matrosov focuses on roof leak repair, waterproofing and heat protection. The process starts with understanding the roof condition, then choosing a practical system for the property.</p>
                <p className="muted">This section is intentionally original to the new website. The owner's real portrait can be inserted here when you provide the photo.</p>
                <div className="about-sign"><span className="signature">M</span><div><strong>MATROSOV</strong><small>FOUNDER & OWNER</small></div></div>
              </div>
              <div className="about-visual">
                <img src="https://www.coolroofuae.com/photos/owner-work/site-phase-4/dubai-villa-white-roof-coating-ac-units-after.jpg" alt="Roof waterproofing and cooling work" />
                <div className="about-badge"><strong>ROOFING</strong><span>UAE</span></div>
              </div>
            </div>
          </section>

          <section id="solutions" className="choose-section">
            <div className="container">
              <div className="section-kicker">OUR SERVICES</div>
              <div className="choose-head">
                <h2>What does your roof need?</h2>
                <p>Choose the problem you are dealing with and jump directly to the relevant solution page.</p>
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

          <section className="proof-section">
            <div className="container proof-grid">
              <div>
                <div className="section-kicker">WHY MATROSOV</div>
                <h2>Clear process.<br /><em>Professional finish.</em></h2>
              </div>
              <div className="proof-list">
                {[
                  ['01','Inspection','Understand the roof condition before choosing the work.'],
                  ['02','Preparation','Prepare the surface for the selected protection system.'],
                  ['03','Execution','Complete the agreed repair, waterproofing or cooling work.'],
                  ['04','Review','Check the finished areas and explain the result.'],
                ].map(([n,t,d]) => <div className="proof-item" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
              </div>
            </div>
          </section>

          <section id="video-review" className="video-review">
            <div className="container">
              <div className="video-review-head">
                <div><div className="section-kicker">VIDEO REVIEW</div><h2>See the work in action.</h2></div>
                <p>Real video material supplied for this website. Background audio can be cleaned before publishing.</p>
              </div>
              <div className="video-grid">
                {videos.slice(0, 3).map((video) => (
                  <article className="video-card" key={video.src}>
                    <video controls playsInline preload="metadata">
                      <source src={video.src} type="video/mp4" />
                    </video>
                    <div className="video-card-label"><span>{video.title}</span><Play size={14}/></div>
                  </article>
                ))}
              </div>
              <div className="video-note">More videos are ready to be added to the gallery.</div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container cta-inner">
              <div><div className="section-kicker light">START WITH YOUR ROOF</div><h2>Not sure what you need?</h2><p>Choose a roof problem and we’ll take you to the right information and inspection form.</p></div>
              <button className="hero-cta" onClick={() => document.getElementById('solutions')?.scrollIntoView({behavior:'smooth'})}>Choose a service <ArrowRight size={18}/></button>
            </div>
          </section>
        </main>
      ) : (
        <main className="solution-page">
          <section className="solution-hero">
            <div className="container">
              <button className="back" onClick={goHome}>← Back to services</button>
              <div className="solution-label"><service.icon /><span>{service.kicker}</span></div>
              <h1>{service.title}<br /><em>handled properly.</em></h1>
              <p>{service.text}</p>
            </div>
          </section>

          <section className="solution-intro">
            <div className="container solution-intro-grid">
              <div><div className="section-kicker">THE RIGHT START</div><h2>Inspect first.<br />Then choose the system.</h2></div>
              <div><p>{service.detail}</p><div className="mini-points"><span><CheckCircle2 /> Roof condition checked</span><span><CheckCircle2 /> Surface prepared</span><span><CheckCircle2 /> Scope explained before work</span></div></div>
            </div>
          </section>

          <section className="video-section">
            <div className="container">
              <div className="video-heading"><div><div className="section-kicker">VIDEO REVIEW</div><h2>Real work. Directly on the page.</h2></div><p>These videos are intended to play directly on the new website with no redirect to the original site.</p></div>
              <div className="solution-video-grid">
                {videos.map((video) => <article className="solution-video" key={video.src}><video controls playsInline preload="metadata"><source src={video.src} type="video/mp4" /></video><span>{video.title}</span></article>)}
              </div>
            </div>
          </section>

          <section className="work-section">
            <div className="container"><div className="section-kicker">THE WORKFLOW</div><h2>A roof job is more than a coating.</h2><div className="work-grid">
              {[['01','Inspection','Understand the roof condition and identify vulnerable areas.'],['02','Preparation','Clean and prepare the surface before protection is applied.'],['03','Installation','Apply the selected waterproofing or protection system correctly.'],['04','Check','Review the finished work and areas that needed attention.']].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
            </div></div>
          </section>

          <section id="contact" className="request-section">
            <div className="container request-grid">
              <div><div className="section-kicker light">CONTACT</div><h2>Tell us about<br /><em>your roof.</em></h2><p>Send the details below and the request will go to the temporary project email. The recipient can be changed later.</p><div className="contact-points"><span><Phone size={16}/> UAE roof inspection</span><span><Mail size={16}/> Email request</span><span><MapPin size={16}/> Dubai · Abu Dhabi · UAE</span></div></div>
              <div className="request-card">
                {submitted ? <div className="success"><CheckCircle2 size={42}/><h2>Request received</h2><p>Your inspection request has been sent successfully.</p><button className="primary" onClick={() => setSubmitted(false)}>Send another</button></div> : <form onSubmit={submit}>
                  <input type="hidden" name="service" value={service.title} />
                  <label>Name<input required name="name" placeholder="Your name" /></label>
                  <label>Phone<input required name="phone" inputMode="tel" placeholder="+971 ..." /></label>
                  <label>Email<input required type="email" name="email" placeholder="your@email.com" /></label>
                  <label>Area in UAE<input required name="area" placeholder="Dubai, Abu Dhabi..." /></label>
                  <label>What do you need?<select name="request_type" defaultValue={service.title}><option>{service.title}</option><option>General inspection</option><option>Not sure</option></select></label>
                  <button className="primary full" type="submit">Request inspection <ArrowRight size={18}/></button>
                </form>}
              </div>
            </div>
          </section>

          <section id="faq" className="faq-section">
            <div className="container narrow"><div className="section-kicker">FAQ</div><h2>Before you request an inspection.</h2>
              {[['Can the roof be inspected if it is already damaged?','Yes. The condition should be assessed first so damaged areas can be addressed in the work plan.'],['Do you work on villas and commercial roofs?','The company’s roofing information lists villas, balconies, warehouses and commercial premises among its roofing services.'],['How long can waterproofing take?','Timing depends on roof area and condition; the company’s current roofing page describes a typical range of 1–5 days.']].map(([q,a]) => <details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}
            </div>
          </section>
        </main>
      )}

      <footer>
        <div className="container footer-new">
          <div className="brand"><span className="brand-logo"><span>M</span></span><span><strong>MATROSOV</strong><small>ROOF LEAK & SOLAR PROTECTION</small></span></div>
          <div className="footer-links"><span>Roof Repairs · Waterproofing · Heat Protection</span><a href="https://matrosov.ae" target="_blank" rel="noreferrer">Official website</a></div>
        </div>
        <div className="container copyright">© 2026 Matrosov Cool Roof UAE · Warranty terms should be confirmed with the business.</div>
      </footer>
    </div>
  );
}

export default App;
