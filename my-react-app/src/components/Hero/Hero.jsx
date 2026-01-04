import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background doodles / educational outlines */}
      <div className={styles.shapeOne}>
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="rgba(251,191,36,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20" />
          <path d="M20 7v10" />
        </svg>
      </div>

      <div className={styles.shapeTwo}>
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2L12 22" />
          <path d="M6 12H18" />
        </svg>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Learn Skills <br />
          That Shape Your Future
        </h1>

        <p className={styles.subtitle}>
          SkillForge is a modern digital learning platform helping students and professionals
          gain real-world skills with interactive courses and projects.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Explore Courses</button>
          <button className={styles.secondaryBtn}>Get Started</button>
        </div>
      </div>
    </section>
  );
}

// const styles = {
//   hero: {
//     position: "relative",
//     height: "100vh",
//     background: "linear-gradient(135deg, #eef2ff, #dbeafe)", // light & inviting
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "0 20px",
//     overflow: "hidden",
//   },

//   /* Doodle shapes */
//   shapeOne: {
//     position: "absolute",
//     top: "-40px",
//     left: "-40px",
//     zIndex: 0,
//     filter: "blur(25px)",
//   },
//   shapeTwo: {
//     position: "absolute",
//     bottom: "-50px",
//     right: "-50px",
//     zIndex: 0,
//     filter: "blur(30px)",
//   },

//   content: {
//     maxWidth: "800px",
//     textAlign: "center",
//     color: "#1e293b",
//     position: "relative",
//     zIndex: 1,
//   },

//   title: {
//     fontSize: "3rem",
//     fontWeight: "bold",
//     marginBottom: "20px",
//     lineHeight: "1.2",
//     color: "#111827",
//   },

//   subtitle: {
//     fontSize: "1.2rem",
//     color: "#334155",
//     marginBottom: "40px",
//   },

//   buttons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },

//   primaryBtn: {
//     padding: "14px 30px",
//     fontSize: "1rem",
//     borderRadius: "8px",
//     border: "none",
//     backgroundColor: "#fbbf24",
//     color: "#111827",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "0.2s all",
//   },

//   secondaryBtn: {
//     padding: "14px 30px",
//     fontSize: "1rem",
//     borderRadius: "8px",
//     border: "1px solid #e2e8f0",
//     backgroundColor: "transparent",
//     color: "#1e293b",
//     cursor: "pointer",
//     transition: "0.2s all",
//   },
// };

export default Hero;
