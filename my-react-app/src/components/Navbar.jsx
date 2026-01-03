import React from 'react';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SkillForge</h2>

      <ul style={styles.menu}>
        <li>About Us</li>
        <li>Explore</li>
        <li>Courses</li>
        <li>Pricing</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>

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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#0f172a",    

    color: "#ffffff",
    flexWrap: "wrap",
  },
  logo: { margin: 0, fontSize: "1.8rem", fontWeight: "bold" },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
  rightSection: { display: "flex", alignItems: "center", gap: "12px" },
  searchBar: { padding: "6px 12px", borderRadius: "6px", border: "none" },
  ctaButton: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#fbbf24",
    color: "#111827",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Navbar;
