import React from "react";

import { FaInstagram, FaLinkedin, FaWrench } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { FaGears } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { IoPin } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      {/* Top border accent */}
      <div style={styles.topBorder}></div>
      
      <div style={styles.container}>
        {/* Company Info - Wider column for description */}
        <div style={styles.column}>
          <div style={styles.logoContainer}>
            <span style={styles.logoIcon}>🎓</span>
            <h2>LuminaSystems</h2> 
          </div>
          <p style={styles.description}>
            A technology-driven learning platform that helps students and 
            professionals develop in-demand skills through modern digital solutions.
          </p>
          
          {/* Newsletter Signup */}
          <div style={styles.newsletter}>
            <p style={styles.newsletterLabel}>Stay updated with learning insights</p>
            <div style={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={styles.newsletterInput}
                aria-label="Email for newsletter subscription"
              />
              <button style={styles.newsletterButton}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list} role="list">
            <li style={styles.listItem}>
              <a href="#about" style={styles.link} aria-label="About Us">About Us</a>
            </li>
            <li style={styles.listItem}>
              <a href="#features" style={styles.link} aria-label="Features ">Features</a>
            </li>
            <li style={styles.listItem}>
              <a href="#pricing" style={styles.link} aria-label="View pricing plans">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Platform Features */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Our Platform</h4>
          <ul style={styles.list} role="list">
            <li style={styles.listItem}>
              <span style={styles.featureIcon}><FaGears></FaGears></span>
              <span>Learning Management Systems</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.featureIcon}><GoGraph></GoGraph></span>
              <span>Progress Tracking</span>
            </li>
            <li style={styles.listItem}>
              <span style={styles.featureIcon}><GiArtificialIntelligence></GiArtificialIntelligence></span>
              <span>AI Learning Support</span>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Contact</h4>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}><MdEmail></MdEmail></span>
              <a 
                href="mailto:info@luminasystems.com" 
                style={styles.contactLink}
                aria-label="Email LuminaSystems at info@luminasystems.com"
              >
                info@luminasystems.com
              </a>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}><IoPin></IoPin></span>
              <span>Malaysia</span>
            </div>
          </div>
          
          {/* Social Icons with labels */}
          <div style={styles.socialSection}>
            <p style={styles.socialHeading}>Follow Us</p>
            <div style={styles.socials} role="list">
              <a 
                href="https://luminasystems.com" 
                style={styles.socialLink}
                aria-label="Visit LuminaSystems website"
              >
                <span style={styles.socialIcon}><CiGlobe></CiGlobe></span>
                <span style={styles.socialLabel}>Website</span>
              </a>
              <a 
                href="https://twitter.com/luminasystems" 
                style={styles.socialLink}
                aria-label="Follow LuminaSystems on Twitter"
              >
                <span style={styles.socialIcon}><RiTwitterXFill></RiTwitterXFill></span>
                <span style={styles.socialLabel}>Twitter</span>
              </a>
              <a 
                href="https://instagram.com/luminasystems" 
                style={styles.socialLink}
                aria-label="Follow LuminaSystemsLuminaSystems on Instagram"
              >
                <span style={styles.socialIcon}><FaInstagram></FaInstagram></span>
                <span style={styles.socialLabel}>Instagram</span>
              </a>
              <a 
                href="https://linkedin.com/company/luminasystems" 
                style={styles.socialLink}
                aria-label="Follow LuminaSystems on LinkedIn"
              >
                <span style={styles.socialIcon}><FaLinkedin></FaLinkedin></span>
                <span style={styles.socialLabel}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Links */}
      <div style={styles.bottomContainer}>
        <div style={styles.bottomContent}>
          <div style={styles.copyright}>
            © {currentYear} LuminaSystems. All rights reserved.
          </div>
          <div style={styles.bottomLinks}>
            <a href="/privacy" style={styles.bottomLink} aria-label="Privacy Policy">Privacy Policy</a>
            <span style={styles.divider}>•</span>
            <a href="/terms" style={styles.bottomLink} aria-label="Terms of Service">Terms of Service</a>
            <span style={styles.divider}>•</span>
            <a href="/cookies" style={styles.bottomLink} aria-label="Cookie Policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#210635",
    color: "#e5e7eb",
    padding: "0",
    marginTop: "clamp(3rem, 6vw, 6rem)",
    position: "relative",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  
  // Top border accent
  topBorder: {
    height: "0.25rem",
    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
    width: "100%",
  },
  
  // Main content container
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: "clamp(2rem, 4vw, 3rem)",
    maxWidth: "min(100%, 1200px)",
    margin: "0 auto",
    padding: "clamp(3rem, 5vw, 4rem) clamp(1.5rem, 4vw, 2rem)",
  },
  
  // Columns
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  
  // Brand section
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.5rem",
  },
  logoIcon: {
    fontSize: "2rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "white",
    width: "3rem",
    height: "3rem",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
  },
  logo: {
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
    fontWeight: "800",
    color: "#ffffff",
    margin: "0",
    lineHeight: "1.2",
  },
  description: {
    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
    color: "#cbd5e1",
    lineHeight: "1.6",
    margin: "0",
  },
  
  // Newsletter
  newsletter: {
    marginTop: "1rem",
  },
  newsletterLabel: {
    fontSize: "0.875rem",
    color: "#94a3b8",
    marginBottom: "0.75rem",
    fontWeight: "500",
  },
  newsletterForm: {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
  },
  newsletterInput: {
    flex: "1",
    minWidth: "12rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    borderRadius: "0.5rem",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#f1f5f9",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  newsletterInputFocus: {
    borderColor: "#3b82f6",
  },
  newsletterButton: {
    padding: "0.75rem 1.25rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    borderRadius: "0.5rem",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    cursor: "pointer",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
  newsletterButtonHover: {
    backgroundColor: "#2563eb",
    transform: "translateY(-1px)",
  },
  
  // Headings
  heading: {
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
    fontWeight: "600",
    color: "#ffffff",
    margin: "0 0 1rem 0",
    letterSpacing: "0.025em",
  },
  
  // Lists
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
    color: "#cbd5e1",
    transition: "color 0.2s ease",
  },
  
  // Links
  link: {
    color: "#cbd5e1",
    textDecoration: "none",
    transition: "color 0.2s ease",
    cursor: "pointer",
    padding: "0.25rem 0",
    display: "inline-block",
  },
  linkHover: {
    color: "#3b82f6",
  },
  
  // Feature icons
  featureIcon: {
    fontSize: "1rem",
    width: "1.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
  },
  
  // Contact section
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "clamp(0.875rem, 1.5vw, 0.9375rem)",
    color: "#cbd5e1",
  },
  contactIcon: {
    fontSize: "1rem",
    width: "1.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
  },
  contactLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    transition: "color 0.2s ease",
  },
  contactLinkHover: {
    color: "#3b82f6",
  },
  
  // Social section
  socialSection: {
    marginTop: "1rem",
  },
  socialHeading: {
    fontSize: "0.875rem",
    color: "#94a3b8",
    marginBottom: "0.75rem",
    fontWeight: "500",
  },
  socials: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "0.75rem",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "0.875rem",
    transition: "color 0.2s ease",
    padding: "0.5rem",
    borderRadius: "0.375rem",
  },
  socialLinkHover: {
    color: "#3b82f6",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
  },
  socialIcon: {
    fontSize: "1rem",
  },
  socialLabel: {
    fontSize: "0.8125rem",
  },
  
  // Bottom section
  bottomContainer: {
    borderTop: "1px solid #210635",
    padding: "clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 4vw, 2rem)",
    backgroundColor: "rgba(15, 23, 42, 0.9)",
  },
  bottomContent: {
    maxWidth: "min(100%, 1200px)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  '@media (min-width: 640px)': {
    bottomContent: {
      flexDirection: "row",
    },
  },
  copyright: {
    fontSize: "0.8125rem",
    color: "#94a3b8",
    textAlign: "center",
  },
  '@media (min-width: 640px)': {
    copyright: {
      textAlign: "left",
    },
  },
  bottomLinks: {
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  '@media (min-width: 640px)': {
    bottomLinks: {
      justifyContent: "flex-end",
    },
  },
  bottomLink: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.8125rem",
    transition: "color 0.2s ease",
  },
  bottomLinkHover: {
    color: "#cbd5e1",
  },
  divider: {
    color: "#475569",
    fontSize: "0.75rem",
  },
};

