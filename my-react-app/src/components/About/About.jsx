import React, { useState, useEffect } from "react";
import { MdLoop } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { FaRegHandshake, FaShieldAlt } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" style={styles.section}>
      <style>{missionAnimations}</style>
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
            <div 
            style={styles.visualCardGlow}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            ><div style={styles.visualIcon}><FiTarget></FiTarget></div>
            <h3 style={styles.visualTitle}>Purpose-Driven Design</h3>
            <p style={styles.visualText}>Every feature addresses real organizational learning challenges</p>
            </div>
          </div>
          <div style={styles.visualCard}>
            <div 
            style={styles.visualCardGlow}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            ><div style={styles.visualIcon}><CiSettings></CiSettings></div>
            <h3 style={styles.visualTitle}>Scalable Architecture</h3>
            <p style={styles.visualText}>Grow from 50 to 50,000 users without platform changes</p>
            </div>
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
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#6667AB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = '#6667AB';
            }}
          >
            Schedule Consultation
          </button>
          <button 
            style={styles.secondaryButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#210635';
              e.currentTarget.style.borderColor = '#6667AB';
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
    icon: <MdLoop></MdLoop>
  },
  {
    id: 2,
    title: "Evidence-Based Design",
    description: "Every feature is grounded in learning science and usability research, ensuring effectiveness and adoption.",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    icon: <BsFileBarGraph></BsFileBarGraph>
  },
  {
    id: 3,
    title: "Partnership Mindset",
    description: "We see ourselves as long-term partners in your success, not just software vendors.",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    icon: <FaRegHandshake></FaRegHandshake>
  },
  {
    id: 4,
    title: "Enterprise-Grade Reliability",
    description: "Built with the security, scalability, and support that organizations require for mission-critical training.",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.08)",
    icon: <FaShieldAlt></FaShieldAlt>
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

const missionAnimations = `
  @keyframes glowPulse {
    0% { box-shadow: 0 0 5px rgba(123, 51, 126, 0.2); border-color: rgba(245, 213, 224, 0.2); }
    50% { box-shadow: 0 0 20px rgba(123, 51, 126, 0.6); border-color: rgba(245, 213, 224, 0.5); }
    100% { box-shadow: 0 0 5px rgba(123, 51, 126, 0.2); border-color: rgba(245, 213, 224, 0.2); }
  }

  @keyframes textShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
`;

// STYLES
const styles = {
  section: {
    width: "100%",
    padding: "60px 0 80px",
    background: '#210635', 
    color: '#F5D5E0',      
    boxSizing: "border-box",
  },

  // MISSION SECTION
  missionContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    marginBottom: "100px",
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '40px',
    padding: '40px',
    background: 'rgba(102, 103, 171, 0.1)', 
    backdropFilter: 'blur(15px)',
    borderRadius: '24px',
    border: '1px solid rgba(245, 213, 224, 0.2)',
    animation: 'glowPulse 4s infinite ease-in-out',
  },
  missionText: {
    paddingRight: "60px",
  },
  missionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: '#F5D5E0', 
    marginBottom: '20px',
    animation: 'textShimmer 3s linear infinite',
  },

  missionParagraph: {
    fontSize: "1.125rem",
    lineHeight: "1.7",
    color: "#F5D5E0", 
    opacity: 0.8,
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
    alignItems: "flex-start", 
    flex: "1", 
  },
  statNumber: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#7B337E", 
    marginBottom: "4px",
  },
  statLabel: {
    fontSize: "0.85rem",
    color: "#F5D5E0", 
    opacity: 0.7,      
    fontWeight: "500",
    lineHeight: "1.2",
    whiteSpace: "nowrap", 
  },
  visualCard: {
    padding: "30px",
  },
  visualCardGlow: {
    background: 'linear-gradient(145deg, rgba(66, 13, 75, 0.8), rgba(33, 6, 53, 0.8))',
    boxShadow: 'inset 0 0 15px rgba(123, 51, 126, 0.3)',
    borderRadius: "16px",
    padding: "30px",
    transition: "transform 0.3s ease",
  },

  visualTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: '#F5D5E0',
    marginBottom: "8px",
  },

  visualText: {
    fontSize: "1rem",
    color: "#F5D5E0",
    opacity: 0.7,
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
    color: "#F5D5E0",
    marginBottom: "16px",
  },
  sectionSubtitle: {
    textAlign: "center",
    fontSize: "1.125rem",
    color: "#6667AB",
    maxWidth: "600px",
    margin: "0 auto 60px",
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  valueCard: {
    padding: '30px',
    background: 'rgba(66, 13, 75, 0.4)', 
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    borderBottom: '4px solid #7B337E', 
  },
  valueDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#F5D5E0",
    opacity: 0.8,
  },

