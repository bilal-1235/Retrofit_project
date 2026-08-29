import './Herosection.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">
            Retrofit Your Home In Weeks, Not Months — Fully Compliant & Funded
          </h1>
          <p className="hero-description">
            Purchase PAS 2035 retrofit services online with transparent pricing, funding support, and end-to-end project coordination.
          </p>
          <div className="hero-buttons">
            <button className="btn-browse">Browse Services</button>
            <button className="btn-watch">Watch Video</button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h2>1K+</h2>
            <p>Homes Retrofitted</p>
          </div>
          <div className="stat-item">
            <h2>2.4M</h2>
            <p>Funding Secured</p>
          </div>
          <div className="stat-item">
            <h2>4.9/5</h2>
            <p>Average Rating</p>
          </div>
           
        </div>
 <div className="hero-badge">
  <svg viewBox="0 0 200 200" className="badge-ring">
    <defs>
      <path
        id="circlePath"
        d="M 100, 20 a 80,80 0 1,1 -0.1,0"
      />
    </defs>
    <text className="badge-ring-text">
      <textPath href="#circlePath">
        REGISTERED • TRUSTMARK INSTALLER •
      </textPath>
    </text>
  </svg>

  <div className="badge-inner-circle">
    <svg className="badge-shield" viewBox="0 0 24 24" fill="none" stroke="#0f3d3e" strokeWidth="2">
      <path d="M12 2 L20 6 V12 C20 17 16.5 20.5 12 22 C7.5 20.5 4 17 4 12 V6 Z" />
    </svg>
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;