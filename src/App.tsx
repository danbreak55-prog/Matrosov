import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Flame,
  Home,
  Menu,
  ShieldCheck,
  Snowflake,
  X,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Waterproofing',
    text: 'Protect your roof from leaks, rainwater and long-term moisture damage.',
    tag: 'Leak protection',
  },
  {
    icon: Snowflake,
    title: 'Cool Roof',
    text: 'Reflective roof protection designed for intense UAE heat and sun exposure.',
    tag: 'Heat protection',
  },
  {
    icon: Home,
    title: 'Roof Repairs',
    text: 'Professional repair work for worn surfaces, cracks, drainage issues and roof defects.',
    tag: 'Repair & restore',
  },
  {
    icon: ShieldCheck,
    title: 'Roof Protection',
    text: 'Durable systems that help extend roof life and protect your property year-round.',
    tag: 'Long-term care',
  },
];

const projects = [
  {
    place: 'DUBAI VILLA',
    type: 'Flat Roof Waterproofing',
    detail: 'Real before-and-after roof work showing surface preparation and the waterproofing finish.',
    beforeImage: 'https://www.coolroofuae.com/photos/owner-work/site-phase-4/dubai-villa-cool-roof-finished-surface-after.jpg',
    afterImage: 'https://www.coolroofuae.com/photos/owner-work/site-phase-4/dubai-villa-white-roof-coating-ac-units-after.jpg',
    badge: 'BEFORE → AFTER',
  },
  {
    place: 'DAMAC HILLS · DUBAI',
    type: 'Roof Surface Restoration',
    detail: 'Real project photography showing the roof before treatment and the applied PU waterproofing system.',
    beforeImage: 'https://www.coolroofuae.com/photos/owner-work/site-phase-4/roof-parapet-drain-waterproofing-detail.jpg',
    afterImage: 'https://www.coolroofuae.com/photos/owner-work/site-phase-4/villa-roof-edge-waterproofing-after.jpg',
    badge: 'BEFORE → AFTER',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => go('top')}
            aria-label="Go to homepage"
          >
            <span className="brand-mark">M</span>
            <span>
              <strong>MATROSOV</strong>
              <small>COOL ROOF UAE</small>
            </span>
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <button onClick={() => go('services')}>Services</button>
            <button onClick={() => go('projects')}>Projects</button>
            <button onClick={() => go('about')}>Why us</button>
            <button onClick={() => go('faq')}>FAQ</button>
            <button className="nav-cta" onClick={() => setModalOpen(true)}>
              Free Inspection <ArrowRight size={16} />
            </button>
          </nav>
          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> ROOFING EXPERTS · UAE
              </div>
              <h1>
                Keep your roof <em>cool, dry</em> & protected.
              </h1>
              <p className="hero-text">
                Professional roof repairs, waterproofing and cool-roof
                protection for homes and properties across the UAE.
              </p>
              <div className="hero-actions">
                <button className="primary" onClick={() => setModalOpen(true)}>
                  Request Free Inspection <ArrowRight size={18} />
                </button>
                <button className="secondary" onClick={() => go('projects')}>
                  See our work
                </button>
              </div>
              <div className="trust-row">
                <div>
                  <strong>1000+</strong>
                  <span>Projects</span>
                </div>
                <div>
                  <strong>25Y</strong>
                  <span>Warranty*</span>
                </div>
                <div>
                  <strong>UAE</strong>
                  <span>Service</span>
                </div>
              </div>
            </div>
            <div
              className="roof-visual"
              aria-label="Stylized cool roof illustration"
            >
              <div className="sun">
                <Zap size={24} />
              </div>
              <div className="roof-card">
                <div className="roof-top">
                  <span>COOL ROOF</span>
                  <span>UAE</span>
                </div>
                <div className="roof-surface">
                  <div className="roof-unit unit-a" />
                  <div className="roof-unit unit-b" />
                  <div className="roof-line line-a" />
                  <div className="roof-line line-b" />
                </div>
                <div className="roof-label">
                  <Snowflake size={18} />
                  <span>HEAT REFLECTIVE PROTECTION</span>
                </div>
              </div>
              <div className="temp-card">
                <span>ROOF SURFACE</span>
                <strong>COOLER</strong>
                <small>Reflective protection</small>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            <div>
              <CheckCircle2 /> Free inspection
            </div>
            <div>
              <CheckCircle2 /> Leak protection
            </div>
            <div>
              <CheckCircle2 /> Heat protection
            </div>
            <div>
              <CheckCircle2 /> Professional workmanship
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span /> WHAT WE DO
                </div>
                <h2>Roof protection that works in the UAE climate.</h2>
              </div>
              <p>
                From leaks to extreme heat, our services focus on practical
                protection for your roof and property.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text, tag }) => (
                <article className="service-card" key={title}>
                  <div className="icon">
                    <Icon size={23} />
                  </div>
                  <span>{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button onClick={() => setModalOpen(true)}>
                    Get a quote <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">
                  <span /> RECENT WORK
                </div>
                <h2>Real roof work. Clear results.</h2>
              </div>
              <p>
                See the difference clearly: every card now shows a real BEFORE image beside a real AFTER image. These are representative reference photos, not claimed as Matrosov projects.
              </p>
            </div>
            <div className="project-grid">
              {projects.map(p => (
                <article className="project-card" key={p.place + p.type}>
                  <div className="before-after">
                    <div className="compare-panel">
                      <img src={p.beforeImage} alt={p.type + ' before work'} loading="lazy" />
                      <span>BEFORE</span>
                    </div>
                    <div className="compare-panel">
                      <img src={p.afterImage} alt={p.type + ' after work'} loading="lazy" />
                      <span>AFTER</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span>📍 {p.place}</span>
                    <h3>{p.type}</h3>
                    <p>{p.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section dark">
          <div className="container about-grid">
            <div>
              <div className="eyebrow light">
                <span /> WHY MATROSOV
              </div>
              <h2>Built for sun, rain and real UAE rooftops.</h2>
              <p>
                Roof problems become expensive when they are ignored. We focus
                on identifying the issue, preparing the surface properly and
                applying the right protection system for the job.
              </p>
              <button className="primary" onClick={() => setModalOpen(true)}>
                Book an inspection <ArrowRight size={18} />
              </button>
            </div>
            <div className="feature-list">
              <div>
                <ShieldCheck />
                <div>
                  <strong>Protection first</strong>
                  <span>
                    Solutions focused on waterproofing and heat exposure.
                  </span>
                </div>
              </div>
              <div>
                <Snowflake />
                <div>
                  <strong>Cool-roof systems</strong>
                  <span>
                    Designed to reflect heat and help keep roof surfaces cooler.
                  </span>
                </div>
              </div>
              <div>
                <Droplets />
                <div>
                  <strong>Leak prevention</strong>
                  <span>
                    Targeted roof repair and waterproofing for vulnerable areas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq">
          <div className="container narrow">
            <div className="eyebrow">
              <span /> FAQ
            </div>
            <h2>Questions before you book?</h2>
            <details>
              <summary>
                Do you offer a free inspection? <ChevronDown />
              </summary>
              <p>
                Yes. Use the request form and provide your location and roof
                issue. The team can follow up with the next steps.
              </p>
            </details>
            <details>
              <summary>
                What problems can you inspect? <ChevronDown />
              </summary>
              <p>
                Common requests include roof leaks, waterproofing, heat
                protection, surface deterioration and general roof repairs.
              </p>
            </details>
            <details>
              <summary>
                Do you cover the UAE? <ChevronDown />
              </summary>
              <p>
                The profile provided is UAE-focused. Coverage for your exact
                area should be confirmed when requesting an inspection.
              </p>
            </details>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow light">
                <span /> READY TO PROTECT YOUR ROOF?
              </div>
              <h2>Stop small roof problems becoming big ones.</h2>
            </div>
            <button className="light-btn" onClick={() => setModalOpen(true)}>
              Request Free Inspection <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">M</span>
              <span>
                <strong>MATROSOV</strong>
                <small>COOL ROOF UAE</small>
              </span>
            </div>
            <p>Roof repairs · Waterproofing · Rain & sun protection · UAE</p>
          </div>
          <div className="footer-links">
            <button onClick={() => go('services')}>Services</button>
            <button onClick={() => go('projects')}>Projects</button>
            <button onClick={() => go('faq')}>FAQ</button>
            <a href="https://matrosov.ae" target="_blank" rel="noreferrer">
              matrosov.ae
            </a>
          </div>
        </div>
        <div className="container copyright">
          © 2026 Matrosov Cool Roof UAE · *Warranty terms should be confirmed
          with the business.
        </div>
      </footer>

      {modalOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={e => e.currentTarget === e.target && setModalOpen(false)}
        >
          <div className="modal">
            <button className="close" onClick={() => setModalOpen(false)}>
              <X />
            </button>
            {submitted ? (
              <div className="success">
                <CheckCircle2 size={42} />
                <h2>Request received</h2>
                <p>
                  Your details have been captured in this demo form. For the
                  real business workflow, connect this form to the company's
                  email, CRM or WhatsApp number.
                </p>
                <button
                  className="primary"
                  onClick={() => {
                    setSubmitted(false);
                    setModalOpen(false);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="eyebrow">
                  <span /> FREE INSPECTION
                </div>
                <h2>Tell us about your roof.</h2>
                <p className="modal-copy">
                  Share a few details and the team can review your request.
                </p>
                <form onSubmit={submit}>
                  <label>
                    Name
                    <input required name="name" placeholder="Your name" />
                  </label>
                  <label>
                    Phone
                    <input
                      required
                      name="phone"
                      inputMode="tel"
                      placeholder="+971 ..."
                    />
                  </label>
                  <label>
                    Area in UAE
                    <input
                      required
                      name="area"
                      placeholder="Dubai, Abu Dhabi..."
                    />
                  </label>
                  <label>
                    What do you need?
                    <select name="service" defaultValue="Waterproofing">
                      <option>Waterproofing</option>
                      <option>Cool Roof</option>
                      <option>Roof Repair</option>
                      <option>Not sure — need inspection</option>
                    </select>
                  </label>
                  <button className="primary full" type="submit">
                    Send Request <ArrowRight size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
