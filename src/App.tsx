import DarkVeil from './components/DarkVeil'
import CustomCursor from './components/CustomCursor'
import ScrollReveal from './components/ScrollReveal'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <CustomCursor />
      <div className="ambient-orbs" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="noise-overlay" aria-hidden />
      <header className="header">
        <a href="#" className="header-logo">
        <img src="/logo.png" alt="" className="header-logo-icon" />
        Joshua Juarez
      </a>
        <nav className="header-nav">
          <a href="#projects">Projects</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="background">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.08}
          scanlineIntensity={1}
          speed={0.5}
          scanlineFrequency={0.5}
          warpAmount={3.6}
        />
      </div>
      <main className="content">
        <section className="hero">
          <h1 className="hero-name">
            <span className="typewriter">Joshua Juarez</span>
          </h1>
          <p className="tagline">4th year Electrical Engineering student at UC Riverside. <span className="tagline-pop">Starting law school in August.</span></p>
        </section>

        <section id="projects" className="roadmap">
          <ScrollReveal>
            <h2>Projects</h2>
          </ScrollReveal>
          <div className="roadmap-track">
            <ScrollReveal delay={0}>
            <a href="https://foundation1-beta.vercel.app/" className="roadmap-stop roadmap-stop--text-left" target="_blank" rel="noopener noreferrer">
              <div className="roadmap-block card-3d">
                <div className="roadmap-text">
                  <h3 className="roadmap-project">Support for Cardiac Patients & Families</h3>
                  <p className="roadmap-desc">501(c)(3) nonprofit supporting cardiac patients and their families. Find resources, share your journey, and learn about heart diseases and congenital heart defects. <em>Ongoing project — not yet finished.</em></p>
                </div>
                <div className="roadmap-image">
                  <img src="/foundation.png" alt="Support for Cardiac Patients & Families website" />
                </div>
              </div>
            </a>
            </ScrollReveal>
            <ScrollReveal delay={100}>
            <a href="https://smellmybuds-chi.vercel.app/" className="roadmap-stop roadmap-stop--image-left" target="_blank" rel="noopener noreferrer">
              <div className="roadmap-block card-3d">
                <div className="roadmap-image">
                  <img src="/smellmybuds.png" alt="Smell My Buds website" />
                </div>
                <div className="roadmap-text">
                  <h3 className="roadmap-project">Smell My Buds</h3>
                  <p className="roadmap-desc">Custom floral design company in Moreno Valley, CA. Bespoke arrangements for weddings, graduations, and everyday occasions—your imagination, their creation.</p>
                </div>
              </div>
            </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
            <a href="https://m-ctaxservices.vercel.app/" className="roadmap-stop roadmap-stop--text-left" target="_blank" rel="noopener noreferrer">
              <div className="roadmap-block card-3d">
                <div className="roadmap-text">
                  <h3 className="roadmap-project">M & G Tax Services LLC</h3>
                  <p className="roadmap-desc">Professional tax and financial services in Miami, FL. Tax preparation, bookkeeping, payroll, and business formation for individuals and small businesses—led by expert CPAs and EAs.</p>
                </div>
                <div className="roadmap-image">
                  <img src="/mg-tax-services.png" alt="M & G Tax Services LLC website" />
                </div>
              </div>
            </a>
            </ScrollReveal>
            <ScrollReveal delay={300}>
            <a href="https://bearbytes.fyi/" className="roadmap-stop roadmap-stop--image-left" target="_blank" rel="noopener noreferrer">
              <div className="roadmap-block card-3d">
                <div className="roadmap-image">
                  <img src="/bearbytes.png" alt="BearBytes website" />
                </div>
                <div className="roadmap-text">
                  <h3 className="roadmap-project">BearBytes</h3>
                  <p className="roadmap-desc">On-campus delivery for UC Riverside. Order food, drinks, snacks, and more—right to your dorm or building. Partnering with UCR for official campus delivery.</p>
                </div>
              </div>
            </a>
            </ScrollReveal>
          </div>
        </section>

        <section id="pricing" className="pricing">
          <ScrollReveal>
            <h2>Pricing</h2>
          </ScrollReveal>
          <ScrollReveal delay={50}>
            <p className="pricing-intro">Sites and apps built for you—landing pages to full platforms. Custom quotes, no surprises.</p>
          </ScrollReveal>
          <div className="pricing-grid">
            <ScrollReveal delay={0}>
              <div className="pricing-card card-3d pricing-card--landing">
                <div className="pricing-card-glow" />
                <h3>Landing Page</h3>
                <p className="pricing-desc">Single-page website for your business or portfolio.</p>
                <div className="pricing-footer">
                  <span className="pricing-amount">$30</span>
                  <span className="pricing-note">one-time</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="pricing-card card-3d pricing-card--featured">
                <div className="pricing-card-glow" />
                <span className="pricing-badge">Popular</span>
                <h3>Multi-Page Site</h3>
                <p className="pricing-desc">Full website with multiple pages and sections. Requires $20/mo maintenance to keep everything running smoothly.</p>
                <div className="pricing-footer">
                  <span className="pricing-amount">$30</span>
                  <span className="pricing-amount-add">+ $20/mo</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="pricing-card card-3d pricing-card--custom">
                <div className="pricing-card-glow" />
                <h3>E-commerce / App / Software</h3>
                <p className="pricing-desc">Custom web apps, delivery platforms, online stores, custom software, and AI automation—built for your specific needs.</p>
                <div className="pricing-footer">
                  <span className="pricing-amount pricing-amount--custom">Custom quote</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="contact">
          <ScrollReveal>
            <h2>Contact</h2>
          </ScrollReveal>
          <ScrollReveal delay={50}>
            <div className="contact-links">
              <a href="tel:+16502489732">(650) 248-9732</a>
              <a href="mailto:jjuar090@ucr.edu">jjuar090@ucr.edu</a>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  )
}

export default App
