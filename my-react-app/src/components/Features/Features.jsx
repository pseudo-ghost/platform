import React, { useState } from 'react';

function Features() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const successStories = [
    {
      id: 1,
      organization: "Regional Healthcare Network",
      type: "Healthcare • 800+ employees",
      challenge: "Inconsistent training across 12 facilities with manual compliance tracking",
      solution: "Standardized learning platform with automated compliance monitoring",
      result: "Reduced training delivery time by 60%",
      metric: "60%",
      metricLabel: "Time Saved",
      color: "#3b82f6",
      icon: "🏥"
    },
    {
      id: 2,
      organization: "Tech Training Institute",
      type: "Education • 300 students",
      challenge: "Manual course management limiting growth and creating admin bottlenecks",
      solution: "Automated enrollment, progress tracking, and certificate generation",
      result: "Scaled from 50 to 300 students without adding admin staff",
      metric: "6x",
      metricLabel: "Growth",
      color: "#f59e0b",
      icon: "🎓"
    },
    {
      id: 3,
      organization: "Manufacturing Company",
      type: "Manufacturing • 400+ employees",
      challenge: "High turnover requiring constant onboarding with inconsistent quality",
      solution: "Self-paced onboarding program with role-specific training modules",
      result: "New hires reach full productivity 2 weeks faster",
      metric: "2 weeks",
      metricLabel: "Faster",
      color: "#10b981",
      icon: "🏭"
    },
  ];

  return (
    <section style={styles.section}>
      {/* Section Header */}
      <div style={styles.header}>
        <span style={styles.badge}>Success Stories</span>
        <h2 style={styles.title}>How Organizations Use SkillForge</h2>
        <p style={styles.subtitle}>
          Real results from organizations that transformed their learning programs
        </p>
      </div>

      {/* Success Story Cards */}
      <div style={styles.cardsContainer}>
        {successStories.map((story) => (
          <div
            key={story.id}
            style={{
              ...styles.card,
              transform: hoveredCard === story.id ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === story.id 
                ? '0 20px 40px rgba(0, 0, 0, 0.12)' 
                : '0 8px 24px rgba(0, 0, 0, 0.08)',
            }}
            onMouseEnter={() => setHoveredCard(story.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Header with Icon & Org Type */}
            <div style={styles.cardHeader}>
              <div 
                style={{
                  ...styles.iconContainer,
                  backgroundColor: `${story.color}15`,
                  border: `2px solid ${story.color}30`,
                }}
              >
                <span style={styles.icon}>{story.icon}</span>
              </div>
              <div style={styles.orgInfo}>
                <h3 style={styles.orgName}>{story.organization}</h3>
                <span style={styles.orgType}>{story.type}</span>
              </div>
            </div>

            {/* Challenge */}
            <div style={styles.storySection}>
              <span style={styles.label}>Challenge</span>
              <p style={styles.text}>{story.challenge}</p>
            </div>

            {/* Solution */}
            <div style={styles.storySection}>
              <span style={styles.label}>Solution</span>
              <p style={styles.text}>{story.solution}</p>
            </div>

            {/* Result with Metric */}
            <div style={styles.resultContainer}>
              <div 
                style={{
                  ...styles.metricBadge,
                  backgroundColor: `${story.color}15`,
                  borderLeft: `4px solid ${story.color}`,
                }}
              >
                <span 
                  style={{
                    ...styles.metricValue,
                    color: story.color,
                  }}
                >
                  {story.metric}
                </span>
                <span style={styles.metricLabel}>{story.metricLabel}</span>
              </div>
              <p style={styles.resultText}>{story.result}</p>
            </div>

            {/* Decorative Element */}
            <div 
              style={{
                ...styles.cardDecoration,
                backgroundColor: story.color,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={styles.ctaContainer}>
        <p style={styles.ctaText}>
          Ready to create your own success story?
        </p>
        <button 
          style={styles.ctaButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.3)';
          }}
        >
          Schedule a Demo
        </button>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#f8fafc",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    '@media (max-width: 1199px)': {
      padding: "60px 16px",
    },
    '@media (max-width: 767px)': {
      padding: "40px 12px",
    },
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
    '@media (max-width: 1199px)': {
      marginBottom: "48px",
    },
    '@media (max-width: 767px)': {
      marginBottom: "40px",
    },
  },
  badge: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    color: "#3b82f6",
    borderRadius: "20px",
    fontSize: "0.875rem",
    fontWeight: "600",
    marginBottom: "16px",
    letterSpacing: "0.5px",
    '@media (max-width: 1199px)': {
      padding: "6px 14px",
      fontSize: "0.8125rem",
      marginBottom: "14px",
    },
    '@media (max-width: 767px)': {
      padding: "6px 12px",
      fontSize: "0.75rem",
      marginBottom: "12px",
    },
  },
  title: {
    fontSize: "clamp(2rem, 4vw, 2.5rem)",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "16px",
    lineHeight: "1.2",
    '@media (max-width: 1199px)': {
      fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
      marginBottom: "14px",
    },
    '@media (max-width: 767px)': {
      fontSize: "1.5rem",
      marginBottom: "12px",
      padding: "0 8px",
    },
  },
  subtitle: {
    fontSize: "1.125rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
    '@media (max-width: 1199px)': {
      fontSize: "1rem",
      maxWidth: "550px",
      padding: "0 20px",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.9375rem",
      padding: "0 12px",
      lineHeight: "1.5",
    },
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto 60px",
    padding: "0 20px",
    '@media (max-width: 1199px)': {
      gap: "24px",
      marginBottom: "48px",
      padding: "0 16px",
    },
    '@media (max-width: 1023px)': {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    '@media (max-width: 767px)': {
      gridTemplateColumns: "1fr",
      gap: "20px",
      marginBottom: "40px",
      padding: "0 12px",
    },
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    '@media (max-width: 1199px)': {
      padding: "28px",
      borderRadius: "14px",
    },
    '@media (max-width: 767px)': {
      padding: "24px",
      borderRadius: "12px",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "24px",
    '@media (max-width: 1199px)': {
      gap: "14px",
      marginBottom: "20px",
    },
    '@media (max-width: 767px)': {
      gap: "12px",
      marginBottom: "18px",
    },
  },
  iconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "transform 0.3s ease",
    '@media (max-width: 1199px)': {
      width: "52px",
      height: "52px",
      borderRadius: "10px",
    },
    '@media (max-width: 767px)': {
      width: "48px",
      height: "48px",
      borderRadius: "8px",
    },
  },
  icon: {
    fontSize: "1.75rem",
    '@media (max-width: 1199px)': {
      fontSize: "1.625rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "1.5rem",
    },
  },
  orgInfo: {
    flex: 1,
  },
  orgName: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "4px",
    lineHeight: "1.3",
    '@media (max-width: 1199px)': {
      fontSize: "1.125rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "1.0625rem",
    },
  },
  orgType: {
    fontSize: "0.875rem",
    color: "#64748b",
    fontWeight: "500",
    '@media (max-width: 1199px)': {
      fontSize: "0.8125rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.75rem",
    },
  },
  storySection: {
    marginBottom: "20px",
    '@media (max-width: 1199px)': {
      marginBottom: "18px",
    },
    '@media (max-width: 767px)': {
      marginBottom: "16px",
    },
  },
  label: {
    display: "block",
    fontSize: "0.8125rem",
    fontWeight: "600",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
    '@media (max-width: 1199px)': {
      fontSize: "0.75rem",
      marginBottom: "6px",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.6875rem",
      letterSpacing: "0.3px",
    },
  },
  text: {
    fontSize: "0.9375rem",
    color: "#475569",
    lineHeight: "1.6",
    margin: "0",
    '@media (max-width: 1199px)': {
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.8125rem",
    },
  },
  resultContainer: {
    marginTop: "24px",
    paddingTop: "24px",
    borderTop: "1px solid #e2e8f0",
    '@media (max-width: 1199px)': {
      marginTop: "20px",
      paddingTop: "20px",
    },
    '@media (max-width: 767px)': {
      marginTop: "18px",
      paddingTop: "18px",
    },
  },
  metricBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "12px",
    '@media (max-width: 1199px)': {
      padding: "10px 14px",
      gap: "10px",
      marginBottom: "10px",
    },
    '@media (max-width: 767px)': {
      padding: "8px 12px",
      gap: "8px",
      marginBottom: "8px",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  metricValue: {
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "1",
    '@media (max-width: 1199px)': {
      fontSize: "1.375rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "1.25rem",
    },
  },
  metricLabel: {
    fontSize: "0.8125rem",
    color: "#64748b",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    '@media (max-width: 1199px)': {
      fontSize: "0.75rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.6875rem",
      letterSpacing: "0.3px",
    },
  },
  resultText: {
    fontSize: "0.9375rem",
    color: "#1e293b",
    fontWeight: "500",
    margin: "0",
    lineHeight: "1.5",
    '@media (max-width: 1199px)': {
      fontSize: "0.875rem",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.8125rem",
    },
  },
  cardDecoration: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "80px",
    height: "80px",
    borderRadius: "0 16px 0 100%",
    opacity: "0.05",
    '@media (max-width: 1199px)': {
      width: "70px",
      height: "70px",
    },
    '@media (max-width: 767px)': {
      width: "60px",
      height: "60px",
    },
  },
  ctaContainer: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #e2e8f0",
    '@media (max-width: 1199px)': {
      padding: "32px 16px",
      borderRadius: "14px",
      maxWidth: "550px",
    },
    '@media (max-width: 767px)': {
      padding: "24px 12px",
      borderRadius: "12px",
      maxWidth: "100%",
      margin: "0 12px",
    },
  },
  ctaText: {
    fontSize: "1.125rem",
    color: "#475569",
    marginBottom: "24px",
    fontWeight: "500",
    '@media (max-width: 1199px)': {
      fontSize: "1rem",
      marginBottom: "20px",
    },
    '@media (max-width: 767px)': {
      fontSize: "0.9375rem",
      marginBottom: "18px",
      padding: "0 8px",
    },
  },
  ctaButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(59, 130, 246, 0.3)",
    '@media (max-width: 1199px)': {
      padding: "12px 28px",
      fontSize: "0.9375rem",
      borderRadius: "8px",
    },
    '@media (max-width: 767px)': {
      padding: "12px 24px",
      fontSize: "0.875rem",
      borderRadius: "6px",
      width: "100%",
      maxWidth: "280px",
    },
  },
};

// Additional media queries for handling tablet layout
const mediaQueries = `
@media (max-width: 1023px) and (min-width: 768px) {
  .cardsContainer > *:last-child:nth-child(odd) {
    grid-column: span 2;
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .cardsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .card {
    max-width: 400px;
    width: 100%;
  }
}

/* Touch device optimization */
@media (hover: none) and (pointer: coarse) {
  .card {
    cursor: pointer;
  }
  
  .card:active {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
  
  .ctaButton:active {
    transform: scale(0.98);
    background-color: #2563eb;
  }
}
`;

// Add media queries to document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mediaQueries;
  document.head.appendChild(style);
}

export default Features;