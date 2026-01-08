import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for mobile responsiveness
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Navigation items matching approved user flow
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Success Stories", id: "success-stories" },
    { label: "What We Build", id: "what-we-build" },
    { label: "Pricing", id: "pricing" },
    { label: "About Us", id: "about" },
    { label: "Founders", id: "founders" }
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  // Handle contact hover (non-clickable per your request)
  const handleContactHover = (isHovering) => {
    const contactElement = document.querySelector(`[data-contact="true"]`);
    if (contactElement) {
      contactElement.style.color = isHovering ? "#7B337E" : "#210635";
      contactElement.style.transform = isHovering ? "translateY(-1px)" : "translateY(0)";
    }
  };

  return (
    <nav style={styles.nav}>
      {/* Left: Logo */}
      <div 
        style={styles.logoContainer}
        onClick={() => scrollToSection("home")}
      >
        <h2 style={styles.logo}>LuminaSystems</h2>
        <span style={styles.logoSubtitle}>EdTech Solutions</span>
      </div>

      {/* Center: Desktop Navigation Links */}
      {!isMobile && (
        <ul style={styles.menu}>
          {navItems.map((item, index) => (
            <li
              key={index}
              style={styles.menuItem}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.fontWeight = "600";
                const line = e.currentTarget.querySelector(".underline");
                if (line) line.style.width = "100%";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.fontWeight = "500";
                const line = e.currentTarget.querySelector(".underline");
                if (line) line.style.width = "0%";
              }}
            >
              {item.label}
              <span className="underline" style={styles.underline}></span>
            </li>
          ))}
        </ul>
      )}

      {/* Right: Contact Info */}
      {!isMobile && (
        <div style={styles.rightSection}>
          <div
            data-contact="true"
            style={styles.contactText}
            onMouseEnter={() => handleContactHover(true)}
            onMouseLeave={() => handleContactHover(false)}
          >
            contact : luminasystems@gmail.com
          </div>
        </div>
      )}

      {/* Mobile: Contact Icon & Hamburger */}
      {isMobile && (
        <div style={styles.mobileRightSection}>
          {/* Contact Icon for Mobile */}
          <div
            data-contact="true"
            style={styles.mobileContact}
            onMouseEnter={() => handleContactHover(true)}
            onMouseLeave={() => handleContactHover(false)}
            title="contact@luminasystems.edu"
          >
            
          </div>
          
          {/* Hamburger Menu Button */}
          <button
            style={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              opacity: isMenuOpen ? 0 : 1
            }}></div>
            <div style={{
              ...styles.hamburgerLine,
              transform: isMenuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none"
            }}></div>
          </button>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {navItems.map((item, index) => (
              <div
                key={index}
                style={styles.mobileMenuItem}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 5%",
    backgroundColor: "#6667AB",
    color: "#210635",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxSizing: "border-box",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    minHeight: "80px",
    '@media (max-width: 768px)': {
      padding: "15px 5%",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    alignItems: "flex-start",
    minWidth: "180px",
  },
  logo: {
    margin: 0,
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#210635",
    lineHeight: "1.2",
    '@media (max-width: 768px)': {
      fontSize: "1.5rem",
    },
  },
  logoSubtitle: {
    fontSize: "0.85rem",
    color: "#210635",
    fontWeight: "500",
    letterSpacing: "0.5px",
    marginTop: "2px",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "32px",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: "center",
    '@media (max-width: 1024px)': {
      gap: "24px",
    },
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.3s ease",
    color: "#210635",
    fontSize: "1rem",
    padding: "8px 4px",
    whiteSpace: "nowrap",
  },
  underline: {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -2,
    height: "2px",
    width: "0%",
    backgroundColor: "#7B337E",
    transition: "width 0.3s ease",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: "220px",
  },
  contactText: {
    color: "#210635",
    fontSize: "0.95rem",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "all 0.3s ease",
    cursor: "default",
    borderBottom: "1px solid transparent",
    whiteSpace: "nowrap",
    '@media (max-width: 1024px)': {
      fontSize: "0.9rem",
    },
  },
  // Mobile Styles
  mobileRightSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  hamburger: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    width: "40px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
  },
  hamburgerLine: {
    width: "24px",
    height: "2px",
    backgroundColor: "#002B8C",
    transition: "all 0.3s ease",
    borderRadius: "2px",
  },
  mobileMenu: {
    position: "fixed",
    top: "80px",
    left: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 999,
    animation: "slideDown 0.3s ease",
  },
  mobileMenuContent: {
    padding: "20px 5%",
    display: "flex",
    flexDirection: "column",
    gap: "0",
  },
  mobileMenuItem: {
    padding: "16px 0",
    color: "#002B8C",
    fontSize: "1.1rem",
    fontWeight: "500",
    borderBottom: "1px solid #f1f5f9",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  mobileContactFull: {
    marginTop: "24px",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    textAlign: "center",
  },
  contactEmail: {
    color: "#210635",
    fontWeight: "600",
    fontSize: "1rem",
    marginTop: "8px",
    marginBottom: "4px",
  },
  contactNote: {
    fontSize: "0.8rem",
    color: "#64748b",
    fontStyle: "italic",
  },
};

// Add CSS animation for mobile menu
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`, styleSheet.cssRules.length);

export default Navbar;