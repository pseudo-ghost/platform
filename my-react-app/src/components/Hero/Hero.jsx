import React, { useState, useEffect, useRef } from "react";

function HomePage() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.pageYOffset;
      const parallaxElements = heroRef.current.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div ref={heroRef} className="homepage">
      {/* Hero Section Only */}
      <section 
        className="hero-section" 
        id="home"
        aria-label="SkillForge Enterprise Learning Platform"
        role="region"
      >
        {/* Professional Background Elements - Hidden on mobile */}
        {!isMobile && (
          <>
            <div 
              className="background-shape shape1" 
              data-parallax 
              data-speed="0.2"
              aria-hidden="true"
            >
              <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="rgba(103, 47, 230, 0.06)" strokeWidth="1.5">
                <path d="M12 2L12 22M4 12H20" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>

            <div 
              className="background-shape shape2" 
              data-parallax 
              data-speed="0.4"
              aria-hidden="true"
            >
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="rgba(25, 25, 112, 0.04)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9H21M9 21V9" />
              </svg>
            </div>
          </>
        )}

        <div className="hero-container">
          <div className="hero-content">
            {/* Enterprise Badge */}
            <div 
              className="enterprise-badge"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="title-line">Turn Training Into Measurable</span>
              <span className="title-highlight">Business Performance</span>
            </h1>

            {/* Value Proposition */}
            <p className="hero-subtitle">
              A flexible learning management system that grows with your organization from 50 to 5,000 employees. Deploy in weeks, not months.
            </p>

            {/* Key Metrics */}
            <div className="metrics-grid">
              <div 
                className="metric-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '0.1s'
                }}
              >
                <span className="metric-value">94%</span>
                <span className="metric-label">Employee Skill Improvement</span>
              </div>
              <div 
                className="metric-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '0.2s'
                }}
              >
                <span className="metric-value">3.2x</span>
                <span className="metric-label">Faster Time-to-Productivity</span>
              </div>
              <div 
                className="metric-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: '0.3s'
                }}
              >
                <span className="metric-value">40%</span>
                <span className="metric-label">Lower Training Costs</span>
              </div>
            </div>

            {/* Stats Disclaimer */}
            <p className="stats-disclaimer">
              Based on early pilot results with 8 mid-sized organizations (2024)
            </p>

            {/* Primary CTA */}
            <div className="cta-container">
              <button
                className="primary-cta"
                style={{
                  transform: hoveredButton === 'demo' ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 'demo' ? '0 8px 32px rgba(103, 47, 230, 0.35)' : '0 4px 20px rgba(103, 47, 230, 0.2)',
                }}
                onMouseEnter={() => setHoveredButton('demo')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => console.log('Schedule Demo clicked')}
                aria-label="Schedule a personalized demo"
              >
                <span className="cta-icon">📅</span>
                Schedule a Demo
              </button>
              
              <a 
                href="#pricing"
                className="secondary-link"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('View pricing clicked');
                }}
              >
                View pricing →
              </a>
            </div>

            {/* Industry Focus */}
            <div className="trust-section">
              <p className="trust-label">Built for organizations across industries</p>
              <div className="industry-grid">
                {[
                  { icon: '🏥', label: 'Healthcare' },
                  { icon: '🏭', label: 'Manufacturing' },
                  { icon: '🎓', label: 'Education' },
                  { icon: '💼', label: 'Professional Services' },
                  { icon: '🏪', label: 'Retail' },
                  { icon: '⚡', label: 'Technology' }
                ].map((industry, index) => (
                  <div 
                    key={industry.label}
                    className="industry-card"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transitionDelay: `${0.1 + index * 0.05}s`
                    }}
                    aria-label={`${industry.label} sector`}
                  >
                    <span className="industry-icon">{industry.icon}</span>
                    <span className="industry-label">{industry.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Preview - Hidden on mobile, shown on tablet/desktop */}
          {!isMobile && (
            <div className="dashboard-container" aria-hidden="true">
              <p className="dashboard-caption">
                Real-time insights into team progress and skill development
              </p>
              
              <div className="dashboard-card">
                <div className="dashboard-header">
                  <div className="dashboard-title">
                    <div className="title-bar"></div>
                    <div className="title-bar"></div>
                  </div>
                  <div className="dashboard-controls">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                  </div>
                </div>
                
                <div className="dashboard-content">
                  <div className="analytics-section">
                    <div className="analytics-header">
                      <div className="section-title"></div>
                      <div className="filter-pill"></div>
                    </div>
                    <div className="team-grid">
                      <div className="team-card"></div>
                      <div className="team-card"></div>
                      <div className="team-card"></div>
                    </div>
                  </div>
                  
                  <div className="metrics-section">
                    <div className="metric-row">
                      <div className="metric-label-placeholder"></div>
                      <div className="progress-bar">
                        <div className="progress-fill"></div>
                      </div>
                    </div>
                    <div className="metric-row">
                      <div className="metric-label-placeholder"></div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '75%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="feature-badge badge1" data-parallax data-speed="0.3">
                  <span className="feature-icon">📊</span>
                  <span className="feature-text">Analytics</span>
                </div>
                <div className="feature-badge badge2" data-parallax data-speed="0.25">
                  <span className="feature-icon">👥</span>
                  <span className="feature-text">Team Mgmt</span>
                </div>
                <div className="feature-badge badge3" data-parallax data-speed="0.35">
                  <span className="feature-icon">🔄</span>
                  <span className="feature-text">Integrations</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-line"></div>
          <span className="scroll-text">Explore platform features</span>
        </div>
      </section>
    </div>
  );
}

// Enhanced CSS Styles with better mobile responsiveness
const styles = `
.homepage {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  color: #606060;
  line-height: 1.6;
  width: 100%;
  background-color: white;
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  background: white;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.background-shape {
  position: absolute;
  z-index: 0;
  transition: transform 0.1s linear;
}

.shape1 {
  top: 15%;
  left: 8%;
  opacity: 0.5;
}

.shape2 {
  bottom: 20%;
  right: 10%;
  opacity: 0.3;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
  max-width: min(100%, 1400px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    align-items: center;
  }
}

.hero-content {
  flex: 1;
  max-width: min(100%, 600px);
  text-align: center;
}

@media (min-width: 1024px) {
  .hero-content {
    text-align: left;
  }
}

.enterprise-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgba(103, 47, 230, 0.1);
  color: #3F00FF;
  padding: 0.625rem 1.25rem;
  border-radius: 2rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  transition: opacity 0.6s ease, transform 0.6s ease;
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .enterprise-badge {
    margin-left: 0;
    margin-right: 0;
    justify-content: flex-start;
  }
}

.badge-icon {
  font-size: 1.1em;
}

.badge-text {
  white-space: nowrap;
}

.hero-title {
  font-size: clamp(1.75rem, 5vw, 3.25rem);
  font-weight: 800;
  color: #191970;
  margin: 0 0 1.5rem 0;
  line-height: 1.1;
}

.title-line {
  display: block;
}

.title-highlight {
  display: block;
  color: #672FE6;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #606060;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin: 0 0 1rem 0;
}

@media (max-width: 640px) {
  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}

.metric-card {
  background-color: white;
  border: 1px solid rgba(103, 47, 230, 0.1);
  border-radius: 0.75rem;
  padding: clamp(1rem, 2vw, 1.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(103, 47, 230, 0.1);
  border-color: #672FE6;
}

.metric-value {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #672FE6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: clamp(0.75rem, 1.5vw, 0.8125rem);
  color: #606060;
  text-align: center;
  font-weight: 500;
  line-height: 1.3;
}

.stats-disclaimer {
  font-size: clamp(0.75rem, 1.5vw, 0.8125rem);
  color: #606060;
  font-style: italic;
  margin: 0 0 2.5rem 0;
  text-align: center;
}

@media (min-width: 1024px) {
  .stats-disclaimer {
    text-align: left;
  }
}

.cta-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  align-items: center;
  width: 100%;
}

@media (min-width: 1024px) {
  .cta-container {
    align-items: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: auto;
  }
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: clamp(0.875rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  border-radius: 0.75rem;
  border: none;
  background-color: #672FE6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: clamp(12rem, 20vw, 16rem);
  width: 100%;
  max-width: 300px;
}

@media (min-width: 768px) {
  .primary-cta {
    width: auto;
  }
}

.primary-cta:hover {
  background-color: #3F00FF;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(103, 47, 230, 0.35);
}

.cta-icon {
  font-size: 1.1em;
}

.secondary-link {
  font-size: clamp(0.875rem, 1.5vw, 0.9375rem);
  color: #672FE6;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.secondary-link:hover {
  color: #3F00FF;
}

.trust-section {
  margin-top: 2rem;
}

.trust-label {
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  color: #606060;
  margin-bottom: 1rem;
  font-weight: 500;
  text-align: center;
}

@media (min-width: 1024px) {
  .trust-label {
    text-align: left;
  }
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .industry-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .industry-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .industry-grid {
    grid-template-columns: 1fr;
  }
}

.industry-card {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1rem;
  background-color: white;
  border: 1px solid rgba(103, 47, 230, 0.1);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.industry-card:hover {
  border-color: #672FE6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(103, 47, 230, 0.1);
}

.industry-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.industry-label {
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  font-weight: 500;
}

.dashboard-container {
  flex: 1;
  max-width: min(100%, 600px);
  position: relative;
}

@media (max-width: 1024px) {
  .dashboard-container {
    max-width: min(100%, 500px);
  }
}

.dashboard-caption {
  font-size: clamp(0.8125rem, 1.5vw, 0.875rem);
  color: #606060;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
}

.dashboard-card {
  background-color: white;
  border-radius: 1.25rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  padding: clamp(1.25rem, 2vw, 1.5rem);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(103, 47, 230, 0.1);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.title-bar {
  width: clamp(4rem, 6vw, 6rem);
  height: 0.5rem;
  background-color: rgba(103, 47, 230, 0.1);
  border-radius: 0.25rem;
}

.control-dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(103, 47, 230, 0.3);
  border-radius: 50%;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.analytics-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  width: clamp(6rem, 8vw, 8rem);
  height: 0.75rem;
  background-color: rgba(103, 47, 230, 0.05);
  border-radius: 0.375rem;
}

.filter-pill {
  width: clamp(3rem, 4vw, 4rem);
  height: 1.25rem;
  background-color: rgba(103, 47, 230, 0.1);
  border-radius: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.team-card {
  height: 4rem;
  background-color: rgba(103, 47, 230, 0.03);
  border-radius: 0.75rem;
  border: 1px solid rgba(103, 47, 230, 0.1);
}

.metric-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.metric-label-placeholder {
  width: clamp(4rem, 6vw, 6rem);
  height: 0.75rem;
  background-color: rgba(103, 47, 230, 0.05);
  border-radius: 0.375rem;
}

.progress-bar {
  flex: 1;
  height: 0.75rem;
  background-color: rgba(103, 47, 230, 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 65%;
  background-color: #672FE6;
  border-radius: 0.375rem;
}

.feature-badge {
  position: absolute;
  background-color: white;
  border: 1px solid rgba(103, 47, 230, 0.1);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-size: clamp(0.7rem, 1vw, 0.75rem);
  font-weight: 500;
  z-index: 2;
  transition: transform 0.1s linear;
}

.badge1 {
  top: -0.75rem;
  right: 2rem;
}

.badge2 {
  bottom: 1rem;
  left: -1rem;
}

.badge3 {
  bottom: -0.75rem;
  right: 30%;
}

.feature-icon {
  font-size: 0.9em;
}

.feature-text {
  white-space: nowrap;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.scroll-line {
  width: 1px;
  height: 3rem;
  background: linear-gradient(180deg, #672FE6 0%, transparent 100%);
}

.scroll-text {
  font-size: 0.75rem;
  color: #606060;
  font-weight: 500;
}

/* Enhanced Responsive Breakpoints */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
    min-height: auto;
    padding-top: 4rem; /* Account for fixed navbar */
  }
  
  .hero-container {
    gap: 2rem;
  }
  
  .dashboard-container {
    margin-top: 2rem;
  }
  
  .scroll-indicator {
    bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-container {
    margin-bottom: 2rem;
  }
  
  .primary-cta {
    min-width: auto;
    padding: 0.875rem 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1023px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    max-width: min(100%, 800px);
  }
  
  .enterprise-badge,
  .trust-label,
  .stats-disclaimer {
    margin-left: auto;
    margin-right: auto;
  }
  
  .dashboard-container {
    max-width: min(100%, 700px);
    margin-top: 3rem;
  }
}

/* Ensure hover effects work on touch devices */
@media (hover: hover) and (pointer: fine) {
  .metric-card:hover,
  .industry-card:hover,
  .primary-cta:hover,
  .secondary-link:hover {
    /* Hover effects remain for devices with hover capability */
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .metric-card,
  .industry-card,
  .primary-cta {
    -webkit-tap-highlight-color: transparent;
  }
  
  .primary-cta:active {
    transform: scale(0.98);
  }
}
`;

// Add styles to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styles;
  document.head.appendChild(style);
}

export default HomePage;