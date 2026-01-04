import React from 'react';
import styles from './NewCourses.module.css';

function Courses() {
  const courses = [
    { title: "Python for Beginners", level: "Beginner" },
    { title: "UI/UX Design Basics", level: "Beginner" },
    { title: "AI Personal Assistants", level: "Intermediate" },
    { title: "Web Development Bootcamp", level: "Intermediate" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Example Courses</h2>
      <div className={styles.course_mapping}>
        {courses.map((c, i) => (
          <div key={i} className={styles.course_key_mapping}>
            <h3>{c.title}</h3>
            <p>Level: {c.level}</p>
            <button className={styles.button}>Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

//   return (
//     <section style={{ padding: "60px 20px", backgroundColor: "#f3f4f6", textAlign: "center" }}>
//       <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Example Courses</h2>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
//         {courses.map((c, i) => (
//           <div key={i} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", width: "220px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
//             <h3>{c.title}</h3>
//             <p>Level: {c.level}</p>
//             <button style={{ marginTop: "10px", padding: "8px 16px", borderRadius: "6px", border: "none", backgroundColor: "#3b82f6", color: "#fff", cursor: "pointer" }}>Enroll</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }