import React, { useState, useEffect } from 'react';

function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const founders = [
    {
      name: "Faadhil Mohiadeen",
      role: "CEO & Co-Founder",
      photo: "/images/faadhil.jpg",
      description: "Strategic vision and business development leader with 8+ years in educational technology. Passionate about making enterprise learning accessible and effective for organizations of all sizes.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Business Strategy", "EdTech Innovation", "Enterprise Sales"],
      social: {
        linkedin: "#",
        email: "faadhil@skillforge.com"
      },
      location: "Bayan Lepas, Penang",
      joined: "January 2024",
      phone: "+6012-345 6789",
      github: "faadhil-dev"
    },
    {
      name: "Leena",
      role: "CTO & Co-Founder",
      photo: "/images/leena.jpg",
      description: "Technical architect and platform engineer. Leads the development of SkillForge's scalable learning infrastructure with expertise in building enterprise-grade systems.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Platform Architecture", "API Development", "System Scalability"],
      social: {
        linkedin: "#",
        email: "leena@skillforge.com"
      },
      location: "Bayan Lepas, Penang",
      joined: "January 2024",
      phone: "+6011-60572045",
      github: "leena-dev"
    },
    {
      name: "Parisa",
      role: "Chief Learning Officer & Co-Founder",
      photo: "/images/parisa.jpg",
      description: "Learning experience designer and product strategist. Focuses on creating intuitive, learner-centered platforms that drive measurable outcomes for organizations.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Learning Design", "UX Strategy", "Product Development"],
      social: {
        linkedin: "#",
        email: "parisa@skillforge.com"
      },
      location: "Bayan Lepas, Penang",
      joined: "January 2024",
      phone: "+6012-987 6543",
      github: "parisa-dev"
    }
  ];

  // Add animations using useEffect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
          max-height: 0;
        }
        to {
          opacity: 1;
          transform: translateY(0);
          max-height: 500px;
        }
      }
      
      @keyframes slideUp {
        from {
          opacity: 1;
          transform: translateY(0);
          max-height: 500px;
        }
        to {
          opacity: 0;
          transform: translateY(-20px);
          max-height: 0;
        }
      }
      
      @media (prefers-reduced-motion: reduce) {
        * {
          animation: none !important;
          transition: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  const handleMemberClick = (founder) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (selectedMember === founder.name) {
      // If clicking the same member, deselect
      setTimeout(() => {
        setSelectedMember(null);
        setIsAnimating(false);
      }, 300);
    } else {
      // If clicking a different member
      setSelectedMember(founder.name);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const getSocialIcon = (platform) => {
    if (platform === 'linkedin') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      );
    } else if (platform === 'github') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    } else {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      );
    }
  };

  return (
    <section id="founders" style={styles.section}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Meet Our Founders</h1>
        <p style={styles.heroSubtitle}>
          Three Computer Science graduates united by a mission to transform how organizations build learning cultures.
        </p>
      </div>

      {/* Founders Grid */}
      <div style={styles.foundersGrid}>
        {founders.map((founder, index) => (
          <div
            key={founder.name}
            style={{
              ...styles.founderCard,
              opacity: 0,
              animation: `fadeInUp 0.6s ease ${index * 0.15}s forwards`,
              transform: hoveredMember === founder.name ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredMember === founder.name
                ? '0 20px 50px rgba(0, 0, 0, 0.25)'
                : selectedMember === founder.name
                ? '0 0 0 3px #3b82f6, 0 10px 30px rgba(59, 130, 246, 0.3)'
                : '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
            onMouseEnter={() => setHoveredMember(founder.name)}
            onMouseLeave={() => setHoveredMember(null)}
            onClick={() => handleMemberClick(founder)}
          >
            {/* Blue Glow Ring when selected */}
            {selectedMember === founder.name && (
              <div style={styles.selectedRing}></div>
            )}

            {/* Photo Container */}
            <div style={styles.photoContainer}>
              {/* Placeholder: Gradient with Initials */}
              <div style={{
                ...styles.photoPlaceholder,
                background: founder.gradient
              }}>
                <span style={styles.initials}>
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Role Badge */}
              <div style={styles.roleBadge}>
                <span style={styles.roleIcon}>
                  {founder.role.includes('CEO') ? '👔' : founder.role.includes('CTO') ? '💻' : '🎨'}
                </span>
                <span style={styles.roleBadgeText}>{founder.role.split('&')[0].trim()}</span>
              </div>
            </div>

            {/* Info Container */}
            <div style={styles.infoContainer}>
              <h3 style={styles.founderName}>{founder.name}</h3>
              <p style={styles.founderRole}>{founder.role}</p>

              <p style={styles.founderDescription}>
                {founder.description}
              </p>

              {/* Education */}
              <div style={styles.educationSection}>
                <span style={styles.educationIcon}>🎓</span>
                <span style={styles.educationText}>{founder.education}</span>
              </div>

              {/* Expertise Tags */}
              <div style={styles.expertiseContainer}>
                {founder.expertise.map((skill) => (
                  <span key={skill} style={styles.expertiseTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Company Stats */}
      <div style={styles.statsSection}>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>8+</span>
          <span style={styles.statLabel}>Years Combined Experience</span>
        </div>
        <div style={styles.statDivider}></div>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>20+</span>
          <span style={styles.statLabel}>Organizations Served</span>
        </div>
        <div style={styles.statDivider}></div>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>5K+</span>
          <span style={styles.statLabel}>Learners Empowered</span>
        </div>
      </div>

      {/* Detailed Member View (Appears when a member is clicked) */}
      {selectedMember && (
        <div 
          style={{
            ...styles.detailContainer,
            animation: isAnimating ? 'none' : `slideDown 0.3s ease forwards`
          }}
        >
          {founders.map((founder) => (
            founder.name === selectedMember && (
              <div key={founder.name} style={styles.detailContent}>
                <div style={styles.detailLeft}>
                  <h2 style={styles.detailName}>{founder.name}</h2>
                  <p style={styles.detailRole}>{founder.role}</p>
                  <p style={styles.detailDescription}>{founder.description}</p>
                  
                  {/* Background Section */}
                  <div style={styles.backgroundSection}>
                    <h3 style={styles.backgroundTitle}>Background</h3>
                    <div style={styles.backgroundGrid}>
                      <div style={styles.backgroundItem}>
                        <span style={styles.backgroundLabel}>Education</span>
                        <span style={styles.backgroundValue}>{founder.education}</span>
                      </div>
                      <div style={styles.backgroundItem}>
                        <span style={styles.backgroundLabel}>Location</span>
                        <span style={styles.backgroundValue}>{founder.location}</span>
                      </div>
                      <div style={styles.backgroundItem}>
                        <span style={styles.backgroundLabel}>Joined</span>
                        <span style={styles.backgroundValue}>{founder.joined}</span>
                      </div>
                    </div>
                  </div>

                  {/* Expertise Section */}
                  <div style={styles.expertiseDetail}>
                    <h3 style={styles.expertiseTitle}>Expertise</h3>
                    <div style={styles.expertiseTagsDetail}>
                      {founder.expertise.map((skill) => (
                        <span key={skill} style={styles.expertiseTagDetail}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={styles.detailRight}>
                  {/* Contact Information */}
                  <div style={styles.contactSection}>
                    <h3 style={styles.contactTitle}>Contact Information</h3>
                    <div style={styles.contactInfo}>
                      <div style={styles.contactItem}>
                        <span style={styles.contactLabel}>Email</span>
                        <a 
                          href={`mailto:${founder.social.email}`} 
                          style={styles.contactValue}
                        >
                          {founder.social.email}
                        </a>
                      </div>
                      <div style={styles.contactItem}>
                        <span style={styles.contactLabel}>Phone</span>
                        <a 
                          href={`tel:${founder.phone}`} 
                          style={styles.contactValue}
                        >
                          {founder.phone}
                        </a>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div style={styles.socialSectionDetail}>
                      <span style={styles.socialLabel}>Social</span>
                      <div style={styles.socialLinksDetail}>
                        <a 
                          href={founder.social.linkedin} 
                          style={styles.socialLinkDetail}
                          aria-label={`${founder.name}'s LinkedIn`}
                        >
                          {getSocialIcon('linkedin')}
                          <span style={styles.socialText}>LinkedIn</span>
                        </a>
                        <a 
                          href={`https://github.com/${founder.github}`} 
                          style={styles.socialLinkDetail}
                          aria-label={`${founder.name}'s GitHub`}
                        >
                          {getSocialIcon('github')}
                          <span style={styles.socialText}>GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </section>
  );
}

// Styles - Updated to match your friend's exact style
const styles = {
  section: {
    minHeight: '100vh',
    background: '#ffffff',
    padding: 'clamp(4rem, 6vw, 6rem) clamp(1.5rem, 4vw, 2rem)',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  hero: {
    textAlign: 'center',
    marginBottom: 'clamp(3rem, 5vw, 5rem)',
    maxWidth: '800px',
    margin: '0 auto clamp(3rem, 5vw, 5rem)',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: '#64748b',
    lineHeight: '1.7',
    maxWidth: '700px',
    margin: '0 auto',
  },
  foundersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
    gap: 'clamp(2rem, 3vw, 3rem)',
    maxWidth: '1200px',
    margin: '0 auto 4rem',
  },
  founderCard: {
    background: '#ffffff',
    borderRadius: '1.25rem',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    cursor: 'pointer',
  },
  selectedRing: {
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    right: '-3px',
    bottom: '-3px',
    border: '3px solid #3b82f6',
    borderRadius: '1.5rem',
    zIndex: 1,
    pointerEvents: 'none',
  },
  photoContainer: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: '4rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '0.1em',
  },
  roleBadge: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    padding: '0.625rem 1rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid rgba(226, 232, 240, 0.8)',
  },
  roleIcon: {
    fontSize: '1.125rem',
  },
  roleBadgeText: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#1e293b',
  },
  infoContainer: {
    padding: '2rem',
  },
  founderName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.25rem',
    lineHeight: '1.2',
  },
  founderRole: {
    fontSize: '1rem',
    color: '#3b82f6',
    fontWeight: '600',
    marginBottom: '1.25rem',
  },
  founderDescription: {
    fontSize: '0.9375rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  educationSection: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8fafc',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
  },
  educationIcon: {
    fontSize: '1.25rem',
    flexShrink: 0,
    color: '#3b82f6',
  },
  educationText: {
    fontSize: '0.875rem',
    color: '#475569',
    lineHeight: '1.5',
  },
  expertiseContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  expertiseTag: {
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    padding: '0.5rem 0.875rem',
    borderRadius: '0.5rem',
    fontSize: '0.8125rem',
    fontWeight: '500',
    border: '1px solid #dbeafe',
    whiteSpace: 'nowrap',
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'clamp(2rem, 4vw, 3rem)',
    flexWrap: 'wrap',
    maxWidth: '900px',
    margin: '0 auto 4rem',
    padding: '3rem 2rem',
    backgroundColor: '#f8fafc',
    borderRadius: '1.25rem',
    border: '1px solid #e2e8f0',
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '140px',
  },
  statNumber: {
    fontSize: 'clamp(2.5rem, 4vw, 3rem)',
    fontWeight: '800',
    color: '#3b82f6',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.9375rem',
    color: '#64748b',
    marginTop: '0.75rem',
    textAlign: 'center',
    fontWeight: '500',
  },
  statDivider: {
    width: '1px',
    height: '4rem',
    backgroundColor: '#e2e8f0',
  },
  // Detailed View Styles
  detailContainer: {
    maxWidth: '1200px',
    margin: '0 auto 4rem',
    backgroundColor: '#ffffff',
    borderRadius: '1.25rem',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  detailContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '3rem',
  },
  '@media (min-width: 768px)': {
    detailContent: {
      flexDirection: 'row',
    },
  },
  detailLeft: {
    flex: 2,
  },
  detailRight: {
    flex: 1,
  },
  detailName: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '0.5rem',
    lineHeight: '1.2',
  },
  detailRole: {
    fontSize: '1.25rem',
    color: '#3b82f6',
    fontWeight: '600',
    marginBottom: '1.5rem',
  },
  detailDescription: {
    fontSize: '1.125rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  backgroundSection: {
    marginBottom: '2rem',
  },
  backgroundTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '1.5rem',
  },
  backgroundGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  backgroundItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  backgroundLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    fontWeight: '500',
  },
  backgroundValue: {
    fontSize: '1rem',
    color: '#1e293b',
    fontWeight: '500',
  },
  expertiseDetail: {
    marginBottom: '2rem',
  },
  expertiseTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '1.5rem',
  },
  expertiseTagsDetail: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  expertiseTagDetail: {
    backgroundColor: '#eff6ff',
    color: '#1d4ed8',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    fontWeight: '500',
    border: '1px solid #dbeafe',
  },
  contactSection: {
    backgroundColor: '#f8fafc',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #e2e8f0',
  },
  contactTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '1.5rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    marginBottom: '2rem',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  contactLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    fontWeight: '500',
  },
  contactValue: {
    fontSize: '1rem',
    color: '#3b82f6',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  socialSectionDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  socialLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    fontWeight: '500',
  },
  socialLinksDetail: {
    display: 'flex',
    gap: '1rem',
  },
  socialLinkDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#475569',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    transition: 'all 0.2s ease',
  },
  socialText: {
    fontSize: '0.875rem',
    fontWeight: '500',
  },
};

export default Team;