// Add hover effects
const addHoverEffects = () => {
  const style = document.createElement('style');
  style.textContent = `
    @media (hover: hover) {
      .footer-link:hover {
        color: #3b82f6;
      }
      .footer-social-link:hover {
        color: #3b82f6;
        background-color: rgba(59, 130, 246, 0.1);
      }
      .footer-newsletter-input:focus {
        border-color: #3b82f6;
      }
      .footer-newsletter-button:hover {
        background-color: #2563eb;
        transform: translateY(-1px);
      }
      .footer-bottom-link:hover {
        color: #cbd5e1;
      }
    }
    
    /* Focus styles for accessibility */
    .footer-link:focus-visible,
    .footer-social-link:focus-visible,
    .footer-newsletter-input:focus-visible,
    .footer-newsletter-button:focus-visible,
    .footer-bottom-link:focus-visible {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
      border-radius: 2px;
    }
    
    /* Reduced motion preference */
    @media (prefers-reduced-motion: reduce) {
      * {
        transition: none !important;
      }
    }
    
    /* High contrast mode */
    @media (prefers-contrast: high) {
      .footer-top-border {
        height: 3px;
      }
      .footer-bottom-container {
        border-top: 2px solid currentColor;
      }
    }
  `;
  document.head.appendChild(style);
};

// Add classes for hover effects
if (typeof document !== 'undefined') {
  addHoverEffects();
}

export default Footer;