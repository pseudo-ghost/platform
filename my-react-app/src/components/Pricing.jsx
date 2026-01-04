import React from 'react';

const Pricing = () => {
  const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <path d="M8 12L11 15L16 9" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CrossIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
      <path d="M9 9L15 15M15 9L9 15" stroke="#FF5252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const styles = {
    container: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%)', 
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#ffb703',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    glassWrapper: {
      maxWidth: '1000px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.03)', 
      backdropFilter: 'blur(10px)', 
      WebkitBackdropFilter: 'blur(10px)', 
      borderRadius: '20px',
      padding: '30px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: '0 8px' 
    },
    th: {
      padding: '20px',
      fontSize: '1.2rem',
      color: '#ffb703',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    td: {
      padding: '18px',
      transition: 'all 0.3s ease'
    },
   
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
    e.currentTarget.style.transform = 'scale(1.01)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <section id="pricing" style={styles.container}>
      <h2 style={styles.title}>Plan Comparison</h2>
      <div style={styles.glassWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Feature</th>
              <th style={styles.th}>The Apprentice</th>
              <th style={styles.th}>The Specialist</th>
              <th style={styles.th}>The Master</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Course Access", "10 Basic", "Unlimited", "Unlimited+Beta"],
              ["AI Skill Assistant", <CrossIcon />, <CheckIcon />, <CheckIcon />],
              ["Certifications", <CheckIcon />, <CheckIcon />, <CheckIcon />],
              ["Mentorship", "Community", "Email", "1-on-1"],
              ["Monthly Price", "Free", "$29", "$89"]
            ].map((row, index) => (
              <tr 
                key={index} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                style={{ cursor: 'pointer', borderRadius: '10px' }}
              >
                <td style={styles.td}>{row[0]}</td>
                <td style={styles.td}>{row[1]}</td>
                <td style={styles.td}>{row[2]}</td>
                <td style={styles.td}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;