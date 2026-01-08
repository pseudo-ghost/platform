import React, { useState, useEffect } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={styles.section}>
      {/* MISSION SECTION */}
      <div 
        style={{
          ...styles.missionContainer,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <div style={styles.missionText}>
          <h1 style={styles.missionTitle}>Our Mission: Enable Organizational Growth Through Learning</h1>
          <p style={styles.missionParagraph}>
            At LuminaSystems, we believe that when organizations empower their people with effective learning tools, they unlock potential at every level. Founded by educators and technologists, we build adaptive learning platforms that scale with your needs.
          </p>
          <div style={styles.missionStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>150+</span>
              <span style={styles.statLabel}>Organizations Served</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>98%</span>
              <span style={styles.statLabel}>Client Retention</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>24/7</span>
              <span style={styles.statLabel}>Enterprise Support</span>
            </div>
          </div>
        </div>
        <div style={styles.missionVisual}>
          <div style={styles.visualCard}>
            <div style={styles.visualIcon}>🎯</div>
            <h3 style={styles.visualTitle}>Purpose-Driven Design</h3>
            <p style={styles.visualText}>Every feature addresses real organizational learning challenges</p>
          </div>
          <div style={styles.visualCard}>
            <div style={styles.visualIcon}>⚙️</div>
            <h3 style={styles.visualTitle}>Scalable Architecture</h3>
            <p style={styles.visualText}>Grow from 50 to 50,000 users without platform changes</p>
          </div>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div style={styles.valuesSection}>
        <h2 style={styles.sectionTitle}>Our Core Principles</h2>
        <p style={styles.sectionSubtitle}>
          These principles guide every platform we build and partnership we form
        </p>
        
        <div style={styles.valuesGrid}>
          {valuesData.map((value, index) => (
            <div
              key={value.id}
              style={{
                ...styles.valueCard,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.2 + index * 0.1}s, transform 0.8s ease ${0.2 + index * 0.1}s`,
                borderTop: `4px solid ${value.color}`
              }}
            >
              <div style={{...styles.valueIconContainer, backgroundColor: value.bgColor}}>
                <span style={styles.valueIcon}>{value.icon}</span>
              </div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DIFFERENTIATOR SECTION */}
      <div 
        style={{
          ...styles.differentiatorSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
        }}
      >
        <div style={styles.differentiatorContent}>
          <h2 style={styles.differentiatorTitle}>Why Organizations Choose Us</h2>
          <div style={styles.differentiatorList}>
            {differentiators.map((item, index) => (
              <div key={index} style={styles.differentiatorItem}>
                <div style={styles.differentiatorCheck}>✓</div>
                <div>
                  <h3 style={styles.differentiatorItemTitle}>{item.title}</h3>
                  <p style={styles.differentiatorItemText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.differentiatorVisual}>
          <div style={styles.differentiatorQuote}>
            <div style={styles.quoteMark}>"</div>
            <p style={styles.quoteText}>
              LuminaSystems understood our need for a platform that could serve both corporate training and academic programs. Their adaptability set them apart.
            </p>
            <div style={styles.quoteAuthor}>
              <div style={styles.authorDetails}>
                <strong>Dr. Sarah Chen</strong>
                <span>Director of Learning, Global Tech Corp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* APPROACH SECTION */}
      <div style={styles.approachSection}>
        <h2 style={styles.sectionTitle}>Our Implementation Approach</h2>
        <p style={styles.sectionSubtitle}>
          A structured partnership process designed for organizational success
        </p>
        
        <div style={styles.timeline}>
          {approachSteps.map((step, index) => (
            <div key={step.id} style={styles.timelineStep}>
              <div style={styles.stepNumber}>{step.number}</div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
              {index < approachSteps.length - 1 && (
                <div style={styles.timelineConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA - CONSISTENT WITH OTHER PAGES */}
      <div 
        style={{
          ...styles.ctaSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s'
        }}
      >
        <h3 style={styles.ctaTitle}>Ready to Discuss Your Learning Platform Needs?</h3>
        <p style={styles.ctaText}>
          Schedule a consultation with our solutions team to explore how we can support your organization's learning goals.
        </p>
        <div style={styles.ctaButtons}>
          <button 
            style={styles.primaryButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Schedule Consultation
          </button>
          <button 
            style={styles.secondaryButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}

// DATA
const valuesData = [
  {
    id: 1,
    title: "Adaptability First",
    description: "We build platforms that evolve with your organization's changing needs, avoiding rigid solutions that become obsolete.",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.08)",
    icon: "🔄"
  },
  {
    id: 2,
    title: "Evidence-Based Design",
    description: "Every feature is grounded in learning science and usability research, ensuring effectiveness and adoption.",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    icon: "📊"
  },
  {
    id: 3,
    title: "Partnership Mindset",
    description: "We see ourselves as long-term partners in your success, not just software vendors.",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    icon: "🤝"
  },
  {
    id: 4,
    title: "Enterprise-Grade Reliability",
    description: "Built with the security, scalability, and support that organizations require for mission-critical training.",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.08)",
    icon: "🛡️"
  }
];

const differentiators = [
  {
    title: "Customizable Learning Paths",
    description: "Create role-specific learning journeys that adapt to individual progress and organizational goals."
  },
  {
    title: "Enterprise Integration",
    description: "Seamless connection with existing HR systems, SSO, and corporate directories."
  },
  {
    title: "Dedicated Account Management",
    description: "Every client receives personalized support from a dedicated solutions expert."
  },
  {
    title: "Compliance-Ready",
    description: "Built-in tools for tracking certifications, compliance training, and audit requirements."
  }
];

const approachSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Analysis",
    description: "We conduct a thorough needs assessment to understand your organizational structure, learning goals, and technical requirements."
  },
  {
    id: 2,
    number: "02",
    title: "Solution Design",
    description: "Our team designs a customized platform blueprint aligned with your specific learning objectives and workflows."
  },
  {
    id: 3,
    number: "03",
    title: "Implementation",
    description: "Phased rollout with comprehensive training, data migration, and integration support."
  },
  {
    id: 4,
    number: "04",
    title: "Ongoing Partnership",
    description: "Continuous support, platform optimization, and strategic guidance as your needs evolve."
  }
];

// STYLES
const styles = {
 section: {
  width: "100%",
  padding: "60px 0 80px",
  backgroundColor: "#ffffff",
  boxSizing: "border-box",
},

  // MISSION SECTION
  missionContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
    marginBottom: "100px",
    padding: "40px 0",
  },
  missionText: {
    paddingRight: "20px",
  },
  missionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "24px",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },
  missionParagraph: {
    fontSize: "1.125rem",
    lineHeight: "1.7",
    color: "#475569",
    marginBottom: "40px",
  },
  missionStats: {
    display: "flex",
    gap: "40px",
    marginTop: "40px",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
  },
  statNumber: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#3b82f6",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#64748b",
    fontWeight: "500",
  },
  missionVisual: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  visualCard: {
    backgroundColor: "#f8fafc",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },
  visualIcon: {
    fontSize: "2rem",
    marginBottom: "16px",
  },
  visualTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "8px",
  },
  visualText: {
    fontSize: "1rem",
    color: "#64748b",
    lineHeight: "1.6",
  },

  // VALUES SECTION
  valuesSection: {
    marginBottom: "100px",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "16px",
    letterSpacing: "-0.01em",
  },
  sectionSubtitle: {
    textAlign: "center",
    fontSize: "1.125rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto 60px",
    lineHeight: "1.6",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  valueCard: {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    border: "1px solid #f1f5f9",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  valueIconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  valueIcon: {
    fontSize: "1.5rem",
  },
  valueTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "12px",
  },
  valueDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#64748b",
  },

  // DIFFERENTIATOR SECTION
differentiatorSection: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
  backgroundColor: "#f8fafc",
  padding: "60px",
  borderRadius: "16px",
  marginBottom: "100px",
},
differentiatorContent: {
  paddingRight: "20px",
},
differentiatorTitle: {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#1e293b",
  marginBottom: "32px",
},
differentiatorList: {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
},
differentiatorItem: {
  display: "flex",
  gap: "16px",
},
differentiatorCheck: {
  width: "24px",
  height: "24px",
  backgroundColor: "#10b981",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  flexShrink: "0",
  marginTop: "2px",
},
differentiatorItemTitle: {
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#1e293b",
  marginBottom: "4px",
},
differentiatorItemText: {
  fontSize: "1rem",
  color: "#64748b",
  lineHeight: "1.6",
},
differentiatorVisual: {
  display: "flex",
  alignItems: "center",
},
differentiatorQuote: {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "12px",
  borderLeft: "4px solid #3b82f6",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
},
quoteMark: {
  fontSize: "3rem",
  color: "#cbd5e1",
  fontFamily: "Georgia, serif",
  lineHeight: "1",
  marginBottom: "16px",
},
quoteText: {
  fontSize: "1.125rem",
  lineHeight: "1.7",
  color: "#475569",
  marginBottom: "24px",
  fontStyle: "italic",
},
quoteAuthor: {
  display: "flex",
  alignItems: "center",
},
authorDetails: {
  display: "flex",
  flexDirection: "column",
},
authorName: {  // CHANGED: New separate style for the strong tag
  color: "#1e293b",
  fontSize: "1rem",
  marginBottom: "4px",
  fontWeight: "600",
},
authorTitle: {  // CHANGED: New separate style for the span tag
  color: "#64748b",
  fontSize: "0.9rem",
},

  // APPROACH SECTION
  approachSection: {
    marginBottom: "100px",
  },
  timeline: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
  },
  timelineStep: {
    display: "flex",
    gap: "24px",
    marginBottom: "40px",
    position: "relative",
  },
  stepNumber: {
    width: "60px",
    height: "60px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    fontWeight: "600",
    flexShrink: "0",
  },
  stepContent: {
    paddingTop: "12px",
  },
  stepTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "8px",
  },
  stepDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#64748b",
  },
  timelineConnector: {
    position: "absolute",
    left: "30px",
    top: "60px",
    bottom: "-40px",
    width: "2px",
    backgroundColor: "#e2e8f0",
  },

  // CTA SECTION
  ctaSection: {
    textAlign: "center",
    padding: "60px 40px",
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "16px",
  },
  ctaText: {
    fontSize: "1.125rem",
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto 32px",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  secondaryButton: {
    backgroundColor: "white",
    color: "#475569",
    border: "1px solid #cbd5e1",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default About;