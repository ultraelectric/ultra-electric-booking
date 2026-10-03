import Link from "next/link";

const services = [
  {
    title: "Electrical Installation",
    description: "Lighting, rewiring, panels, outlets, and the power upgrades your home needs.",
    price: "From $79",
  },
  {
    title: "Electrical Repairs",
    description: "Fast issue diagnosis and fixes for outlets, switches, circuits, and faults.",
    price: "Same day",
  },
  {
    title: "Plumbing Maintenance",
    description: "Leak checks, pipe repairs, drain cleaning, and reliable fixture support.",
    price: "From $89",
  },
  {
    title: "Woodworking",
    description: "Custom carpentry, trim, cabinetry, shelving, and quality finishing work.",
    price: "Custom quote",
  },
  {
    title: "Landscaping",
    description: "Outdoor care, garden improvements, paving touch-ups, and seasonal upkeep.",
    price: "From $99",
  },
  {
    title: "Home Maintenance Plans",
    description: "Preventive checks and routine upkeep that keeps your home safe and efficient.",
    price: "Flexible plans",
  },
];

const stats = [
  { value: "10+", label: "Years of service" },
  { value: "2500+", label: "Jobs completed" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "24/7", label: "Support" },
];

const reasons = [
  "Licensed and insured professionals",
  "Transparent quotes and honest pricing",
  "Fast response and reliable scheduling",
  "Quality workmanship with long-term care",
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="container hero-inner">
          <nav className="topbar" aria-label="Main navigation">
            <div className="brand-wrap">
              <div className="brand-badge">U</div>
              <div>
                <div className="brand-name">Ultra Electric</div>
                <div className="brand-subtitle">Home Services & Repairs</div>
              </div>
            </div>

            <div className="nav-links">
              <a href="#services">Services</a>
              <a href="#why-us">Why Us</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>

            <Link href="/book" className="primary-btn nav-btn">
              Book a service
            </Link>
          </nav>

          <div className="hero-grid">
            <div>
              <span className="eyebrow">Trusted home care for modern living</span>
              <h1>Smart solutions for electrical, plumbing, and home upgrades.</h1>
              <p className="hero-copy">
                Ultra Electric delivers reliable electrical work, plumbing maintenance,
                woodworking, and landscaping services with a smooth, easy booking journey.
              </p>

              <div className="cta-row">
                <Link href="/book" className="primary-btn">
                  Book a service
                </Link>
                <a href="#services" className="secondary-btn">
                  Explore services
                </a>
              </div>

              <div className="bullet-row">
                <span>✓ Fast response</span>
                <span>✓ Transparent pricing</span>
                <span>✓ Quality workmanship</span>
              </div>
            </div>

            <div className="booking-card">
              <div className="booking-card-inner">
                <div className="booking-header">
                  <div>
                    <p className="small-label">Service request</p>
                    <h3>Book instantly</h3>
                  </div>
                  <span className="status-pill">Available this week</span>
                </div>

                <div className="mini-request">
                  <p className="small-label">Most requested</p>
                  <p className="request-title">Electrical repairs</p>
                  <p className="request-copy">Fault finding, outlet fixes, and lighting upgrades.</p>
                </div>

                <div className="stats-grid">
                  <div className="mini-stat">
                    <p className="small-label">Response</p>
                    <p className="mini-stat-value">24h</p>
                  </div>
                  <div className="mini-stat">
                    <p className="small-label">Quote</p>
                    <p className="mini-stat-value">Free</p>
                  </div>
                </div>

                <Link href="/book" className="primary-btn full-width">
                  Schedule now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container stats-section">
        <div className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="container section-space">
        <div className="section-heading">
          <p className="section-kicker">Our services</p>
          <h2>Everything your property needs.</h2>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <span className="service-price">{service.price}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/book">Request this service →</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="container section-space">
        <div className="two-column-layout">
          <div>
            <p className="section-kicker">Why choose us</p>
            <h2>Reliable service that keeps your home running smoothly.</h2>

            <div className="reasons-list">
              {reasons.map((reason) => (
                <div key={reason} className="reason-item">
                  <div className="checkmark">✓</div>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="process-panel">
            <div className="process-inner">
              <p className="small-label">Simple process</p>

              <div className="process-steps">
                <div>
                  <p className="step-label">Step 1</p>
                  <p className="step-title">Choose a service</p>
                </div>

                <div>
                  <p className="step-label">Step 2</p>
                  <p className="step-title">Pick a date and time</p>
                </div>

                <div>
                  <p className="step-label">Step 3</p>
                  <p className="step-title">Get your quote and confirm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="container section-space reviews-section">
        <div className="section-heading">
          <p className="section-kicker">Reviews</p>
          <h2>Homeowners trust Ultra Electric.</h2>
        </div>

        <div className="review-grid">
          {[
            "The team was punctual, professional, and repaired our electrical issue in one visit. Highly recommended.",
            "Ultra Electric handled our plumbing and home maintenance work quickly and with excellent attention to detail.",
            "From landscaping to custom woodwork, they delivered exactly what we needed. Clean, respectful, and reliable.",
          ].map((quote, index) => (
            <div key={index} className="review-card">
              <div className="stars">★★★★★</div>
              <p>“{quote}”</p>
              <div className="review-author">
                <span>Satisfied customer</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container section-space footer-cta">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <h2>Need help with your property?</h2>
            <p>
              Tell us what you need and we’ll help you book the right service, schedule a visit,
              or send a free quote.
            </p>
          </div>

          <div className="contact-list">
            <div className="contact-item">
              <p className="small-label">Phone</p>
              <p className="contact-value">(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <p className="small-label">Email</p>
              <p className="contact-value">hello@ultraelectric.com</p>
            </div>
            <div className="contact-item">
              <p className="small-label">Location</p>
              <p className="contact-value">Serving homes and businesses across the city</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
