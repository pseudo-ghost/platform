import React, { useState, useEffect } from 'react';

function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const founders = [
    {
      name: "Faadhil",
      role: "CEO & Co-Founder",
      photo: "/Faadhil.jpeg",
      description: "Strategic vision and business development leader with 8+ years in educational technology. Passionate about making enterprise learning accessible and effective for organizations of all sizes.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Business Strategy", "EdTech Innovation", "Enterprise Sales"],
      social: {
        linkedin: "#",
        email: "faadhil@luminasystems.com"
      },
      location: "Bayan Lepas, Penang",
      joined: "January 2024",
      phone: "+6012-345 6789",
      github: "faadhil-dev"
    },
    {
      name: "Leena",
      role: "CTO & Co-Founder",
      photo: "/Leena.jpeg",
      description: "Technical architect and platform engineer. Leads the development of SkillForge's scalable learning infrastructure with expertise in building enterprise-grade systems.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Platform Architecture", "API Development", "System Scalability"],
      social: {
        linkedin: "#",
        email: "leena@luminasystems.com"
      },
      location: "Bayan Lepas, Penang",
      joined: "January 2024",
      phone: "+6011-60572045",
      github: "leena-dev"
    },
    {
      name: "Parisa",
      role: "Chief Learning Officer & Co-Founder",
      photo: "/Parisa.jpeg",
      description: "Learning experience designer and product strategist. Focuses on creating intuitive, learner-centered platforms that drive measurable outcomes for organizations.",
      education: "Bachelor of Computer Science, Universiti Sains Malaysia",
      expertise: ["Learning Design", "UX Strategy", "Product Development"],
      social: {
        linkedin: "#",
        email: "parisa@luminasystems.com"
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
                    
                    
                  </div>
                </div>

                <div style={styles.detailRight}>
                  {/* Contact Information */}
                  
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </section>
  );
}
const styles = {
  section: {
    padding: "80px 20px",
    background: "#6667AB", // MOON Deep Navy
    color: "#F5D5E0",      // MOON Soft Pink
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
  },
  hero: {
    textAlign: 'center',
    marginBottom: 'clamp(3rem, 5vw, 5rem)',
    maxWidth: '800px',
    margin: '0 auto clamp(3rem, 5vw, 5rem)',
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#F5D5E0", 
    textAlign: "center",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: "#210635", // MOON Blue-Purple
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
    background: "rgba(66, 13, 75, 0.4)", // MOON Translucent Purple
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    padding: "30px",
    border: "1px solid rgba(245, 213, 224, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: 'relative',
  },
  photoContainer: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
    borderRadius: '16px',
    marginBottom: '1.5rem',
  },
  roleBadge: {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    backgroundColor: "rgba(33, 6, 53, 0.8)", // Darker glass
    backdropFilter: 'blur(10px)',
    padding: '0.625rem 1rem',
    borderRadius: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid rgba(245, 213, 224, 0.2)',
  },
  roleBadgeText: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#F5D5E0',
  },
  infoContainer: {
    textAlign: 'left',
  },
  founderName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#F5D5E0',
    marginBottom: '0.25rem',
  },
  founderRole: {
    fontSize: '1rem',
    color: '#210635', // MOON Vibrant Purple
    fontWeight: '600',
    marginBottom: '1.25rem',
  },
  founderDescription: {
    fontSize: '0.9375rem',
    color: '#F5D5E0',
    opacity: 0.8,
    lineHeight: '1.7',
    marginBottom: '1.5rem',
  },
  educationSection: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: 'rgba(102, 103, 171, 0.1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(245, 213, 224, 0.1)',
  },
  educationText: {
    fontSize: '0.875rem',
    color: '#210635F',
    lineHeight: '1.5',
  },
  expertiseContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  expertiseTag: {
    background: "rgba(102, 103, 171, 0.2)",
    color: "#F5D5E0",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    border: "1px solid rgba(245, 213, 224, 0.1)",
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
    backgroundColor: "rgba(66, 13, 75, 0.2)",
    borderRadius: '1.25rem',
    border: '1px solid rgba(245, 213, 224, 0.1)',
  },
  statNumber: {
    fontSize: 'clamp(2.5rem, 4vw, 3rem)',
    fontWeight: '800',
    color: 'white',
    lineHeight: '1',
  },
  statLabel: {
    fontSize: '0.9375rem',
    color: 'white',
    marginTop: '0.75rem',
    textAlign: 'center',
    fontWeight: '500',
  },
  statDivider: {
    width: '1px',
    height: '4rem',
    backgroundColor: 'rgba(245, 213, 224, 0.1)',
  },
 
  detailContainer: {
    background: "rgba(33, 6, 53, 0.98)", // Deep Navy solid feel
    borderRadius: "32px",
    padding: "clamp(2rem, 5vw, 4rem)", // Responsive padding
    marginTop: "40px",
    border: "2px solid #7B337E", // Vibrant Purple accent
    boxShadow: "0 0 30px rgba(123, 51, 126, 0.3)",
    animation: "slideDown 0.4s ease-out forwards",
  },
  
  detailName: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "#F5D5E0", // Soft Pink
    marginBottom: "0.5rem",
  },

  detailRole: {
    fontSize: "1.25rem",
    color: "#7B337E", // Vibrant Purple
    fontWeight: "600",
    marginBottom: "1.5rem",
  },

  
  backgroundSection: {
    marginTop: "2.5rem",
    borderTop: "1px solid rgba(245, 213, 224, 0.1)",
    paddingTop: "2rem",
  },

  backgroundTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#F5D5E0",
    marginBottom: "1.5rem",
  },

  backgroundGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem", // Adds vertical space between items
  },

  backgroundItem: {
    display: "flex",
    flexDirection: "column", // Stack label on top of value
    gap: "0.5rem", // Space between label and value
  },

  backgroundLabel: {
    fontSize: "0.875rem",
    color: "#6667AB", // Blue-Purple
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  backgroundValue: {
    fontSize: "1.1rem",
    color: "#F5D5E0",
    fontWeight: "500",
  },

  // FIX: Expertise tags layout
  expertiseDetail: {
    marginTop: "2.5rem",
  },

  expertiseTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#F5D5E0",
    marginBottom: "1.25rem",
  },

  expertiseTagsDetail: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem", // Adds space between the purple boxes
  },

  expertiseTagDetail: {
    backgroundColor: "rgba(123, 51, 126, 0.2)",
    color: "#F5D5E0",
    padding: "0.75rem 1.25rem",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "500",
    border: "1px solid rgba(123, 51, 126, 0.3)",
  },

  // CONTACT SECTION FIXES
  contactSection: {
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "rgba(66, 13, 75, 0.3)",
    borderRadius: "20px",
    border: "1px solid rgba(245, 213, 224, 0.1)",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.25rem",
  },

  contactLabel: {
    width: "80px", // Keeps labels aligned
    color: "#6667AB",
    fontWeight: "600",
  },

  contactValue: {
    color: "#F5D5E0",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },

  socialLinkDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#F5D5E0',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    backgroundColor: "rgba(102, 103, 171, 0.2)",
    borderRadius: '0.75rem',
    border: '1px solid rgba(245, 213, 224, 0.1)',
    transition: 'all 0.2s ease',
  },

  /* GROUPED MEDIA QUERY TO FIX DUPLICATE KEY WARNING */
  '@media (min-width: 768px)': {
    detailContent: {
      flexDirection: 'row',
    },
    detailName: {
      fontSize: '2.5rem',
    }
  }
};

export default Team;