import React, { useState, useEffect } from "react";

function WhatWeBuild() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id= "what-we-build" style={styles.section}>
      {/* HERO SECTION */}
      <div 
        style={{
          ...styles.hero,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <h1 style={styles.heroTitle}>
          Enterprise Learning Platforms <span style={styles.highlight}>Built for Scale</span>
        </h1>
        <p style={styles.heroSubtitle}>
          We design and develop custom learning solutions that align with your organizational goals, 
          integrate with your systems, and deliver measurable learning outcomes.
        </p>
      </div>

      {/* SOLUTIONS SHOWCASE */}
      <div style={styles.solutionsSection}>
        <h2 style={styles.sectionTitle}>Our Core Solutions</h2>
        <p style={styles.sectionSubtitle}>
          Tailored platforms designed to solve specific organizational learning challenges
        </p>
        
        <div style={styles.solutionsGrid}>
          {solutionsData.map((solution, index) => (
            <div
              key={solution.id}
              style={{
                ...styles.solutionCard,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.1 + index * 0.1}s, transform 0.8s ease ${0.1 + index * 0.1}s`
              }}
            >
              <div style={{...styles.solutionIcon, backgroundColor: solution.bgColor}}>
                <span style={styles.solutionIconSymbol}>{solution.icon}</span>
              </div>
              <h3 style={styles.solutionTitle}>{solution.title}</h3>
              <p style={styles.solutionDescription}>{solution.description}</p>
              <div style={styles.solutionFeatures}>
                {solution.features.map((feature, idx) => (
                  <span key={idx} style={styles.featureTag}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TECHNICAL CAPABILITIES */}
      <div 
        style={{
          ...styles.capabilitiesSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
        }}
      >
        <h2 style={styles.sectionTitle}>Technical Capabilities</h2>
        <p style={styles.sectionSubtitle}>
          Built on enterprise-grade technology with compliance and scalability at the core
        </p>
        
        <div style={styles.capabilitiesGrid}>
          {capabilitiesData.map((category, index) => (
            <div key={index} style={styles.capabilityCategory}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <ul style={styles.categoryList}>
                {category.items.map((item, idx) => (
                  <li key={idx} style={styles.categoryItem}>
                    <div style={styles.checkIcon}>✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT EXAMPLES */}
      <div style={styles.examplesSection}>
        <h2 style={styles.sectionTitle}>Platform Examples</h2>
        <p style={styles.sectionSubtitle}>
          Types of learning environments we've built for organizations
        </p>
        
        <div style={styles.examplesGrid}>
          {examplesData.map((example, index) => (
            <div
              key={example.id}
              style={{
                ...styles.exampleCard,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.8s ease ${0.7 + index * 0.1}s, transform 0.8s ease ${0.7 + index * 0.1}s`
              }}
            >
              <div style={styles.exampleHeader}>
                <div style={{...styles.exampleType, backgroundColor: example.typeColor}}>
                  {example.type}
                </div>
                <div style={styles.exampleScale}>{example.scale}</div>
              </div>
              <h3 style={styles.exampleTitle}>{example.title}</h3>
              <p style={styles.exampleDescription}>{example.description}</p>
              <div style={styles.exampleFeatures}>
                {example.keyFeatures.map((feature, idx) => (
                  <div key={idx} style={styles.exampleFeature}>
                    <span style={styles.featureDot}>•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// DATA
const solutionsData = [
  {
    id: 1,
    title: "White-Label Learning Management Systems",
    description: "Fully branded platforms that reflect your organization's identity while providing comprehensive course management, tracking, and reporting.",
    icon: "🏷️",
    bgColor: "rgba(59, 130, 246, 0.1)",
    features: ["Custom Branding", "User Management", "Progress Tracking", "Certificate Generation"]
  },
  {
    id: 2,
    title: "AI-Powered Training Portals",
    description: "Intelligent learning environments that adapt to individual progress, recommend content, and provide personalized learning paths.",
    icon: "🤖",
    bgColor: "rgba(16, 185, 129, 0.1)",
    features: ["Adaptive Learning", "Content Recommendations", "Skill Gap Analysis", "Predictive Analytics"]
  },
  {
    id: 3,
    title: "Enterprise Integration Solutions",
    description: "Seamless connections with your existing HR systems, SSO providers, CRM platforms, and corporate directories.",
    icon: "🔗",
    bgColor: "rgba(139, 92, 246, 0.1)",
    features: ["SSO Integration", "API Connections", "HRIS Sync", "Data Exchange"]
  },
  {
    id: 4,
    title: "Analytics & Reporting Suites",
    description: "Comprehensive dashboards and reporting tools that transform learning data into actionable business insights.",
    icon: "📊",
    bgColor: "rgba(245, 158, 11, 0.1)",
    features: ["Real-time Dashboards", "ROI Analytics", "Compliance Reports", "Custom Metrics"]
  }
];

const capabilitiesData = [
  {
    category: "Compliance Standards",
    items: ["SCORM 1.2 & 2004", "xAPI (Tin Can API)", "AICC", "LTI 1.3", "WCAG 2.1 AA Accessibility"]
  },
  {
    category: "Integration Capabilities",
    items: ["SAML 2.0 / OIDC SSO", "REST & GraphQL APIs", "Webhook Support", "HRIS Integration (Workday, SAP)", "CRM Connections"]
  },
  {
    category: "Platform Features",
    items: ["Mobile-Responsive Design", "Multi-language Support", "Offline Access", "Gamification Engine", "Social Learning Tools"]
  },
  {
    category: "Hosting & Security",
    items: ["Cloud & On-Premise Options", "SOC2 Type II Compliance", "GDPR & Data Privacy", "Automated Backups", "Disaster Recovery"]
  }
];

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your organizational needs, learning objectives, and technical requirements.",
    duration: "2-3 weeks"
  },
  {
    id: 2,
    number: "02",
    title: "Design & Architecture",
    description: "Platform blueprint creation, UX/UI design, and technical architecture planning.",
    duration: "3-4 weeks"
  },
  {
    id: 3,
    number: "03",
    title: "Development & Integration",
    description: "Agile development sprints with regular demos and feedback integration.",
    duration: "8-12 weeks"
  },
  {
    id: 4,
    number: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing including user acceptance, security, and performance testing.",
    duration: "2-3 weeks"
  },
  {
    id: 5,
    number: "05",
    title: "Launch & Deployment",
    description: "Managed deployment, data migration, and user training for successful adoption.",
    duration: "1-2 weeks"
  },
  {
    id: 6,
    number: "06",
    title: "Ongoing Support",
    description: "Continuous platform optimization, feature updates, and strategic partnership.",
    duration: "Ongoing"
  }
];

const differentiatorsData = [
  {
    id: 1,
    title: "Adaptable Architecture",
    description: "Platforms designed to evolve with your organization's changing needs, avoiding costly rebuilds.",
    icon: "🔄",
    bgColor: "rgba(59, 130, 246, 0.08)"
  },
  {
    id: 2,
    title: "Evidence-Based Design",
    description: "Learning experiences grounded in pedagogical research and usability testing.",
    icon: "📚",
    bgColor: "rgba(16, 185, 129, 0.08)"
  },
  {
    id: 3,
    title: "Enterprise Partnership",
    description: "We function as an extension of your team, not just a vendor providing software.",
    icon: "🤝",
    bgColor: "rgba(139, 92, 246, 0.08)"
  },
  {
    id: 4,
    title: "Scalable Infrastructure",
    description: "Platforms that perform reliably whether you have 50 or 50,000 active learners.",
    icon: "⚡",
    bgColor: "rgba(245, 158, 11, 0.08)"
  }
];

const examplesData = [
  {
    id: 1,
    type: "Corporate Training",
    typeColor: "rgba(59, 130, 246, 0.1)",
    scale: "15,000+ users",
    title: "Global Employee Onboarding Platform",
    description: "Custom onboarding solution for a multinational technology company with offices in 12 countries.",
    keyFeatures: [
      "Multi-language support (8 languages)",
      "Region-specific compliance training",
      "Integration with HRIS for auto-enrollment",
      "Progress tracking across departments"
    ]
  },
  {
    id: 2,
    type: "Higher Education",
    typeColor: "rgba(16, 185, 129, 0.1)",
    scale: "25,000+ students",
    title: "University Learning Ecosystem",
    description: "Comprehensive LMS for a university system serving multiple campuses and online programs.",
    keyFeatures: [
      "Faculty course authoring tools",
      "Research collaboration spaces",
      "Plagiarism detection integration",
      "Alumni continuing education portal"
    ]
  },
  {
    id: 3,
    type: "Healthcare",
    typeColor: "rgba(239, 68, 68, 0.1)",
    scale: "8,000+ medical staff",
    title: "Healthcare Compliance & Certification Portal",
    description: "Specialized platform for mandatory training, certification tracking, and audit readiness.",
    keyFeatures: [
      "Automated license renewal alerts",
      "Audit trail for compliance reporting",
      "Mobile-friendly for clinical staff",
      "Integration with medical credentialing systems"
    ]
  }
];

// STYLES
const styles = {
  section: {
    width: "100%",
    padding: "0px 20px 80px",
    backgroundColor: "#210635", 
    boxSizing: "border-box",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  // HERO
  hero: {
    textAlign: "center",
    padding: "20px 0",
  },
  heroTitle: {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#F5D5E0", 
    marginBottom: "24px",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },
  highlight: {
    color: "#7B337E", 
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.7",
    color: "#6667AB", 
    maxWidth: "800px",
    margin: "0 auto",
  },

  // SECTION COMMON
  sectionTitle: {
    textAlign: "center",
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#F5D5E0", 
    marginBottom: "16px",
    letterSpacing: "-0.01em",
  },
  sectionSubtitle: {
    textAlign: "center",
    fontSize: "1.125rem",
    color: "#6667AB", 
    maxWidth: "700px",
    margin: "0 auto 60px",
    lineHeight: "1.6",
  },

  // SOLUTIONS
  solutionsSection: {
    marginBottom: "100px",
  },
  solutionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  solutionCard: {
    backgroundColor: "rgba(66, 13, 75, 0.4)", 
    backdropFilter: "blur(12px)", 
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid rgba(245, 213, 224, 0.1)", 
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  solutionIcon: {
    width: "64px",
    height: "64px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    backgroundColor: "rgba(123, 51, 126, 0.2)", 
  },
  solutionIconSymbol: {
    fontSize: "1.8rem",
    color: "#F5D5E0", 
  },
  solutionTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#F5D5E0", 
    marginBottom: "12px",
    lineHeight: "1.3",
  },
  solutionDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#6667AB", 
    marginBottom: "20px",
    minHeight: "72px",
    opacity: 0.9,
  },
  solutionFeatures: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "16px",
  },
  featureTag: {
    backgroundColor: "rgba(102, 103, 171, 0.2)", 
    color: "#F5D5E0", 
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
    border: "1px solid rgba(245, 213, 224, 0.1)",
  },

  // CAPABILITIES
capabilitiesSection: {
  backgroundColor: "#210635", // MOON Deep Navy
  padding: "60px 40px",
  borderTop: "1px solid rgba(245, 213, 224, 0.1)", // Subtle divider
},
capabilitiesGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "40px",
},
capabilityCategory: {
  marginBottom: "20px",
},
categoryTitle: {
  fontSize: "1.125rem",
  fontWeight: "600",
  color: "#F5D5E0", // Soft Pink heading
  marginBottom: "20px",
  paddingBottom: "12px",
  borderBottom: "2px solid #7B337E", // Vibrant Purple underline
},
categoryList: {
  listStyle: "none",
  padding: "0",
  margin: "0",
},
categoryItem: {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "14px",
  fontSize: "1rem",
  color: "#6667AB", // Blue-Purple list items
  lineHeight: "1.5",
},
checkIcon: {
  color: "#7B337E", // Vibrant Purple checkmark
  fontWeight: "600",
  flexShrink: "0",
  marginTop: "2px",
},

  // PROCESS
  processSection: {
   
  },
  processTimeline: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
  },
  processStep: {
    display: "flex",
    gap: "24px",
    marginBottom: "40px",
    position: "relative",
  },
  stepNumberContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    zIndex: "1",
  },
  stepConnector: {
    position: "absolute",
    top: "60px",
    bottom: "-40px",
    width: "2px",
    backgroundColor: "#e2e8f0",
  },
  stepContent: {
    paddingTop: "12px",
    flex: "1",
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
    marginBottom: "12px",
  },
  stepDuration: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    fontWeight: "500",
  },
  durationLabel: {
    color: "#64748b",
  },

  // DIFFERENTIATORS
  differentiatorsSection: {
    backgroundColor: "#ffffff",
    padding: "60px 40px",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
  },
  differentiatorsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  differentiatorCard: {
    textAlign: "center",
    padding: "32px 24px",
  },
  differentiatorIcon: {
    width: "72px",
    height: "72px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    fontSize: "1.8rem",
  },
  differentiatorTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "12px",
  },
  differentiatorDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#64748b",
  },

