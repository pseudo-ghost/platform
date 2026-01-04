import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Company Info */}
        <div className={styles.column}>
          <h2 className={styles.logo}>SkillForge</h2>
          <p className={styles.description}>
            SkillForge is a technology-driven learning platform that helps students
            and professionals develop in-demand skills through modern digital
            solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            <li>About Us</li>
            <li>Explore Courses</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services / Features */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Our Platform</h4>
          <ul className={styles.list}>
            <li>Online Courses</li>
            <li>Skill Development</li>
            <li>Progress Tracking</li>
            <li>Certificates</li>
            <li>AI Learning Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact</h4>
          <p className={styles.contact}>📧 info@skillforge.com</p>
          <p className={styles.contact}>📍 Malaysia</p>

          {/* Social Icons */}
          <div className={styles.socials}>
            <span className={styles.icon}>🌐</span>
            <span className={styles.icon}>🐦</span>
            <span className={styles.icon}>📸</span>
            <span className={styles.icon}>💼</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        © 2026 SkillForge. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

// const styles = {
//   footer: {
//     backgroundColor: "#0f172a",
//     color: "#e5e7eb",
//     padding: "50px 20px 20px",
//     marginTop: "80px",
//   },
//   container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "40px",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   column: {
//     lineHeight: "1.7",
//   },
//   logo: {
//     fontSize: "1.8rem",
//     fontWeight: "bold",
//     marginBottom: "10px",
//     color: "#ffffff",
//   },
//   description: {
//     fontSize: "0.95rem",
//     color: "#cbd5e1",
//   },
//   heading: {
//     fontSize: "1.1rem",
//     marginBottom: "10px",
//     color: "#ffffff",
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     cursor: "pointer",
//   },
//   contact: {
//     fontSize: "0.95rem",
//     color: "#cbd5e1",
//   },
//   socials: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "10px",
//     fontSize: "1.2rem",
//     cursor: "pointer",
//   },
//   icon: {
//     transition: "transform 0.2s",
//   },
//   bottom: {
//     textAlign: "center",
//     marginTop: "40px",
//     paddingTop: "15px",
//     borderTop: "1px solid #334155",
//     fontSize: "0.85rem",
//     color: "#9ca3af",
//   },
// };


