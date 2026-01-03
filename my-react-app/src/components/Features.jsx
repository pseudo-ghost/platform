import React from 'react';

function Features() {
  const features = [
    { title: "Interactive Courses", desc: "Engaging lessons, quizzes, and hands-on projects." },
    { title: "Skill Tracking", desc: "Track your progress and achievements across multiple skills." },
    { title: "AI Recommendations", desc: "Get personalized learning suggestions powered by AI." },
    { title: "Certificates", desc: "Earn certificates to showcase your new skills." },
  ];

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Platform Features</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {features.map((f, i) => (
          <div key={i} style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "10px", width: "250px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
