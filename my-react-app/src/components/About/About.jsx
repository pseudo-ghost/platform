import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.aboutSF}>About SkillForge</h2>
      <p className={styles.aboutSFdesc}>
        SkillForge is a digital solutions company specialising in creating learning platforms for students, professionals, and institutions. 
        Our mission is to make skill development accessible and engaging through innovative technology.
      </p>
    </section>
  );
}

export default About;

    // <section style={{ padding: "60px 20px", backgroundColor: "#f3f4f6", textAlign: "center" }}>
    //   <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>About SkillForge</h2>
    //   <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6" }}>
    //     SkillForge is a digital solutions company specialising in creating learning platforms for students, professionals, and institutions. 
    //     Our mission is to make skill development accessible and engaging through innovative technology.
    //   </p>
    // </section>