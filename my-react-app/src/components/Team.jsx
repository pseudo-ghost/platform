import React from 'react';

function Team() {
  const members = [
    { name: "Faadhil", role: "Frontend Developer", img: "https://via.placeholder.com/100" },
    { name: "Leena", role: "Backend Developer", img: "https://via.placeholder.com/100" },
    { name: "Parisa", role: "UI/UX Designer", img: "https://via.placeholder.com/100" },
  ];

  return (
    <section style={{ padding: "60px 20px", backgroundColor: "#f3f4f6", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Meet Our Team</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {members.map((m, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <img src={m.img} alt={m.name} style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "10px" }} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
