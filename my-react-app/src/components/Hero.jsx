function Hero() {
  return (
    <section style={styles.hero}>
      {/* Background shapes */}
      <div style={styles.shapeOne}></div>
      <div style={styles.shapeTwo}></div>

      <div style={styles.content}>
        <h1 style={styles.title}>
              Learn Skills 
          That Shape Your Future
        </h1>

        <p style={styles.subtitle}>
          SkillForge is a modern digital learning platform designed to help
          students and professionals build real-world skills using technology.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Explore Courses</button>
          <button style={styles.secondaryBtn}>Get Started</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    background: "linear-gradient(135deg, #1e3a8a, #312e81)", // lighter than navbar
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
    overflow: "hidden",
  },

  /* Subtle background shapes */
  shapeOne: {
    position: "absolute",
    width: "320px",
    height: "320px",
    background: "rgba(99, 102, 241, 0.25)",
    borderRadius: "50%",
    top: "-80px",
    left: "-80px",
    filter: "blur(80px)",
  },
  shapeTwo: {
    position: "absolute",
    width: "280px",
    height: "280px",
    background: "rgba(56, 189, 248, 0.18)",
    borderRadius: "50%",
    bottom: "-60px",
    right: "-60px",
    filter: "blur(90px)",
  },

  content: {
    maxWidth: "800px",
    textAlign: "center",
    color: "#ffffff",
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontSize: "3.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "#e0e7ff",
    marginBottom: "40px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 30px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#fbbf24",
    color: "#111827",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "14px 30px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.6)",
    backgroundColor: "transparent",
    color: "#ffffff",
    cursor: "pointer",
  },
};

export default Hero;
