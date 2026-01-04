import React from "react";
/*import styles from "./Navbar.module.css"*/

function Navbar() {
  const menuItems = ["Home", "About Us", "Explore", "Pricing", "Team", "Contact"];

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <h2 style={styles.logo}>SkillForge</h2>

      {/* Menu items */}
      <ul style={styles.menu}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={styles.menuItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.fontWeight = "bold";
              const line = e.currentTarget.querySelector(".underline");
              line.style.width = "100%";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.fontWeight = "500";
              const line = e.currentTarget.querySelector(".underline");
              line.style.width = "0%";
            }}
          >
            {item}
            <span className="underline" style={styles.underline}></span>
          </li>
        ))}
      </ul>

      {/* Right section: search + CTA */}
      <div style={styles.rightSection}>
        <input type="text" placeholder="Search..." style={styles.searchBar} />
        <button style={styles.ctaButton}>Get Started</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 60px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    boxSizing: "border-box",
  },
  logo: {
    margin: 0,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "40px",
    margin: "0",
    padding: 0,
    flexGrow: 1,
    justifyContent: "center", // centers menu between logo and right section
  },
  menuItem: {
    position: "relative",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.3s ease",
  },
  underline: {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -4,
    height: "3px",
    width: "0%",
    backgroundColor: "#fbbf24", // yellow line
    transition: "width 0.3s ease",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  searchBar: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
  },
  ctaButton: {
    padding: "10px 24px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#fbbf24",
    color: "#111827",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s all",
  },
};

export default Navbar;