// DIFFERENTIATOR SECTION
differentiatorSection: {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "60px",
  backgroundColor: "rgba(102, 103, 171, 0.05)", 
  padding: "60px",
  border: "1px solid rgba(245, 213, 224, 0.1)", 
  marginBottom: "100px",
  backdropFilter: "blur(10px)", 
},
differentiatorContent: {
  paddingRight: "20px",
},
differentiatorTitle: {
  fontSize: "2.25rem",
  fontWeight: "700",
  color: "#F5D5E0", 
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
  backgroundColor: "#7B337E",
  color: "#F5D5E0",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  flexShrink: "0",
  marginTop: "2px",
  boxShadow: "0 0 10px rgba(123, 51, 126, 0.5)", 
},
differentiatorItemTitle: {
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#F5D5E0", 
  marginBottom: "4px",
},
differentiatorItemText: {
  fontSize: "1rem",
  color: "#6667AB", 
  lineHeight: "1.6",
},
differentiatorVisual: {
  display: "flex",
  alignItems: "center",
},
differentiatorQuote: {
  backgroundColor: "rgba(66, 13, 75, 0.4)",
  padding: "40px",
  borderRadius: "20px",
  borderLeft: "4px solid #7B337E",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
},
quoteMark: {
  fontSize: "3rem",
  color: "rgba(102, 103, 171, 0.3)",
  fontFamily: "Georgia, serif",
  lineHeight: "1",
  marginBottom: "16px",
},
quoteText: {
  fontSize: "1.125rem",
  lineHeight: "1.7",
  color: "#F5D5E0", 
  marginBottom: "24px",
  fontStyle: "italic",
  opacity: 0.9,
},
quoteAuthor: {
  display: "flex",
  alignItems: "center",
},
authorDetails: {
  display: "flex",
  flexDirection: "column",
},
authorName: {  
  fontSize: "1rem",
  marginBottom: "4px",
  fontWeight: "600",
  color: "#F5D5E0", 
},
authorTitle: {  
  color: "#6667AB", 
},

// APPROACH SECTION
approachSection: {
  marginBottom: "10px",
},
timeline: {
  maxWidth: "800px",
  margin: "0 auto",
  position: "relative",
},
timelineStep: {
  display: "flex",
  gap: "24px",
  marginBottom: "60px", 
  position: "relative",
  zIndex: 1,
},
stepNumber: {
  width: "60px",
  height: "60px",
  backgroundColor: "#7B337E", 
  color: "#F5D5E0", 
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
  fontWeight: "700",
  flexShrink: "0",
  boxShadow: "0 0 15px rgba(123, 51, 126, 0.4)", 
  border: "2px solid rgba(245, 213, 224, 0.2)",
},
stepContent: {
  paddingTop: "12px",
},
stepTitle: {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#F5D5E0", 
  marginBottom: "12px",
},
stepDescription: {
  fontSize: "1.05rem",
  lineHeight: "1.7",
  color: "#6667AB", 
  maxWidth: "600px",
},
timelineConnector: {
  position: "absolute",
  left: "30px",
  top: "70px",
  bottom: "-50px",
  width: "2px",
  background: "linear-gradient(to bottom, #7B337E, rgba(102, 103, 171, 0.2))", 
  zIndex: 0,
},

// CTA SECTION
ctaSection: {
  textAlign: "center",
  padding: "60px 40px",
  backgroundColor: "rgba(66, 13, 75, 0.4)",
  border: "1px solid rgba(245, 213, 224, 0.1)",
},
ctaTitle: {
  fontSize: "2rem",
  fontWeight: "700",
  color: "#F5D5E0",
  marginBottom: "16px",
},
ctaText: {
  fontSize: "1rem",
  color: "white",
  maxWidth: "600px",
  margin: "0 auto 32px",
},
primaryButton: {
  backgroundColor: "#7B337E",
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
  backgroundColor: "transparent",
  color: "#6667AB",
  border: "1px solid #7B337E",
  padding: "14px 32px",
  fontSize: "1rem",
  fontWeight: "600",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
},
};

export default About;