// EXAMPLES SECTION
examplesSection: {
  padding: "40px 20px",
},
examplesGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "30px",
},
exampleCard: {
  backgroundColor: "rgba(66, 13, 75, 0.4)", 
  backdropFilter: "blur(12px)", 
  WebkitBackdropFilter: "blur(12px)",
  padding: "32px",
  borderRadius: "24px",
  border: "1px solid rgba(245, 213, 224, 0.1)", 
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.3s ease",
},
exampleHeader: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
},
exampleType: {
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "0.85rem",
  fontWeight: "600",
  backgroundColor: "rgba(102, 103, 171, 0.2)", 
  color: "#F5D5E0", 
},
exampleScale: {
  fontSize: "0.85rem",
  color: "#6667AB", 
  fontWeight: "600",
},
exampleTitle: {
  fontSize: "1.5rem",
  fontWeight: "700",
  color: "#F5D5E0", 
  marginBottom: "12px",
},
exampleDescription: {
  fontSize: "1rem",
  lineHeight: "1.6",
  color: "#6667AB", 
  marginBottom: "20px",
  opacity: 0.9,
},
exampleFeatures: {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
},
exampleFeature: {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  fontSize: "0.95rem",
  color: "#F5D5E0", 
  lineHeight: "1.5",
  opacity: 0.8,
},
featureDot: {
  color: "#7B337E", 
  fontWeight: "900",
  flexShrink: "0",
  marginTop: "2px",
},
  // CTA
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
    maxWidth: "700px",
    margin: "0 auto 32px",
    lineHeight: "1.6",
  },
  ctaButtons: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
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

export default WhatWeBuild;